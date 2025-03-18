import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../store/store';
import AudioPlayer from '../components/AudioPlayer';

const PodcastEpisode: React.FC = () => {
  const { season, episode } = useParams();
  const { shows } = useAppContext();

  // Find the correct episode
  const episodeData = shows.flatMap((show) =>
    show.episodes?.filter((ep) => ep.seasonId === season && ep.id === episode)
  )[0];

  if (!episodeData) {
    return <div className="flex-center full-screen text-large">Episode not found</div>;
  }

  return (
    <div className="podcast-episode-container">
      <h1 className="episode-title">{episodeData.title}</h1>
      <p className="episode-description">{episodeData.description}</p>
      <AudioPlayer src={episodeData.audioUrl} />
    </div>
  );
};

export default PodcastEpisode;
