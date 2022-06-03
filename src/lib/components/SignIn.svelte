<script lang="ts">
  import { getClient } from '@urql/svelte'
  import { goto } from '$app/navigation'
  import challengeRequestQuery from '$lib/graphql/queries/challengeRequestQuery'
  import defaultProfileQuery from '$lib/graphql/queries/defaultProfileQuery'
  import authenticateMutation from '$lib/graphql/mutations/authenticateMutation'
  import { onMount } from 'svelte'
  import { parseJwt, logout } from '$lib/utils'
  import { STORAGE_KEY } from '$lib/constants'
  import userProfile from '$lib/stores/userProfile'
  import { wallet } from '$lib/stores/wallet'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let provider: any
  let client = getClient()

  onMount(async () => {
    attemptLogin()
  })

  const attemptLogin = async () => {
    await wallet.connect('builtin')
    const storageData = JSON.parse(<string>localStorage.getItem(STORAGE_KEY))
    if (storageData) {
      $userProfile = storageData.profile
    }
  }

  const signIn = async () => {
    try {
      if (!$wallet.address) {
        await wallet.connect('builtin')
      }

      const challenge = await client
        .query(
          challengeRequestQuery,
          {
            request: { address: $wallet.address }
          },
          { requestPolicy: 'network-only' }
        )
        .toPromise()

      const { text } = challenge.data.challenge
      const signature = await wallet.provider?.getSigner().signMessage(text)

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

      const result = await client
        .query(defaultProfileQuery, {
          request: {
            ethereumAddress: provider.selectedAddress
          }
        })
        .toPromise()
      $userProfile = result.data.defaultProfile
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accessToken,
          refreshToken,
          exp: accessTokenData.exp,
          profile: $userProfile
        })
      )
    } catch (err) {
      console.error(err)
    }
  } 
</script>

{#if $userProfile !== null}
  <div class="dropdown dropdown-end">
    <div class="avatar" tabindex="0">
      <div
        class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer"
      >
        {#if $userProfile.picture && $userProfile.picture.__typename == 'MediaSet'}
          <img src={$userProfile.picture.original.url} alt={$userProfile.handle} />
        {:else if $userProfile.picture?.__typename == 'NftImage'}
          <img src={$userProfile.picture.uri} alt={$userProfile.handle} />
        {:else}
          <img src="/img/default_avatar.jpg" alt={$userProfile.handle} />
        {/if}
      </div>
    </div>
    <ul
      tabindex="0"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-56 text-base-content"
    >
      <li on:click={() => goto(`/u/${$userProfile?.handle}`)}>
        <div class="grid grid-flow-row gap-0">
          <div class="font-bold">Logged in as</div>
          <div class="text-sm text-magic">{$userProfile.handle}</div>
        </div>
      </li>
      <li>
        <button
          on:click={() => {
            $userProfile = null
            logout()
          }}
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <div>Logout</div>
        </button>
      </li>
    </ul>
  </div>
{:else}
  <button
    class="btn btn-xs sm:btn-sm md:btn-md btn-primary hover:btn-primary-focus space-x-2 font-semibold"
    on:click={signIn}
  >
    <img class="mr-0.5 w-4 h-4 invert" height="16" width="16" src="/img/lens.png" alt="Lens Logo" />
    <div>Login</div>
  </button>
{/if}
