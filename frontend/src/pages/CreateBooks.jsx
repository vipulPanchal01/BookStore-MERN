import React, { useState } from 'react'; // Import React and useState hook to manage state
import BackButton from '../components/BackButton'; // Import BackButton component for navigation
import Spinner from '../components/Spinner'; // Import Spinner component for loading state
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for page navigation
import { useSnackbar } from 'notistack'; // Import useSnackbar hook for showing notifications

const CreateBooks = () => {
  // State variables to store the book details and loading state
  const [title, setTitle] = useState(''); // Store the title of the book
  const [author, setAuthor] = useState(''); // Store the author of the book
  const [publishYear, setPublishYear] = useState(''); // Store the publish year of the book
  const [loading, setLoading] = useState(false); // Track whether the request is in progress
  const navigate = useNavigate(); // hook for navigation after creating a book
  const { enqueueSnackbar } = useSnackbar(); // Function to show success/error notifications

  // Function to handle book creation
  const handleSaveBook = () => {
    // Create an object with the book details
    const data = {
      title,
      author,
      publishYear,
    };

    // Set loading state to true when making the request
    setLoading(true);

    // Send a POST request to the backend to create the book
    axios
      .post('http://localhost:8080/books', data) // Replace with your actual API endpoint
      .then(() => {
        setLoading(false); // Stop the loading spinner
        enqueueSnackbar('Book Created successfully', { variant: 'success' }); // Show success notification
        navigate('/'); // Navigate to the homepage after successful book creation
      })
      .catch((error) => {
        setLoading(false); // Stop the loading spinner
        enqueueSnackbar('Error', { variant: 'error' }); // Show error notification
        console.log(error); // Log the error for debugging
      });
  };

  return (
    <div className='p-4'>
      <BackButton /> {/* Button to go back to the previous page */}
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''} {/* Show a loading spinner while the request is in progress */}

      {/* Form to create a new book */}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        
        {/* Title input field */}
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state when user types
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        {/* Author input field */}
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)} // Update author state when user types
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>

        {/* Publish Year input field */}
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)} // Update publish year state when user types
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>

        {/* Save button to trigger the book creation */}
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
