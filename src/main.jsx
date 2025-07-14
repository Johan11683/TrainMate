import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ← import essentiel
import App from './App';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {' '}
      {/* ← ajoute ce wrapper */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
