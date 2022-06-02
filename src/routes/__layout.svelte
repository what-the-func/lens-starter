<script>
  import '../app.css'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { initGraphQLClient } from '$lib/graphql/client'

  initGraphQLClient()
</script>

<div class="flex flex-col h-screen justify-between">
  <!-- Navigation -->
  <Navigation />

  <!-- Body -->
  <section class="bg-base-200 flex-grow">
    <div class="max-w-7xl py-12 mx-auto">
      <div class="grid gap-8 md:grid-cols-3 lg:gap-12">
        <slot />
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />
</div>
