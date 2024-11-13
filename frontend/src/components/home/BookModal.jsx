import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon from react-icons
import { PiBookOpenTextLight } from 'react-icons/pi'; // Import the book icon from react-icons
import { BiUserCircle } from 'react-icons/bi'; // Import the user icon from react-icons

// This is the BookModal component that displays a modal with book details
const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' // This makes the backdrop black and covers the whole screen
      onClick={onClose} // Close the modal when clicking outside of it
    >
      <div
        onClick={(event) => event.stopPropagation()} // Prevent closing the modal when clicking inside the modal content area
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative' // This defines the modal's size, background color, and layout
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' // This places the close icon at the top-right corner of the modal
          onClick={onClose} // Close the modal when the close icon is clicked
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'> {/* This displays the book's publish year in a styled box */}
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4> {/* This displays the book's unique ID */}
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' /> {/* This shows the book icon next to the title */}
          <h2 className='my-1'>{book.title}</h2> {/* This displays the book's title */}
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' /> {/* This shows the author icon next to the author's name */}
          <h2 className='my-1'>{book.author}</h2> {/* This displays the book's author */}
        </div>
        <p className='mt-4'>Anything You want to show</p> {/* Placeholder for extra information you may want to display */}
        <p className='my-2'>
          {/* This is a long example description text that can be replaced with actual book details */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal; // This makes the BookModal component available to be used in other files
