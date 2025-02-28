import React, { useEffect, useState } from 'react';
import { useAppContext } from '../store/store';
import { getFavorites, removeFavorite } from '../utils/storage';
import ShowCard from '../components/ShowCard';
import AudioPlayer from '../components/AudioPlayer';
import { Show, Episode } from '../Types'; // Correct import path

interface FavoriteEpisode {
  id: string;
  showId: string;
  seasonId: string;
  title: string;
  showTitle: string;
  seasonTitle: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const { shows } = useAppContext();

  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteIds = await getFavorites();
      const favoriteEpisodes: FavoriteEpisode[] = [];

      for (const episodeId of favoriteIds) {
        const show = shows.find((s) => s.episodes?.some((e: Episode) => e.id === episodeId));
        if (show) {
          const episode = show.episodes?.find((e: Episode) => e.id === episodeId);
          if (episode) {
            favoriteEpisodes.push({
              id: episodeId,
              showId: show.id,
              seasonId: episode.seasonId,
              title: episode.title,
              showTitle: show.title,
              seasonTitle: `Season ${episode.seasonId}`,
            });
          }
        }
      }

      setFavorites(favoriteEpisodes);
      setLoading(false);
    };

    loadFavorites();
  }, [shows]);

  const handleRemoveFavorite = async (episodeId: string) => {
    await removeFavorite(episodeId);
    setFavorites((prev) => prev.filter((fav) => fav.id !== episodeId));
  };

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl">Loading favorites...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorites yet. Add some episodes to your favorites!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <div key={fav.id} className="bg-white rounded-lg shadow-lg p-6">
              <ShowCard
                show={{
                  id: fav.showId,
                  title: fav.showTitle,
                  image: '', // Add an image URL if available
                  genres: [], // Add genres if available
                  seasons: parseInt(fav.seasonId, 10), // Convert seasonId to number
                  updated: new Date().toISOString(), // Add a placeholder updated date
                }}
                onClick={() => {}} // Add an onClick handler if needed
              />
              <p className="text-lg font-semibold mt-4 text-gray-800">Episode: {fav.title}</p>
              <p className="text-gray-600">Season: {fav.seasonTitle}</p>
              <AudioPlayer src="placeholder-audio.mp3" />
              <button
                onClick={() => handleRemoveFavorite(fav.id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;