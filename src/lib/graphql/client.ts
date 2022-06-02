import { initClient } from '@urql/svelte'

export const initGraphQLClient = () => {
  initClient({
    url: 'https://api.lens.dev'
  })
}