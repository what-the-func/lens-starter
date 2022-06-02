import { gql } from "@urql/svelte";

const refreshTokenMutation = gql(`
  mutation($request: RefreshRequest!) { 
    refresh(request: $request) {
      accessToken
      refreshToken
    }
  }
`)

export default refreshTokenMutation