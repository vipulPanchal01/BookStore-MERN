import { Link } from 'react-router-dom'; // Import Link component for navigation between pages
import { PiBookOpenTextLight } from 'react-icons/pi'; // Import book icon from react-icons
import { BiUserCircle } from 'react-icons/bi'; // Import user icon from react-icons
import { AiOutlineEdit } from 'react-icons/ai'; // Import edit icon from react-icons
import { BsInfoCircle } from 'react-icons/bs'; // Import info icon from react-icons
import { MdOutlineDelete } from 'react-icons/md'; // Import delete icon from react-icons
import BookSingleCard from './BookSingleCard'; // Import the BookSingleCard component to display each book

// This is the BooksCard component that displays a list of books
const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> 
            {/* This creates a responsive grid that shows the books in different column layouts based on screen size */}
            {books.map((item) => ( 
                // Loop through the books array and render a BookSingleCard for each book
                <BookSingleCard key={item._id} book={item}/> 
                // 'key' helps React identify which items changed, are added, or removed, for performance improvement
            ))}
        </div>
    );
};

export default BooksCard; // This exports the BooksCard component to be used in other parts of the app
