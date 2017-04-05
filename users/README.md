## Introduction
### Structure of the course
* Why does GraphQL exist
* What is GraphQL
  * what does it do for us
* How do we use GraphQL
  * How to make use of it in our backend
  * how to wire it to our React fronted

#### REST-ful Routing
* Given a collection of records on a server, there should be a uniform URL and HTTP results method used to utilize that collection of records
* Sum set of conventions, used in Web Dev for minipuaoting a collection of data, hosted on a server.
* Common rules around the HTTP requests and URL, used for creating, reading , updating and deleting data sitting on the data

#### Example:
* Lets assume we are creating a UI for a blog webite, where users can add a blog, edit it, read it and then delete it
* RESTful routing when applied to blog example - what type of HTTP request is used and what type of URL we send it to when we want to create, edit read and delete a post

### When we start to nest data, things get really weird.

#### Restful Conventions
* is talking about very common URLs and HTTP method types that we use for these very common operations of manipulating data
* They are not a  hard coded set of rules - they are used conventions that we tend to see in different frameworks and in different languages
* These rules start to break down once you start to get to a very heavily nested or heavily related data.
A more complex example:
* It might look very easy and straight forward, but there is a hidden complexity here
* In the example below, I have a list of users, the company that they work at and their title
* Lets image where the data is coming from. We have four of them
    * UserImage
    * UserName
    * CompanyName and
    * PositionName
