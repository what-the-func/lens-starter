<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import { KQL_Profile } from '$lib/graphql/_kitql/graphqlStores'

  export const load: Load = async ({ fetch, params }) => {
    const { handle } = params

    await KQL_Profile.queryLoad({
      fetch,
      variables: { request: { handles: [handle], limit: 1 } }
    })

    return {}
  }
</script>

<script lang="ts">
  import NotImplemented from '$lib/components/NotImplemented.svelte'
  import { getPictureUrl } from '$lib/utils'
  import type { Profile } from '$lib/graphql/_kitql/graphqlTypes';

  $: profile = $KQL_Profile.data?.profiles.items[0] as Profile
</script>

{#if profile}
  <div
    class="hero bg-gray-500 top-0 h-52 sm:h-80"
    style={`background-image: url(${getPictureUrl(profile.coverPicture)});`}
  />
  <div class="max-w-7xl py-12 mx-auto">
    <div class="grid grid-cols-12 lg:gap-8">
      <div class="lg:col-span-4 md:col-span-12 col-span-12 ">
        <div class="px-5 mb-4 space-y-5 sm:px-0">
          <div class="relative -mt-24 w-32 h-32 sm:-mt-32 sm:w-52 sm:h-52 avatar">
            <img
              src={getPictureUrl(profile.picture) || '/img/default_avatar.jpg'}
              class="w-32 h-32 bg-gray-200 rounded-xl ring-8 ring-primary sm:w-52 sm:h-52"
              height="128"
              width="128"
              alt={profile.handle}
            />
          </div>
          <div class="py-2 space-y-1">
            <div class="flex gap-1.5 items-center text-2xl font-bold">
              <div class="truncate">{profile.name}</div>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-magic">@{profile.handle}</span>
            </div>
          </div>
          <div class="space-y-5">
            <div class="flex gap-8">
              <button type="button" class="text-left">
                <div class="text-xl">{profile.stats.totalFollowing}</div>
                <div class="text-gray-500">Following</div>
              </button>
              <button type="button" class="text-left">
                <div class="text-xl">{profile.stats.totalFollowers}</div>
                <div class="text-gray-500">Followers</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-8">
        <NotImplemented />
      </div>
    </div>
  </div>
{/if}
