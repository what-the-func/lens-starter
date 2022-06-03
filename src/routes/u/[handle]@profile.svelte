<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit'
  import { createClient } from '@urql/svelte'
  import profileQuery from '$lib/graphql/queries/profileQuery'
  import { APIURL } from '$lib/constants'

  export const load: Load = async ({ params }) => {
    const { handle } = params

    const client = createClient({ url: APIURL })
    const result = await client
      .query(profileQuery, { request: { handles: [handle], limit: 1 } })
      .toPromise()

    const profile = result.data.profiles.items[0]

    return {
      props: {
        profile
      }
    }
  }
</script>

<script>
  import NotImplemented from '$lib/components/NotImplemented.svelte'

  export let profile
</script>

{#if profile}
  <div
    class="hero bg-gray-500 top-0 h-52 sm:h-80"
    style={`background-image: url(${
      profile.coverPicture ? profile.coverPicture.original.url : ''
    });`}
  />
  <div class="max-w-7xl py-12 mx-auto">
    <div class="grid grid-cols-12 lg:gap-8">
      <div class="lg:col-span-4 md:col-span-12 col-span-12 ">
        <div class="px-5 mb-4 space-y-5 sm:px-0">
          <div class="relative -mt-24 w-32 h-32 sm:-mt-32 sm:w-52 sm:h-52 avatar">
            <img
              src={profile.picture ? profile.picture.original.url : '/img/default_avatar.jpg'}
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
