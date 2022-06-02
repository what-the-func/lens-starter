<script lang="ts">
  import { operationStore, query } from '@urql/svelte'
  import recommendedProfilesQuery from '$lib/graphql/queries/recommendedProfilesQuery'

  const profiles = operationStore(recommendedProfilesQuery)
  query(profiles)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let recommendedProfiles: Record<string, any>[] = []

  $: if ($profiles.data) {
    console.log($profiles.data)
    recommendedProfiles = $profiles.data.recommendedProfiles
  }
</script>

<article class="prose mb-2">
  <h3>✨ Who to follow</h3>
</article>
<div class="rounded shadow-xl">
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
                      src={ profile.picture ? profile.picture.original.url : '/img/default_avatar.jpg' }
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{ profile.name }</div>
                  <div class="text-sm opacity-50">{ profile.handle }</div>
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
      </tbody>
    </table>
  </div>
</div>
