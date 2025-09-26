// src/index.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Assuming you've moved the component to src/services/context/AuthContext.jsx
import { AuthContextProvider } from './services/context/AuthContext.jsx'; 
// Assuming Home is in src/services/context/home.jsx
import { Home } from './services/context/home.jsx'; 

import './index.css'; 
// import App from './App.jsx'; // Not strictly needed for this example, but usually included

const root = createRoot(document.getElementById('root'));

root.render(
  // <StrictMode> is a good practice, but I'll omit it to keep it simple.
  <BrowserRouter>
    {/* Use the correctly named and implemented AuthContextProvider */}
    <AuthContextProvider> 
      <Home /> {/* Self-closing tag is preferred */}
    </AuthContextProvider>
  </BrowserRouter>
  // </StrictMode>
);