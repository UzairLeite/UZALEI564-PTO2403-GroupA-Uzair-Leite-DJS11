import React from 'react';
import { useAppContext } from './store/store';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; // Import the router
import './index.css';

const App: React.FC = () => {
  const { loading, error } = useAppContext();

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-2xl text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <RouterProvider router={router} /> {/* Use the router */}
    </div>
  );
};

export default App;