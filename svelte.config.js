import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import watchAndRun from '@kitql/vite-plugin-watch-and-run'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        watchAndRun([
          {
            watch: '**/*.(gql|graphql)',
            run: 'npm run generate' // to trigger the script "gen" of your package.json
            // delay: 500, Optional parameter to delay the run command.
          }
        ])
      ]
    }
  }
}

export default config
