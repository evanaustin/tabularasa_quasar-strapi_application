import gql from 'graphql-tag'

export const pullModules = gql`
  query modules {
    modules {
      id
      name
      enabled
    }
  }
`

export const getModules = gql`
  query modules @client {
    modules {
      id
      name
      enabled
    }
  }
`

export const getAccountModules = gql`
  query modules @client {
    account {
      id
      modules {
        id
        name
        enabled
      }
    }
  }
`
