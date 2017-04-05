const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

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
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data);
      }
    }
  }
});

/*
Explanation:
- You can ask me (the RootQuery) about users in the applicaiton
- If you give me (args) the id of the user that you are looking for, I will return a user (UserType) back to you
- Resolve function
  - takes in two arguments - parentValue, args
  - Purpose: if you are looking for a User with an ID of 23, okay I will do my best to find it
  - it is where we actually go into our database and find the data that we are actually looking for
  - parentValue: never really used, ignore it
*/

// GraphQLSchema -> takes in a RootQuery and returns a GraphQLSchema instance
module.exports = new GraphQLSchema({
  query: RootQuery
});

