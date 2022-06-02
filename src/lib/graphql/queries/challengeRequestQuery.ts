import { gql } from '@urql/svelte'

const challengeRequestQuery = gql(`
  query($request: ChallengeRequest!) {
    challenge(request: $request) { text }
  }
`)

export default challengeRequestQuery