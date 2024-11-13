import React from "react"; // Import React library

// Define the Spinner component
const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen"> {/* Full-screen container to center the spinner */}
      <div className="w-16 h-16 rounded-full border-t-4 border-sky-600 border-solid animate-spin"></div> {/* Spinner element with size, color, and spinning animation */}
    </div>
  );
}

export default Spinner; // Export the Spinner component for use in other parts of the application
