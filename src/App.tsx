import './App.css';
import React from 'react';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Admin from './Admin';
import AdminUser from './admin_page/Admin_user';
import AdminSign from './admin_page/Admin_sign';
import AdminNode from './admin_page/Admin_node';
import AdminLesson from './admin_page/Admin_lesson';
import AdminCourse from './admin_page/Admin_course';
import ControlPage from './ControlPage';
import ErrorPage from './Error_pages';

// import DashBoardPage from './pages';
import DashBoardPage from './pages/index';
import EarthPage from './earth_control_page';

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
  {
    path: "/admin/user",
    element: < AdminUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/sign",
    element: < AdminSign />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/node",
    element: < AdminNode />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/lesson",
    element: < AdminLesson />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/course",
    element: < AdminCourse />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/earth",
    element: < EarthPage />,
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
