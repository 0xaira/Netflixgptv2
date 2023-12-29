import React from 'react'
import Login from './Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { getAuth } from "firebase/auth"; 

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage/>
    },
    {
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        
      } else {
        dispatch(removeUser());
        
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
};

export default Body