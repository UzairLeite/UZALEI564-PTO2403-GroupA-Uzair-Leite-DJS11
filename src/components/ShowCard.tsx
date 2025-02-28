import React from 'react';

interface ShowCardProps {
  show: {
    id: string;
    title: string;
    image: string;
    genres: number[];
    seasons: number;
    updated: string;
  };
  onClick: () => void;
}

const ShowCard: React.FC<ShowCardProps> = ({ show, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={show.image}
        alt={show.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{show.title}</h2>
      <p className="text-gray-600">Genres: {show.genres.join(', ')}</p>
      <p className="text-gray-600">Seasons: {show.seasons}</p>
      <p className="text-gray-600">
        Last Updated: {new Date(show.updated).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ShowCard;