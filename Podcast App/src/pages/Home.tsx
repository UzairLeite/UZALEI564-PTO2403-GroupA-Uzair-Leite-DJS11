import React from 'react';
import { useAppContext } from '../store/store';
import ShowCard from '../components/ShowCard';

const Home: React.FC = () => {
  const { shows } = useAppContext();

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Podcast Shows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} onClick={function (): void {
            throw new Error('Function not implemented.');
          } } />
        ))}
      </div>
    </>
  );
};

export default Home;