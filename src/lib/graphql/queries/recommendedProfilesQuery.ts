import { gql } from '@urql/svelte'

const recommendedProfilesQuery = gql(`
  query {
    recommendedProfiles {
      id
      name
      handle
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
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

export default recommendedProfilesQuery
