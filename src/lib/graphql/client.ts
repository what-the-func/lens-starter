import { APIURL, STORAGE_KEY } from '$lib/constants'
import { refreshAuthToken } from '$lib/utils'
import { createClient, setClient } from '@urql/svelte'

const basicClient = createClient({
  url: APIURL
})

export const initGraphQLClient = async () => { 
  setClient(basicClient)  
}

export const upgradeGraphQLClient = async () => { 
  const storageData = JSON.parse(<string>localStorage.getItem(STORAGE_KEY))
  if (storageData) {
    try {
      const accessToken = await refreshAuthToken(basicClient, storageData)
      const authClient = createClient({
        url: APIURL,
        fetchOptions: {
          headers: {
            'x-access-token': `Bearer ${accessToken}`
          }
        }
      })
      setClient(authClient)
    } catch (err) {
      console.log('error refreshing token: ', err)
    }
  } else {
    setClient(basicClient)
  }
}