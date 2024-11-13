import express from "express"; // Import the Express library to create and manage a web server
import cors from "cors"; // Import the CORS library to handle cross-origin resource sharing
import mongoose from "mongoose"; // Import Mongoose to interact with MongoDB
import booksRoute from "./routes/bookRoute.js"; // Import the routes for handling book-related API requests
import { PORT, MONGO_URL } from "./config.js"; // Import environment variables for the port and MongoDB URL

const app = express(); // Initialize the Express application

// Middleware to handle CORS and JSON requests
app.use(cors()); // Enable CORS to allow requests from different origins
app.use(express.json()); // Enable the app to parse incoming JSON requests

// Root route
app.get("/", (req, res) => { // Define a GET route for the root ("/") URL
    res.status(200).send("Welcome to the book store"); // Respond with a welcome message and status 200
});

// Books route
app.use("/books", booksRoute); // Use the "booksRoute" for all requests starting with "/books"

// Connect to MongoDB and start the server
mongoose.connect(MONGO_URL) // Connect to MongoDB using the MONGO_URL from config
    .then(() => { // If the connection is successful, run the code inside
        console.log("Database connected successfully"); // Log a success message
        app.listen(PORT, () => { // Start the server to listen on the specified PORT
            console.log(`App is listening on PORT ${PORT}`); // Log a message that the server is running
        });
    })
    .catch((err) => { // If there's an error connecting to the database, run the code inside
        console.error("An error occurred while connecting to the database:", err); // Log the error message
    });
