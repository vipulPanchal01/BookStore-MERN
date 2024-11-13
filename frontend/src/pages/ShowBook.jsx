import React, { useEffect, useState } from 'react'; // Import React and hooks for managing state and side effects
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters (e.g., book ID)
import BackButton from '../components/BackButton'; // Import custom BackButton component
import Spinner from '../components/Spinner'; // Import Spinner component to show loading state

const ShowBook = () => {
  const [book, setBook] = useState({}); // State to store the book details
  const [loading, setLoading] = useState(false); // State to manage loading status
  const { id } = useParams(); // Extract the book ID from the URL using useParams()

  // Fetch book details when the component mounts or when the 'id' parameter changes
  useEffect(() => {
    setLoading(true); // Set loading to true while fetching data
    axios
      .get(`http://localhost:8080/books/${id}`) // Send GET request to fetch details of the specific book using its ID
      .then((response) => {
        setBook(response.data); // Update the book state with the fetched book details
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.log(error); // Log any error if the request fails
        setLoading(false); // Set loading to false even if an error occurs
      });
  }, [id]); // Re-run this effect if the 'id' parameter changes

  return (
    <div className='p-4'>
      <BackButton /> {/* Custom BackButton component to navigate back to the previous page */}
      <h1 className='text-3xl my-4'>Show Book</h1> {/* Title of the page */}

      {/* Show loading spinner while data is being fetched */}
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          {/* Display the book details once they are fetched */}
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span> {/* Display the book's ID */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span> {/* Display the book's title */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span> {/* Display the book's author */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{book.publishYear}</span> {/* Display the book's publish year */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(book.createdAt).toLocaleString()}</span> {/* Display the book's creation time in a readable format */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(book.updatedAt).toLocaleString()}</span> {/* Display the book's last update time in a readable format */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook; // Export ShowBook component to be used elsewhere in the app
