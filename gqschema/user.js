const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    email: String!
    name: String!
    role: String!
    id: ID!
    password: String!
    meta: customArray
  }

  input Meta {
    key: String
    value: String
  }
  extend type Query {
    users: [User]
    user(id: ID!): User
    userbyfilter(key: String): [User]
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
      meta: [Meta]
    ): User!
    deleteUser(id: ID!): Boolean!
  }
`;
