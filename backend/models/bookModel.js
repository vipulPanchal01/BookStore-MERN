import mongoose from "mongoose"; // Import mongoose library to interact with MongoDB

// Define the book schema directly
const bookSchema = new mongoose.Schema(
    {
        title: { // Define the 'title' field in the schema
            type: String, // 'title' should be a string
            required: true, // 'title' is required, so each book must have a title
        },
        author: { // Define the 'author' field in the schema
            type: String, // 'author' should be a string
            required: true, // 'author' is required, so each book must have an author
        },
        publishYear: { // Define the 'publishYear' field in the schema
            type: Number, // 'publishYear' should be a number
            required: true, // 'publishYear' is required, so each book must have a publish year
        },
    },
    {
        timestamps: true, // Add timestamps for 'createdAt' and 'updatedAt' fields automatically
    }
);

// Export the Book model
export const Book = mongoose.model('Book', bookSchema); // Create and export the Book model based on the bookSchema
