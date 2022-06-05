<script lang="ts">
  import userProfile from '$lib/stores/userProfile'
  import { KQL_Timeline } from '$lib/graphql/_kitql/graphqlStores'
  import { browser } from '$app/env'
  import { upgradeGQLClient } from '$lib/utils'
  import type { Publication } from '$lib/graphql/_kitql/graphqlTypes'
  import { getPictureUrl } from '$lib/utils'
  import Post from './Post.svelte'

  $: if (browser && $userProfile) {
    upgradeGQLClient()
    KQL_Timeline.query({
      variables: {
        request: {
          profileId: $userProfile.id,
          limit: 10
        }
      },
      settings: {
        policy: 'network-only'
      }
    })
  }

  $: feed = $KQL_Timeline.data?.timeline.items as Publication[]
</script>

<article class="prose mb-3">
  <h3>📰 What's New?</h3>
</article>
<div class="text-center space-y-4">
  {#if feed}
    <article class="bg-base-300 border rounded-xl text-left shadow-lg shadow-secondary">
      {#each feed as pub}
        <div class="p-6 border-b last:border-0">
          {#if pub.__typename === 'Comment'}
            <Post pub={pub.mainPost} />
            <div class="divider text-secondary">
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          {/if}
          <Post {pub} />
        </div>
      {/each}
    </article>
  {:else}
    <article class="bg-base-300 border rounded-xl text-left shadow-lg shadow-secondary">
      {#each [0, 1, 2, 3, 4] as i}
        <div class="flex items-start p-6 border-b last:border-b-0">
          <div class="avatar">
            <div class="rounded-full w-12 h-12 shimmer" />
          </div>
          <div class="space-y-3 ml-4 w-full">
            <div class="rounded-lg w-4/5 h-3 shimmer" />
            <div class="rounded-lg w-3/5 h-3 shimmer" />
          </div>
        </div>
      {/each}
    </article>
  {/if}
</div>
