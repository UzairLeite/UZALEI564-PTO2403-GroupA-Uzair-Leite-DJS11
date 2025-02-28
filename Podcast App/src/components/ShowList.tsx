import React from 'react'
import { useAppContext } from '../store/store'

const ShowList: React.FC = () => {
  const { shows, loading, setSelectedShow } = useAppContext();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {shows.map((show) => (
        <div key={show.id} onClick={() => setSelectedShow(show)}>
          <img src={show.image} alt={show.title} />
          <h2>{show.title}</h2>
          <p>{show.description}</p>
          <p>Seasons: {show.seasons}</p>
          <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowList;