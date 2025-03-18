import React, { useState } from 'react';
import { useAppContext } from './store/store';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import AudioPlayer from './components/AudioPlayer';
import Sidebar from './components/Sidebar'; // Sidebar for navigation
import './index.css';

const App: React.FC = () => {
  const { loading, error } = useAppContext();
  const [darkMode, setDarkMode] = useState(false);

  if (loading) return <div className="flex-center full-screen text-large">Loading...</div>;
  if (error) return <div className="flex-center full-screen text-large text-error">Error: {error}</div>;

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Sidebar */}
      
      <div className="main-content">
        <RouterProvider router={router} />
      </div>

      <div className="audio-player-container">
        <AudioPlayer src="https://example.com/audio.mp3" />
      </div>
    </div>
  );
};

export default App;
