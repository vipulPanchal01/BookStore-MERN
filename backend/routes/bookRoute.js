import express from "express"; // Import the Express library to create and manage routes
import { Book } from "../models/bookModel.js"; // Import the Book model from the models directory
const router = express.Router(); // Create a new router instance to define routes for book-related operations

// Post new book
router.post("/", async (req, res) => { // Define a POST route to add a new book
    try {
        const { title, author, publishYear } = req.body; // Extract title, author, and publishYear from request body
        if (!title || !author || !publishYear) { // Check if all required fields are provided
            return res.status(400).json({ message: "Send all required fields: title, author, publishYear" }); // Respond with an error if fields are missing
        }

        const newBook = new Book({ title, author, publishYear }); // Create a new Book instance with provided data
        await newBook.save(); // Save the new book to the database
        return res.status(201).send("Book saved successfully"); // Respond with a success message and status 201
    } catch (error) {
        console.error(error.message); // Log any errors to the console
        return res.status(500).json({ message: error.message }); // Respond with a server error message if an error occurs
    }
});

// Get all books
router.get("/", async (req, res) => { // Define a GET route to retrieve all books
    try {
        const books = await Book.find({}); // Fetch all books from the database
        return res.status(200).json({ count: books.length, data: books }); // Respond with the books and their count
    } catch (error) {
        console.error(error.message); // Log any errors to the console
        return res.status(500).json({ message: error.message }); // Respond with a server error message if an error occurs
    }
});

// Get book by ID
router.get("/:id", async (req, res) => { // Define a GET route to retrieve a book by its ID
    try {
        const { id } = req.params; // Extract the book ID from request parameters
        const book = await Book.findById(id); // Find the book by its ID
        if (!book) { // Check if the book exists
            return res.status(404).json({ message: "Book not found" }); // Respond with an error if book is not found
        }
        return res.status(200).json(book); // Respond with the book data if found
    } catch (error) {
        console.error(error.message); // Log any errors to the console
        return res.status(500).json({ message: error.message }); // Respond with a server error message if an error occurs
    }
});

// Update book by ID
router.put("/:id", async (req, res) => { // Define a PUT route to update a book by its ID
    try {
        const { title, author, publishYear } = req.body; // Extract updated data from the request body
        const { id } = req.params; // Extract the book ID from request parameters

        if (!title || !author || !publishYear) { // Check if all required fields are provided
            return res.status(400).json({ message: "Send all required fields: title, author, publishYear" }); // Respond with an error if fields are missing
        }

        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, publishYear }, { new: true }); // Update the book in the database

        if (!updatedBook) { // Check if the book was found and updated
            return res.status(404).json({ message: "Book not found" }); // Respond with an error if book is not found
        }

        return res.status(200).json({ message: "Book updated successfully", book: updatedBook }); // Respond with a success message and the updated book data
    } catch (error) {
        console.error(error.message); // Log any errors to the console
        return res.status(500).json({ message: error.message }); // Respond with a server error message if an error occurs
    }
});

// Delete book by ID
router.delete("/:id", async (req, res) => { // Define a DELETE route to delete a book by its ID
    try {
        const { id } = req.params; // Extract the book ID from request parameters
        const deletedBook = await Book.findByIdAndDelete(id); // Delete the book from the database

        if (!deletedBook) { // Check if the book was found and deleted
            return res.status(404).json({ message: "Book not found" }); // Respond with an error if book is not found
        }

        return res.status(200).json({ message: "Book deleted successfully" }); // Respond with a success message if deletion was successful
    } catch (error) {
        console.error(error.message); // Log any errors to the console
        return res.status(500).json({ message: error.message }); // Respond with a server error message if an error occurs
    }
});

export default router; // Export the router to be used in other parts of the application
