import { useState } from 'react';
import api from './api.js';
import './globals.css'
import Home from './pages/Home/Home.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [musicas, setMusicas] = useState([]);

  function listar() {
    api.get()
      .then((res) => {
        console.log('Data: ' + JSON.stringify(res));

        setMusicas(res.data);
      }).catch((err) => {
        console.error(err);
      })
  }



  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>

  );
}

export default App;