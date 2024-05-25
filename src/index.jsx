import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import React, { Children } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { App } from "./components/App";
import "./global.css";

createRoot(
  document.querySelector('#app'),
).render( <RouterProvider router={router} />);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);



