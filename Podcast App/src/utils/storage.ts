import localforage from 'localforage'

export const getFavorites = async (): Promise<string[]> => {
  return (await localforage.getItem<string[]>('favorites')) || [];
};

export const addFavorite = async (episodeId: string) => {
  const favorites = await getFavorites();
  if (!favorites.includes(episodeId)) {
    favorites.push(episodeId);
    await localforage.setItem('favorites', favorites);
  }
};

export const removeFavorite = async (episodeId: string) => {
  const favorites = await getFavorites();
  const updatedFavorites = favorites.filter((id) => id !== episodeId);
  await localforage.setItem('favorites', updatedFavorites);
};