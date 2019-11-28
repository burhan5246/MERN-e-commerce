const { GraphQLDateTime } = require("graphql-iso-date");

const userResolvers = require("./user");
const pageResolvers = require("./page");

const customScalarResolver = {
  Date: GraphQLDateTime
};

const metaKeyValueArray = {
  metaKeyValueArray: []
};

const customObject = {
  customObject: {}
};
module.exports = [
  customScalarResolver,
  metaKeyValueArray,
  customObject,
  userResolvers,
  pageResolvers
];
