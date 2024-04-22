import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter here

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with Router here */}
      <App />
    </Router>
  </React.StrictMode>
);
