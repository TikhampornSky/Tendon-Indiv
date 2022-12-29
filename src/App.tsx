import './App.css';
import React from 'react';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Admin from './Admin';
import ControlPage from './ControlPage';
import ErrorPage from './Error_pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: < ControlPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: < Admin />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
