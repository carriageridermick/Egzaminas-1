import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pagr from './Pagr';
import Prisijungti from './Prisijungti';
import PrisijungtiAdm from './PrisijungtiAdm';
import Registruoti from './Registruoti';
import Sasaja from './Sasaja';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SasajaAdm from './SasajaAdm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Pagr />
    },
    {
      path: "/prisijungti",
      element: <Prisijungti />
    },
    {
      path: "/prisijungtiadm",
      element: <PrisijungtiAdm />
    },
    {
      path: "/registruoti",
      element: <Registruoti />
    },
    {
      path: "/skelbimas",
      element: <Sasaja />
    },
    {
      path: "/sasajaadm",
      element: <SasajaAdm />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
