import React, { useState, useEffect } from 'react'; // Import React and hooks to manage state and lifecycle
import BackButton from '../components/BackButton'; // Custom BackButton component to go back to the previous page
import Spinner from '../components/Spinner'; // Spinner component to show when data is loading
import axios from 'axios'; // Axios to make HTTP requests to the server
import { useNavigate, useParams } from 'react-router-dom'; // Hooks to navigate between pages and get URL parameters
import { useSnackbar } from 'notistack'; // Hook to show notifications to the user

const EditBook = () => {
  // States to store the book's title, author, and publish year
  const [title, setTitle] = useState(''); // For storing the book title
  const [author, setAuthor] = useState(''); // For storing the book author
  const [publishYear, setPublishYear] = useState(''); // For storing the year the book was published
  const [loading, setLoading] = useState(false); // To show if the data is still loading

  const navigate = useNavigate(); // To navigate to different pages
  const { id } = useParams(); // Get the book ID from the URL
  const { enqueueSnackbar } = useSnackbar(); // Function to show notifications

  // useEffect runs when the component is loaded to get the current book data
  useEffect(() => {
    setLoading(true); // Start loading data
    axios
      .get(`http://localhost:8080/books/${id}`) // Get the book data using its ID
      .then((response) => {
        // Set the values of title, author, and publish year from the response
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        // Handle any errors that happen while fetching the data
        setLoading(false); // Stop loading if an error happens
        alert('An error happened. Please check console.'); // Show error alert
        console.log(error); // Log the error to the console for debugging
      });
  }, [id]); // This runs every time the book ID changes (e.g., when editing a different book)

  // Function to handle saving the edited book data
  const handleEditBook = () => {
    const data = {
      title, // Get title from the state
      author, // Get author from the state
      publishYear, // Get publish year from the state
    };
    setLoading(true); // Set loading to true when starting the save operation
    axios
      .put(`http://localhost:8080/books/${id}`, data) // Send the updated book data to the server
      .then(() => {
        setLoading(false); // Stop loading once the data is saved
        enqueueSnackbar('Book Edited successfully', { variant: 'success' }); // Show success notification
        navigate('/'); // Go back to the homepage after saving
      })
      .catch((error) => {
        setLoading(false); // Stop loading if there's an error
        enqueueSnackbar('Error', { variant: 'error' }); // Show error notification
        console.log(error); // Log the error to the console
      });
  };

  return (
    <div className="p-4">
      <BackButton /> {/* Show a button to go back to the previous page */}
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ''} {/* Show a spinner while the data is loading */}

      {/* Form to edit the book's title, author, and publish year */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        {/* Input for editing the title */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title} // Bind the value of the input to the title state
            onChange={(e) => setTitle(e.target.value)} // Update title state when the user types
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Input for editing the author */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author} // Bind the value of the input to the author state
            onChange={(e) => setAuthor(e.target.value)} // Update author state when the user types
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Input for editing the publish year */}
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear} // Bind the value of the input to the publishYear state
            onChange={(e) => setPublishYear(e.target.value)} // Update publishYear state when the user types
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        {/* Button to save the changes */}
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
