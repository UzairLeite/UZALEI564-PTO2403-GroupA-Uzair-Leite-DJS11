import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="sidebar">
      <h2>PodFlow - Podcast App</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Sidebar;
