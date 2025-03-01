import React from 'react';
import { useAppContext } from './store/store';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; // Import the router
import AudioPlayer from './components/AudioPlayer';
import './index.css';

const App: React.FC = () => {
  const { loading, error } = useAppContext();

  if (loading) return <div className="flex-center full-screen text-large">Loading...</div>;
  if (error) return <div className="flex-center full-screen text-large text-error">Error: {error}</div>;

  return (
    <div className="container">
      <RouterProvider router={router} /> {/* Use the router */}

      <div className="audio-player-container">
        <AudioPlayer src="https://example.com/audio.mp3" />
      </div>
    </div>
  );
};

export default App;