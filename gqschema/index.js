const { gql } = require("apollo-server-express");
const userSchema = require("./user");
const pageSchema = require("./page");

const linkSchema = gql`
  scalar Date
  scalar metaKeyValueArray
  scalar customObject

  input Meta {
    key: String
    value: String
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, userSchema, pageSchema];
