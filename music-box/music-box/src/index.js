import React from 'react';
import ReactDOM from 'react-dom/client';
import Musicas from "./pages/Musicas/Musicas";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Musicas />
  </React.StrictMode>
);