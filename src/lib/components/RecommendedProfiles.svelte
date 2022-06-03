<script lang="ts">
  import { operationStore, query } from '@urql/svelte'
  import recommendedProfilesQuery from '$lib/graphql/queries/recommendedProfiles'

  const profiles = operationStore(recommendedProfilesQuery)
  query(profiles)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let recommendedProfiles: Record<string, any>[] = []

  $: if ($profiles.data) {
    recommendedProfiles = $profiles.data.recommendedProfiles
  }

  let fetchError = false
  $: if ($profiles.error) {
    fetchError = true
    console.error($profiles.error)
  }
</script>

<article class="prose mb-3">
  <h3>✨ Who to follow</h3>
</article>
<div class="rounded-lg shadow-lg shadow-secondary border p-3">
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <tbody>
        {#each recommendedProfiles.slice(0, 5) as profile}
          <tr>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src={profile.picture
                        ? profile.picture.original.url
                        : '/img/default_avatar.jpg'}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{profile.name}</div>
                  <div class="text-sm text-magic">{profile.handle}</div>
                </div>
              </div>
            </td>

            <th>
              <button class="btn btn-ghost glass btn-xs">
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
        {#if recommendedProfiles.length === 0 && !fetchError}
          {#each [0, 1, 2, 3, 4] as i}
            <tr>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <div class="rounded-full w-12 h-12 shimmer" />
                    </div>
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
        {#if fetchError}
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
