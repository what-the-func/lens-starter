import { gql } from '@urql/svelte'
import { collectModuleFieldsFragment, commentBaseFieldsFragment, commentFieldsFragment, commentMirrorOfFieldsFragment, erc20FieldsFragment, mediaFieldsFragment, mediaOutputFragment, mirrorBaseFieldsFragment, mirrorFieldsFragment, postFieldsFragment, profileFieldsFragment, publicationStatsFragment, walletFieldsFragment } from '../fragments'

export const timelineQuery = gql(`
  query($request: TimelineRequest!) {
    timeline(request: $request) {
      items {
        __typename 
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }

  ${mediaFieldsFragment}
  ${profileFieldsFragment}
  ${publicationStatsFragment}
  ${mediaOutputFragment}
  ${erc20FieldsFragment}
  ${collectModuleFieldsFragment}
  ${postFieldsFragment}
  ${mirrorBaseFieldsFragment}
  ${mirrorFieldsFragment}
  ${commentBaseFieldsFragment}
  ${commentFieldsFragment}
  ${commentMirrorOfFieldsFragment}
  ${walletFieldsFragment}
`)
