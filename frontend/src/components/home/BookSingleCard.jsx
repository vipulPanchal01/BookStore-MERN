import { Link } from 'react-router-dom'; // Import Link for navigation between pages
import { PiBookOpenTextLight } from 'react-icons/pi'; // Import book icon from react-icons
import { BiUserCircle, BiShow } from 'react-icons/bi'; // Import user and show icons from react-icons
import { AiOutlineEdit } from 'react-icons/ai'; // Import edit icon from react-icons
import { BsInfoCircle } from 'react-icons/bs'; // Import info icon from react-icons
import { MdOutlineDelete } from 'react-icons/md'; // Import delete icon from react-icons
import { useState } from 'react'; // Import useState hook to manage the state
import BookModal from './BookModal'; // Import the BookModal component to show a modal with book details

// BookSingleCard component displays details of a single book
const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false); // State to control whether to show the modal

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      {/* This div is the card that displays book details, with some styling */}
      
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear} {/* Displays the book's publish year */}
      </h2>
      <h4 className='my-2 text-gray-500'>{book._id}</h4> {/* Displays the book's ID */}
      
      {/* Book Title and Author */}
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.title}</h2> {/* Displays the book title */}
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.author}</h2> {/* Displays the author's name */}
      </div>
      
      {/* Action buttons for show, info, edit, and delete */}
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)} // Opens the modal when clicked
        />
        
        {/* Info button that links to the book's details page */}
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        
        {/* Edit button that links to the book's edit page */}
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        
        {/* Delete button that links to the book's delete page */}
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      
      {/* Display the modal with book details when showModal is true */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
