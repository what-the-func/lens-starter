import type { Client } from '@urql/svelte'
import { STORAGE_KEY } from './constants'
import { initGraphQLClient } from './graphql/client'
import refreshTokenMutation from './graphql/mutations/refreshTokenMutation'

export function parseJwt(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function refreshAuthToken(client: Client, token: any) {
  try {
    const authData = await client
      .mutation(refreshTokenMutation, {
        request: {
          refreshToken: token.refreshToken
        }
      })
      .toPromise()

    const { accessToken, refreshToken } = authData.data.refresh
    const exp = parseJwt(refreshToken).exp

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        accessToken,
        refreshToken,
        exp,
        profile: token.profile
      })
    )

    return accessToken
  } catch (err) {
    console.log('error:', err)
  }
}

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY)
  initGraphQLClient()
}