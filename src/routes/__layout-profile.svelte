<script>
  import '../app.css'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { initGraphQLClient, upgradeGraphQLClient } from '$lib/graphql/client'
  import { prerendering } from '$app/env'

  initGraphQLClient()

  if (prerendering) {
    upgradeGraphQLClient()
  }
</script>

<div class="flex flex-col h-screen justify-between">
  <!-- Navigation -->
  <Navigation />

  <!-- Body -->
  <main class="bg-base-200 flex-grow">
    <div class="w-full mx-auto">
        <slot />
    </div>
  </main>

  <!-- Footer -->
  <Footer />
</div>
