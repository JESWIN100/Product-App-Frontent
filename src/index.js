import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './route';
import {
  RouterProvider,
} from "react-router-dom";

import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer 
    position="top-center"
    


    
    />
  </React.StrictMode>
);

