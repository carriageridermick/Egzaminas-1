import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Prisijungti from './Prisijungti';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Router from 'router';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/prisijungti",
      element: <Prisijungti />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
