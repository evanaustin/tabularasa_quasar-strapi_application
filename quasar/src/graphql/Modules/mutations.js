import gql from 'graphql-tag'

export const toggleModule = gql`
  mutation toggleModule($accountID: InputID!, $modules: [ID]!) {
    toggleModule(accountID: $accountID, modules: $modules) @client
  }
`

export const updateAccountModule = gql`
  mutation (
    $accountID: InputID,
    $modules: [ID]
  ) {
    updateAccount(
      input: {
        where: $accountID,
        data: {
          modules: $modules
        }
      }
    ) {
      account {
        name
        modules {
          name
        }
      }
    }
  }
`
