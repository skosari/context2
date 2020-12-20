/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
      id
      text
      amount
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTransactionss = /* GraphQL */ `
  query ListTransactionss(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        amount
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
