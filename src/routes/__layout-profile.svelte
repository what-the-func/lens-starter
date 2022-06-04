<script>
  import '../app.css'
  import Navigation from '$lib/components/Navigation.svelte'
  import Footer from '$lib/components/Footer.svelte'
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
