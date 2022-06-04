import { STORAGE_KEY } from './constants'
import { kitQLClient } from './graphql/kitQLClient'
import type { Maybe, ProfileMedia } from '$lib/graphql/_kitql/graphqlTypes'

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

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY)
}

export const upgradeGQLClient = () => {
  const { accessToken } = JSON.parse(<string>localStorage.getItem(STORAGE_KEY))
  const headers = kitQLClient.getHeaders()
  kitQLClient.setHeaders({
    ...headers,
    'x-access-token': `Bearer ${accessToken}`
  })
}

export const getPictureUrl = (picture: Maybe<ProfileMedia> | undefined) => {
  if (!picture) {
    return null
  }

  if (picture.__typename === 'MediaSet') {
    return picture.original.url
  }

  if (picture.__typename === 'NftImage') {
    return picture.uri
  }
}
