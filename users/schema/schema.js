//KEY - schema contains all of the knowledge required for telling GraphQL exactly what your applications data looks like, including what properties each object has AND exactly how each object object is related to each other.

const graphql = require('graphql');
const {
  // to instruct GraphQL about the presence of a user, the idea of a a user
  GraphQLObjectType,
  GraphQLString,
} = graphql;

// This object instructs GraphQL about what the User object will look like
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    // fields propery is the most important property here
    // This tells GraphQL about all the different properties that a User has
    // keys of this object is the names of the properties that the user has
    // This tells graphQL that every single user will have an id, firstName and an age. Thats it
    // value of his object is the type of data each of the fields are. To communicate this to GraphQL we will use the built in types
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
    // this communicates to GraphQL that every User will user will have an id that is a string
    // every user will have a firstName that is a string and
    // every User will have an age and it is an Int
    // we made use of GraphQLString and GraphQLInt, we need to make sure that we import them from graphql library
  }
});
