<script lang="ts">
  import userProfile from '$lib/stores/userProfile'
  import { KQL_Timeline } from '$lib/graphql/_kitql/graphqlStores'
  import { browser } from '$app/env'
  import { upgradeGQLClient } from '$lib/utils'
  import type { Publication } from '$lib/graphql/_kitql/graphqlTypes'
  import { getPictureUrl } from '$lib/utils'

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
    {#each feed as pub}
      <article class="bg-base-300 border rounded-xl text-left shadow-lg shadow-secondary">
        <div class="flex items-start p-6">
          <div class="avatar">
            <a
              sveltekit:prefetch
              class="mask mask-circle w-12 h-12"
              href={`/u/${pub.profile.handle}`}
            >
              <img
                src={getPictureUrl(pub.profile.picture) || '/img/default_avatar.jpg'}
                alt={pub.profile.handle}
              />
            </a>
          </div>

          <div class="ml-4">
            <p class="text-sm text-base-content line-clamp-2">
              {pub.metadata.content}
            </p>

            <div class="mt-2 sm:flex sm:items-center sm:gap-2">
              <p class="hidden sm:block sm:text-xs sm:text-base-content">
                Posted by
                <a href={`/u/${pub.profile.handle}`} class="font-medium underline text-magic"
                  >{pub.profile.handle}</a
                >
              </p>
            </div>
          </div>
        </div>
      </article>
    {/each}
  {/if}
</div>
