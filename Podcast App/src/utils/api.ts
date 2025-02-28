import { API_BASE_URL } from '../Constants';

// Define the Show interface
interface Show {
  id: string;
  title: string;
  description: string;
  seasons: number;
  image: string;
  genres: number[];
  updated: string;
}

// Define the Genre interface
interface Genre {
  id: number;
  title: string;
}

// Fetch all shows (replaces fetchShows)
export const fetchPodcasts = async (): Promise<Show[] | null> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data: Show[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch podcasts:', error);
    return null; // Return null if fetching fails
  }
};

// Fetch a show by ID
export const fetchShowById = async (id: string): Promise<Show | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/id/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data: Show = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch show ${id}:`, error);
    return null; // Return null if fetching fails
  }
};

// Fetch a genre by ID
export const fetchGenreById = async (id: number): Promise<Genre | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/genre/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data: Genre = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch genre ${id}:`, error);
    return null; // Return null if fetching fails
  }
};