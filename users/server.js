// All the logic related to the express part is going to live
const express = require ('express');

// Library that helps registering graphQL to express
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true
}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
