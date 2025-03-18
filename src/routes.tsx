import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';
import Favorites from './pages/Favorites';
import PodcastEpisode from './pages/PodcastEpisode'; // New page for episodes

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/show/:id', element: <ShowDetails /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/podcast/:season/:episode', element: <PodcastEpisode /> }, // New route
]);

export default router;
