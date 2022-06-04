<script>
  import '../app.css'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<div class="flex flex-col h-screen justify-between">
  <!-- Navigation -->
  <Navigation />

  <!-- Body -->
  <main class="bg-base-200 flex-grow px-5 lg:px-auto">
    <div class="max-w-7xl py-12 mx-auto">
      <div class="grid gap-8 md:grid-cols-3 lg:gap-12">
        <slot />
      </div>
    </div>
  </main>

  <!-- Footer -->
  <Footer />
</div>
