import React, { useState } from 'react'; // Import React and useState for managing state
import BackButton from '../components/BackButton'; // Import BackButton for going back to the previous page
import Spinner from '../components/Spinner'; // Import Spinner to show loading indicator
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate, useParams } from 'react-router-dom'; // Import hooks for navigation and accessing URL params
import { useSnackbar } from 'notistack'; // Import Snackbar hook for showing notifications

const DeleteBook = () => {
  const [loading, setLoading] = useState(false); // Track loading state while the deletion is in progress
  const navigate = useNavigate(); // Hook for navigating after the deletion
  const { id } = useParams(); // Retrieve the book ID from the URL parameters
  const { enqueueSnackbar } = useSnackbar(); // Function to show success/error notifications

  // Function to handle book deletion
  const handleDeleteBook = () => {
    setLoading(true); // Set loading state to true when starting the deletion process

    // Send DELETE request to the server to delete the book by its ID
    axios
      .delete(`http://localhost:8080/books/${id}`)
      .then(() => {
        setLoading(false); // Set loading state to false after successful deletion
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' }); // Show success message
        navigate('/'); // Navigate to the homepage after deletion
      })
      .catch((error) => {
        setLoading(false); // Stop loading state if an error occurs
        enqueueSnackbar('Error', { variant: 'error' }); // Show error message
        console.log(error); // Log the error for debugging
      });
  };

  return (
    <div className='p-4'>
      <BackButton /> {/* Button to go back to the previous page */}
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''} {/* Show loading spinner if the deletion is in progress */}

      {/* Confirmation dialog to ask the user if they are sure about deleting the book */}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

        {/* Button to confirm and trigger the book deletion */}
        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook} // Call handleDeleteBook when clicked
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
