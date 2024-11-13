import React, { useEffect, useState } from 'react'; // Import React and hooks for managing state and side effects
import axios from 'axios'; // Import axios for making HTTP requests
import Spinner from '../components/Spinner'; // Import Spinner component to show loading state
import { Link } from 'react-router-dom'; // Import Link for navigation between pages
import { AiOutlineEdit } from 'react-icons/ai'; // Import edit icon
import { BsInfoCircle } from 'react-icons/bs'; // Import info icon
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'; // Import add and delete icons
import BooksTable from '../components/home/BooksTable'; // Import BooksTable component to display books in a table
import BooksCard from '../components/home/BooksCard'; // Import BooksCard component to display books as cards

const Home = () => {
  const [books, setBooks] = useState([]); // State for storing the list of books
  const [loading, setLoading] = useState(false); // State for managing loading status
  const [showType, setShowType] = useState('table'); // State to toggle between table or card view

  // Fetch books data from API when the component mounts
  useEffect(() => {
    setLoading(true); // Set loading to true while fetching data
    axios
      .get('http://localhost:8080/books') // Send GET request to fetch books data from the server
      .then((response) => {
        setBooks(response.data.data); // Update books state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.log(error); // Log error if data fetching fails
        setLoading(false); // Set loading to false even if an error occurs
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className='p-4'>
      {/* Button section to toggle between table and card views */}
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')} // Set view to 'table' when clicked
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')} // Set view to 'card' when clicked
        >
          Card
        </button>
      </div>

      {/* Header with title and add new book button */}
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' /> {/* Add new book button */}
        </Link>
      </div>

      {/* Show loading spinner if data is still being fetched */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} /> // Show books in table format
      ) : (
        <BooksCard books={books} /> // Show books in card format
      )}
    </div>
  );
};

export default Home; // Export Home component to be used elsewhere in the app
