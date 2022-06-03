<script lang="ts">
  import { timelineQuery } from '$lib/graphql/queries/timelineQuery'
  import { operationStore, query } from '@urql/svelte'
  import userProfile from '$lib/stores/userProfile'
  import { STORAGE_KEY } from '$lib/constants'
  import type { Publication } from '$lib/graphql/types'
  import { goto } from '$app/navigation'

  const timeline = operationStore(timelineQuery)
  let feed: Array<Publication> = []

  $: if ($userProfile) {
    const storageData = JSON.parse(<string>localStorage.getItem(STORAGE_KEY))
    timeline.variables = {
      request: {
        profileId: $userProfile.id,
        limit: 10
      }
    }
    timeline.context = {
      fetchOptions: {
        headers: {
          'x-access-token': `Bearer ${storageData.accessToken}`
        }
      }
    }
    query(timeline)
  }

  $: if ($timeline.data) {
    feed = $timeline.data.timeline.items
  }
</script>

<article class="prose mb-3">
  <h3>📰 What's New?</h3>
</article>
<div class="text-center space-y-4">
  {#each feed as pub}
    <article class="bg-base-300 border rounded-xl text-left shadow-lg shadow-secondary">
      <div class="flex items-start p-6">
        <div class="avatar">
          <div
            class="rounded-full w-12 h-12 cursor-pointer ring ring-primary ring-offset-base-100 ring-offset-2"
            on:click={() => goto(`/u/${pub.profile.handle}`)}
          >
            {#if pub.profile.picture && pub.profile.picture.__typename == 'MediaSet'}
              <img src={pub.profile.picture.original.url} alt={pub.profile.handle} />
            {:else if pub.profile.picture?.__typename == 'NftImage'}
              <img src={pub.profile.picture.uri} alt={pub.profile.handle} />
            {:else}
              <img src="/img/default_avatar.jpg" alt={pub.profile.handle} />
            {/if}
          </div>
        </div>

        <div class="ml-4">
          <p class="text-sm text-base-content line-clamp-2">
            { pub.metadata.content }
          </p>

          <div class="mt-2 sm:flex sm:items-center sm:gap-2">

            <p class="hidden sm:block sm:text-xs sm:text-base-content">
              Posted by
              <a href={`/u/${pub.profile.handle}`} class="font-medium underline text-magic">{pub.profile.handle}</a>
            </p>
          </div>
        </div>
      </div>
    </article>
  {/each}
</div>
