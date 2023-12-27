import React from 'react'
import Login from './Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage/>
    },
    {
      path: '/browse',
      element: <Browse/>
    }
  ]);
  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
};

export default Body