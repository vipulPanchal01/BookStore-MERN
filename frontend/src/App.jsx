import React from "react";
import { Routes, Route } from "react-router-dom"; // Importing necessary components for routing
import Home from "./pages/Home"; // Import the Home component
import CreateBooks from "./pages/CreateBooks"; // Import the CreateBooks component
import ShowBook from "./pages/ShowBook"; // Import the ShowBook component
import EditBook from "./pages/EditBook"; // Import the EditBook component
import DeleteBook from "./pages/DeleteBook"; // Import the DeleteBook component

const App = () => {
  return (
    <Routes> {/* This component defines all the routes in the app */}
      {/* Define route for the Home page */}
      <Route path="/" element={<Home />} />

      {/* Define route for creating a new book */}
      <Route path="/books/create" element={<CreateBooks />} />

      {/* Define route for viewing the details of a specific book by its ID */}
      <Route path="/books/details/:id" element={<ShowBook />} />

      {/* Define route for editing a specific book by its ID */}
      <Route path="/books/edit/:id" element={<EditBook />} />

      {/* Define route for deleting a specific book by its ID */}
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App; // Export the App component for use in other parts of the app
