import { gql } from "@urql/svelte";

const authenticateMutation = gql(`
  mutation($request: SignedAuthChallenge!) { 
    authenticate(request: $request) {
      accessToken
      refreshToken
    }
  }
`)

export default authenticateMutation