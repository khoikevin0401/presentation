import { gql } from "@apollo/client"

export const LOGIN = gql`
  mutation login($input: InputLogin!) {
    login(inputLogin: $input) {
      access_token
    }
  }
`
export const REGISTER = gql`
  mutation registerUser($input: RegisterInput!) {
    registerUser(input: $input) {
      access_token
    }
  }
`