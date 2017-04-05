//KEY - schema contains all of the knowledge required for telling GraphQL exactly what your applications data looks like, including what properties each object has AND exactly how each object object is related to each other.
const graphql = require('graphql');
const _ = require('lodash');
const {
  // to instruct GraphQL about the presence of a user
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const users = [
  {id: '23', firstName: 'Bill', age: 20},
  {id: '47', firstName: 'Samantha', age: 21}
]

// This tells GraphQL that our app has the concept of a User and each User has an id, firstName and age
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

// Root Query

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLString}}, // arguments that are required for a root query
      resolve(parentValue, args) {
        return _.find(users, {id: args.id });
      }
    }
  }
});

/*
Explanation:

- You can ask me (the RootQuerty) about users in the applicaiton
- If you give me (args) the id of the user that you are looking for, I will return a user (UserType) back to you

- Resolve function
  - takes in two arguments - parentValue, args
  - Purpose: if you are looking for a User with an ID of 23, okay I will do my best to find it
  - it is where we actually go into our database and find the data that we are actually looking for
  - parentValue: never really used, ignore it
*/

// GraphQLSchema -> takes in a Root Query and returns a GraphQLSchema instance
module.exports = new GraphQLSchema({
  query: RootQuery
});

