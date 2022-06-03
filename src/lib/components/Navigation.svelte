<script>
  import SignIn from './SignIn.svelte'
</script>

<section class="sticky top-0 w-full px-8 text-gray-700 bg-base-300 shadow-xl z-50">
  <div
    class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
  >
    <div class="relative flex flex-col md:flex-row">
      <a
        href="#_"
        class="flex items-center mb-5 font-medium text-neutral lg:w-auto lg:items-center lg:justify-center md:mb-0"
      >
        <span class="mx-auto text-xl leading-none text-base-content select-none">
          🔍 Lens Starter
        </span>
      </a>
      <nav
        class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-secondary"
      >
        <a href="/" class="mr-5 font-medium leading-6 text-base-content hover:text-neutral">Home</a>
      </nav>
    </div>

    <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
      <SignIn />
    </div>
  </div>
</section>
