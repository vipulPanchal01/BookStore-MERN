import { StrictMode } from 'react'; // Import StrictMode from React to help with development, highlighting potential issues in the app
import { createRoot } from 'react-dom/client'; // Import createRoot to render the React app in the DOM
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import the global styles for the app
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for client-side routing
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider to show toast notifications

// Render the React app
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode helps in identifying potential problems during development */}
    <BrowserRouter> {/* BrowserRouter enables client-side routing, managing URL changes */}
      <SnackbarProvider> {/* SnackbarProvider is used to show notifications/toasts throughout the app */}
        <App /> {/* The main App component which contains all routes and UI */}
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);
