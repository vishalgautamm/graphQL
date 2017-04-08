# Introduction
## Structure of the course
* What is GraphQL and Why does it exist
  * What does it do for us
* How do we use GraphQL
  * How to make use of it in our backend
  * how to wire it to our React fronted

*Before we start talking about GraphQL, we need to understand RESTful routing and its limitations*

### REST-ful Routing
* Given a collection of records on a server, there should be a uniform URL and HTTP results method used to utilize that collection of records
* Sum set of conventions, used in Web Dev for minipuaoting a collection of data, hosted on a server.
* Common rules around the HTTP requests and URL, used for creating, reading , updating and deleting data sitting on the data

### Example:
* Lets assume we are creating a UI for a blog webite, where users can add a blog, edit it, read it and then delete it
* RESTful routing when applied to blog example - what type of HTTP request is used and what type of URL we send it to when we want to create, edit read and delete a post

##When we start to nest data, things get really weird.

#### Restful Conventions
* is talking about very common URLs and HTTP method types that we use for these very common operations of manipulating data.
* They are not a  hard coded set of rules - they are used conventions that we tend to see in different frameworks and in different languages
* These rules start to break down once you start to get to a very heavily nested or heavily related data.

### A more complex example:
* It might look very easy and straight forward, but there is a hidden complexity here
* In the example below, I have a list of users, the company that they work at and their title
* Lets image where the data is coming from. We have four of them
  * UserImage
  * UserName
  * CompanyName and
  * PositionName
* How might we store this data in our database (whether SQL or noSQL) - one option to create a User model and every user has a name, image company_id and position_name
* It may not be the best approach since - it is fairly hard to get the list of all company_names and the users who work in that company (figure below)

* As an alternative Schema, we can come up with the following:
    * We have a three separate collection: a collection of Users, A collection of Companies and a collection of their position
    * A user has a pointer to the company and their position name

* So we got the Current User and all of their friends  and we have got all the companies and positions related to them
* Now if we were to produce some type of  REST-ful URL and HTTP methodology for getting access to each of these items, what restful conventions might we use here
    * for the first two, things aren’t that bad.
    * but things get complicated when we reach the third part - what URL might we put to represent the  companies and position name of users friends’

### Option A of RESTful routing
* For getting all these particular companies and positions, we could have URL like:
    * for friend with Id: 1, we could do /users/1/companies - and that would give me company with id: 5 and we can do the same thing for their position. And then we repeat the same process of their other friends as well
    * Downside: we would be making a ton of separate HTTP request to our backend server to get this data.
    * That would end up being a lot of separate requests, just to get this data, that other wise looks like it would be simple to get for mock up that we looked up earlier.

### Option B
* We would do like /users/23/friends/companies - so in theory that would give us all the companies and all the positions related to user with ID: 23’s friends
* Looks a bit more realistic -but it has one problem
* Problem - it is very particular, it is very customized
* Could be painful if we wanted to have a lot of different end points that fetched these very customized pieces of datas

### Final Option
* Make one, very particular, very customized end point that really starts to break RESTful conventions
* Find the user with Id:23 and I am going to make an custom end point called friends_with_companies_and_positions and this single end point would fetch me user 23 with all their friends and all of their associated companies and positions
* With this URL, we are definitely breaking the RESTful conventions
* In conclusion - RESTful conventions tend to break down once we are dealing with highly related data
    * We either run to problems of issues of having too many HTTP requests or
    * we tend to run into big issues where we have a very customized end point that are  painful to code

### Another big issue:
* Lets image that we are using the end point (/users/23/friends_with_companies_and_positions). Lets imagine we were programming this thing. Lets say we wanted to get the name of the company that are associated with with our friends.
* If we made a request like this, and we got back a list of all the companies that are associated with our friends, by default, we might return the entire company model might have all the unnecessary datas that we don’t really need. Datas like stock ticker, employee count, year that company was founded etc… all these datas that we don’t really care about
* We are over serving the amount of data to the client.

**AKA RESTful routing with highly relational data tends  to get quite challenging.**

THIS is what **GraphQL** is looking to fix.
* it wants to fix some real bing inconsistent around RESTful routing
* And also tackle big issues around over serving data

# GraphQL

## What is GraphQL
* A Graph is a data structure that contains nodes, and relations between each of these notes called edges. This is the graph, which GraphQL is referring to
* Understanding how our information fits into a graph data structure like this is key to understanding how graphQL works
* One thing about graph structure: not saying that we are going to change how our data is being stored in the DB. We can still use MongoDB or postgreSQL to store data. We are just looking at this diagram to visualize. how all of our data is connected together via all the different relations

### Goal: Create a GraphQL Application

### Overall Architecture of the Application
* First make an server instance using express
* Hook it up to a data store of some kind
* Test the queries using pre-built application called graphiql (GraphiQL is a prebuilt app by the GraphQL team - and it is made solely for development purposes to get a better sense of how the graphQL works and how we can execute queries with it)

### Architecture Overview
* Express: Responsible for making HTTP request and makes responses to send back to user
* Express-GraphQL: A compatibility layer between express and graphQL. By default express and graphQL have no idea how to work with each other. This package provides a glue code to make the two packages work together nicely
* GraphQL: The actual graphQL library, used to crawl through all of our data
* Lodash: Library that has a couple of utility functions  - which will make our life easier when building applications
