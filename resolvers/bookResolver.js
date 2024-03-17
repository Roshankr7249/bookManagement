const Book = require("../models/book");

const bookResolver = {
  Query: {
    //Fetching the books using Resolver function
    books: async () => {
      try {
        const books = await Book.find();
        return books;
      } catch (error) {
        throw new Error("Failed to fetch books");
      }
    },
  },
  Mutation: {
    //Creating book using Resolver function
    createBook: async (_, { title, author, genre }) => {
      try {
        const book = new Book({ title, author, genre });
        await book.save();
        return book;
      } catch (error) {
        throw new Error("Failed to create book");
      }
    },
    //updating book using Resolver function
    updateBook: async (_, { id, title, author, genre }) => {
      try {
        const updatedBook = await Book.findByIdAndUpdate(
          id,
          { title, author, genre },
          { new: true }
        );
        return updatedBook;
      } catch (error) {
        throw new Error("Failed to update book");
      }
    },
    //deleting book using Resolver function
    deleteBook: async (_, { id }) => {
      try {
        await Book.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error("Failed in deleting book");
      }
    },
  },
};

module.exports = bookResolver;
