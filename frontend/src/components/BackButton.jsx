import { Link } from "react-router-dom"; // Import the Link component to navigate between routes
import { BsArrowLeft } from "react-icons/bs"; // Import the left arrow icon from react-icons library

// Define the BackButton component, with a default destination of the homepage ('/')
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center"> {/* Container div to align the button and icon */}
      <Link
        to={destination} // Set the target route for the Link component
        className="flex items-center bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition duration-300 ease-in-out" // Styling for button with hover and transition effects
      >
        <BsArrowLeft className="text-2xl mr-2" /> {/* Left arrow icon with styling for size and margin */}
        <span className="text-lg"></span> {/* Placeholder span for optional text if needed */}
      </Link>
    </div>
  );
};

export default BackButton; // Export the BackButton component for use in other parts of the application
