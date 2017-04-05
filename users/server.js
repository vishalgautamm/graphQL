// All the logic related to the express part is going to live
const express = require ('express');
// Library that helps registering graphQL to express
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');


const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
