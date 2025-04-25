import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <p className="text-gray-400">
      Opening Hours: Monday - Saturday, 8:30 AM - 5:00 PM
    </p>
  </StrictMode>
);
