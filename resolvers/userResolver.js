const User = require("../models/user");

const userResolver = {
  Query: {
    // Resolver function
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
  },
  Mutation: {
    // Create user using Resolver function
    createUser: async (_, { username, email, password }) => {
      try {
        const user = new User({ username, email, password });
        await user.save();
        return user;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
  },
};

module.exports = userResolver;
