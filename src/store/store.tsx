import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { fetchPodcasts } from '../utils/api';
import { Show } from '../Types';

interface AppState {
  shows: Show[];
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShows = async () => {
      try {
        const data = await fetchPodcasts();
        setShows(data || []);
      } catch (err) {
        setError('Failed to fetch shows. Please try again later.');
        console.error('Failed to fetch shows:', err);
      } finally {
        setLoading(false);
      }
    };
    loadShows();
  }, []);

  return (
    <AppContext.Provider value={{ shows, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};