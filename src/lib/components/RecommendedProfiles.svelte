<script lang="ts">
  import { browser } from '$app/env'
  import { goto } from '$app/navigation'
  import { getPolygonSdk } from '$lib/eth-sdk'
  import { wallet } from '$lib/stores/wallet'
  import type { JsonRpcSigner } from '@ethersproject/providers'
  import { KQL_RecommendedProfiles as recommended } from '$lib/graphql/_kitql/graphqlStores'

  $: browser && recommended.query()

  const followUser = async (id: number) => {
    const signer = wallet.provider?.getSigner()
    const sdk = getPolygonSdk(<JsonRpcSigner>signer)
    const lensHub = sdk.lensHub
    const tx = await lensHub.follow([id], [[]])
    await tx.wait()
  }
</script>

<article class="prose mb-3">
  <h3>✨ Who to follow</h3>
</article>
<div class="rounded-lg shadow-lg shadow-secondary border p-3">
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <tbody>
        {#if $recommended.data}
          {#each $recommended.data.recommendedProfiles.slice(0, 5) as profile}
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div
                      class="mask mask-squircle w-12 h-12 cursor-pointer"
                      on:click={() => goto(`/u/${profile.handle}`)}
                    >
                      {#if profile.picture && profile.picture.__typename == 'MediaSet'}
                        <img src={profile.picture.original.url} alt={profile.handle} />
                      {:else if profile.picture?.__typename == 'NftImage'}
                        <img src={profile.picture.uri} alt={profile.handle} />
                      {:else}
                        <img src="/img/default_avatar.jpg" alt={profile.handle} />
                      {/if}
                    </div>
                  </div>
                  <div>
                    <div
                      class="font-bold cursor-pointer"
                      on:click={() => goto(`/u/${profile.handle}`)}
                    >
                      {profile.name}
                    </div>
                    <div
                      class="text-sm text-magic cursor-pointer"
                      on:click={() => goto(`/u/${profile.handle}`)}
                    >
                      {profile.handle}
                    </div>
                  </div>
                </div>
              </td>

              <th>
                <button class="btn btn-ghost glass btn-xs" on:click={() => followUser(profile.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-4 h-4"
                    ><path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          {/each}
        {/if}
        {#if !$recommended.data && !$recommended.errors}
          {#each [0, 1, 2, 3, 4] as i}
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="rounded-full w-12 h-12 shimmer" />
                  </div>
                  <div class="space-y-3">
                    <div class="rounded-lg w-28 h-3 shimmer" />
                    <div class="rounded-lg w-20 h-3 shimmer" />
                  </div>
                </div>
              </td>
              <th>
                <div class="rounded w-6 h-6 shimmer" />
              </th>
            </tr>
          {/each}
        {/if}
        {#if $recommended.errors}
          <div class="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="font-semibold">Failed to fetch recommended profiles.</span>
            </div>
          </div>
        {/if}
      </tbody>
    </table>
  </div>
</div>
