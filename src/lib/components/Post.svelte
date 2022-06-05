<script lang="ts">
  import type { Publication } from '$lib/graphql/_kitql/graphqlTypes'
  import { getPictureUrl } from '$lib/utils'

  export let pub: Publication
</script>

<div class="flex items-start">
  <div class="avatar">
    <a sveltekit:prefetch class="mask mask-circle w-12 h-12" href={`/u/${pub.profile.handle}`}>
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
        {pub.__typename}ed by
        <a href={`/u/${pub.profile.handle}`} class="font-medium underline text-magic">
          {pub.profile.handle}
        </a>
      </p>
    </div>
    <div class="flex gap-8 items-center pt-3 -ml-2 text-gray-500">
      <button aria-label="Comment">
        <a
          href="/posts/0x24-0x30"
          class="flex items-center space-x-1 text-blue-500 hover:text-blue-400"
        >
          <div class="p-1.5 rounded-full hover:bg-blue-300 hover:bg-opacity-20">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-[18px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </span>
          </div>
          <div class="text-xs">{pub.stats.totalAmountOfComments}</div></a
        >
      </button>
      <button aria-label="Mirror">
        <div class="flex items-center space-x-1 text-primary">
          <div class="p-1.5 rounded-full hover:bg-opacity-20 hover:bg-primary-focus">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-[18px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </span>
          </div>
          <div class="text-xs">{pub.stats.totalAmountOfMirrors}</div>
        </div>
      </button>
      <button aria-label="Collect">
        <div class="flex items-center space-x-1 text-red-500 hover:red-brand-400">
          <div class="p-1.5 rounded-full hover:bg-red-300 hover:bg-opacity-20">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-[18px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </span>
          </div>
          <div class="text-xs">{pub.stats.totalAmountOfCollects}</div>
        </div>
      </button>
    </div>
  </div>
</div>
