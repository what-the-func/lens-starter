import { gql } from '@urql/svelte'

const defaultProfileQuery = gql(`
  query($request: DefaultProfileRequest!) {
    defaultProfile(request: $request) {
      id
      name
      handle
      picture {
        ... on NftImage {
          uri
        }
        ... on MediaSet {
          original {
            url
          }
        }
      }
    }
  }
`)

export default defaultProfileQuery
