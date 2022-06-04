import { KitQLClient } from '@kitql/client'

export type AppHeaders = {
  'x-access-token'?: `Bearer ${string}`
}

export const kitQLClient = new KitQLClient<AppHeaders>({
  url: 'https://api.lens.dev',
  headersContentType: 'application/json',
  logType: ['client', 'server', 'operationAndvariables'],
})