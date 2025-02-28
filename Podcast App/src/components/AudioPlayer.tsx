import React, { useState, useRef } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={togglePlayPause}
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src={src} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      {isPlaying && <p className="text-gray-600">Now Playing...</p>}
    </div>
  );
};

export default AudioPlayer;