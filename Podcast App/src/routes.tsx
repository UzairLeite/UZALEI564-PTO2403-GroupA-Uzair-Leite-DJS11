import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';
import Favorites from './pages/Favorites';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/show/:id', element: <ShowDetails /> },
  { path: '/favorites', element: <Favorites /> },
]);

export default router;