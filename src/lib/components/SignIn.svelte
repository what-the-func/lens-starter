<script lang="ts">
  import detectEthereumProvider from '@metamask/detect-provider'
  import { getClient } from '@urql/svelte'
  import challengeRequestQuery from '$lib/graphql/queries/challengeRequestQuery'
  import authenticateMutation from '$lib/graphql/mutations/authenticateMutation'
  import { onMount } from 'svelte'
  import { ethers } from 'ethers'
  import { parseJwt } from '$lib/utils'
  import { STORAGE_KEY } from '$lib/constants'
  import { upgradeGraphQLClient } from '$lib/graphql/client'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let provider: any
  let client = getClient()

  onMount(async () => {
    provider = await detectEthereumProvider()
  })

  const signIn = async () => {
    try {
      if (!provider.selectedAddress) {
        await provider.request({ method: 'eth_requestAccounts' })
      }

      const challenge = await client
        .query(challengeRequestQuery, {
          request: { address: provider.selectedAddress }
        })
        .toPromise()

      const { text } = challenge.data.challenge
      const ethersProvider = new ethers.providers.Web3Provider(provider)
      const signature = await ethersProvider.getSigner().signMessage(text)

      const authData = await client
        .mutation(authenticateMutation, {
          request: {
            address: provider.selectedAddress,
            signature
          }
        })
        .toPromise()

      const { accessToken, refreshToken } = authData.data.authenticate
      const accessTokenData = parseJwt(accessToken)
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accessToken,
          refreshToken,
          exp: accessTokenData.exp
        })
      )
      await upgradeGraphQLClient()
      client = getClient()
      console.log(client)
    } catch (err) {
      console.error(err)
    }
  }
</script>

{#if provider}
  <button
    class="btn btn-xs sm:btn-sm md:btn-md btn-primary hover:btn-primary-focus space-x-2 font-semibold"
    on:click={signIn}
  >
    <img class="mr-0.5 w-4 h-4 invert" height="16" width="16" src="/img/lens.png" alt="Lens Logo">
    <div>Login</div>
  </button>
{/if}
