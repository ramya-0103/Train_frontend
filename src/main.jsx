import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './services/context/AuthContext';
import { Home } from './services/context/home.jsx';
// Corrected import in src/main.jsx:
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <Home></Home>
  </AuthContextProvider>
  </BrowserRouter>
);
