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
      className="card"
    >
      <img
        src={show.image}
        alt={show.title}
        className="card-image"
      />
      <h2 className="card-title">{show.title}</h2>
      <p className="card-text">Genres: {show.genres.join(', ')}</p>
      <p className="card-text">Seasons: {show.seasons}</p>
      <p className="card-text">
        Last Updated: {new Date(show.updated).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ShowCard;