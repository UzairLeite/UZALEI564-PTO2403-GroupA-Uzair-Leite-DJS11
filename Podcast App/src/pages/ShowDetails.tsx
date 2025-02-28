import React from 'react';
import { useAppContext } from '../store/store';
import AudioPlayer from '../components/AudioPlayer';

const ShowDetails: React.FC = () => {
  const { selectedShow } = useAppContext();

  if (!selectedShow) return <div className="flex justify-center items-center h-screen text-2xl">No show selected</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedShow.title}</h1>
        <img
          src={selectedShow.image}
          alt={selectedShow.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600 mb-4">{selectedShow.description}</p>
        <p className="text-gray-700">Seasons: {selectedShow.seasons}</p>
        <p className="text-gray-700 mb-6">
          Last Updated: {new Date(selectedShow.updated).toLocaleDateString()}
        </p>
        <AudioPlayer src="placeholder-audio.mp3" />
      </div>
    </div>
  );
};

export default ShowDetails;