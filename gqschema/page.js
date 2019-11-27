const { gql } = require("apollo-server-express");
module.exports = gql`
  type Page {
    name: String!
    description: String!
    status: String!
    id: ID!
  }
  extend type Query {
    users: [User!]
    user(id: ID!): User!
  }
  extend type Mutation {
    addUser(
      name: String!
      email: String!
      role: String!
      password: String!
    ): User!
    updateUser(
      id: ID!
      name: String!
      email: String!
      role: String!
      password: String!
    ): User!
    deleteUser(id: ID!): Boolean!
  }
`;
