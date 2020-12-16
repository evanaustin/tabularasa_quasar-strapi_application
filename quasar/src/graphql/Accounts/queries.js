import gql from 'graphql-tag'

export const getMe = gql`
  query me @client {
    me {
      id
      email
      firstName
      lastName
      accounts {
        id
        name
      }
      account {
        id
        name
      }
    }
  }
`
export const pullMyAccounts = gql`
  query user($id: ID!) {
    user(id: $id) {
      accounts {
        id
        name
      }
    }
  }
`
export const pullFullAccount = gql`
  query account($id: ID!) {
    account(id: $id) {
      id
      name
      modules {
        id
        name
      }
    }
  }
`
export const getMyAccounts = gql`
  query accounts @client {
    me {
      accounts {
        id
        name
      }
    }
  }
`
export const getMyAccount = gql`
  query account @client {
    me {
      account {
        id
        name
        modules {
          id
          name
        }
      }
    }
  }
`
export const getAccount = gql`
  query account @client {
    account {
      id
      name
      modules {
        id
        name
      }
    }
  }
`
