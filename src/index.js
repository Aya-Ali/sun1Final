import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'jquery/dist/jquery.min.js'
import 'sweetalert2/dist/sweetalert2.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import { UserContextProvider } from './Context/userContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />

);

