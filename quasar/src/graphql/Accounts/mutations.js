import gql from 'graphql-tag'

export const createAccount = gql`
  mutation createAccount($name: String!) {
    createAccount(name: $name)
  }
`
