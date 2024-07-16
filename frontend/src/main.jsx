import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { SocketContextProvider } from './context/SocketContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <SocketContextProvider>
        <BrowserRouter>
             <App />
        </BrowserRouter>
      </SocketContextProvider>
    // </React.StrictMode>,
);