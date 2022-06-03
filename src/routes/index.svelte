<script>
  import Feed from '$lib/components/Feed.svelte'
  import RecommendedProfiles from '$lib/components/RecommendedProfiles.svelte'
  import userProfile from '$lib/stores/userProfile'
  import { wallet } from '$lib/stores/wallet'

  console.log($wallet)
</script>

{#if $userProfile}
  <div class="col-span-3 lg:col-span-2">
    <Feed />
  </div>
  <div class="col-span-3 lg:col-span-1">
    <RecommendedProfiles />
  </div>
{:else}
  <div class="col-span-3">
    <div class="alert shadow-lg bg-neutral text-neutral-content">
      <div>
        <span class="text-xl">🤖</span>
        <span class="text-xl">Please log in to view your feed.</span>
      </div>
    </div>
  </div>
{/if}
