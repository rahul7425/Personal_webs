import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import './index.css'; // Optional, if you have styles
import App from './App'; // Assumes you have an App.js component
import 'bootstrap/dist/css/bootstrap.min.css';  // For Bootstrap styling
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // For Bootstrap JS functionality

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
