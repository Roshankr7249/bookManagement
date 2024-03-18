// server.js

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
const bookResolver = require('./resolvers/bookResolver');
const userResolver = require('./resolvers/userResolver');
const { generateToken, verifyToken, hashPassword, comparePassword } = require('./utils/auth');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();
// Create an Express application
const app = express();

// Create an ApolloServer instance
const server = new ApolloServer({
    typeDefs,
    resolvers: [bookResolver, userResolver],
    context: ({ req }) => {
      // Get the user from the request headers if present
      const token = req.headers.authorization || '';
      let user = null;
      if (token) {
        try {
          user = verifyToken(token);
        } catch (error) {
          console.error('Invalid token:', error.message);
        }
      }
      return { user };
    },
  });

  async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
  }
  
  startServer().then(() => {
    // Define port
    const PORT = process.env.PORT || 3000;
  
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    });
  }).catch(error => {
    console.error('Error starting server:', error);
    process.exit(1);
  });
