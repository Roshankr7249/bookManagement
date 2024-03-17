

const { gql } = require('apollo-server-express');

// Define GraphQL schema
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    genre: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    # Query to fetch all books
    books: [Book!]!

    # Query to fetch all users
    users: [User!]!
  }

  type Mutation {
    # Mutation to create a new book
    createBook(title: String!, author: String!, genre: String!): Book!

    # Mutation to update a book
    updateBook(id: ID!, title: String!, author: String!, genre: String!): Book!

    # Mutation to delete a book
    deleteBook(id: ID!): Boolean!

    # Mutation to create a new user
    createUser(username: String!, email: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
