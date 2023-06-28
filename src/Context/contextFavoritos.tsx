import React, { createContext, useContext, useState, ReactNode } from "react";
import { Champion } from "../services/api";

interface FavoritesContextData {
  favorites: Champion[];
  addFavorite: (champion: Champion) => void;
  removeFavorite: (champion: Champion) => void;
}

const FavoritesContext = createContext<FavoritesContextData>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const useFavorites = () => useContext(FavoritesContext);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Champion[]>([]);

  const addFavorite = (champion: Champion) => {
    setFavorites((prevFavorites) => [...prevFavorites, champion]);
  };

  const removeFavorite = (champion: Champion) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.name !== champion.name)
    );
  };

  const favoritesContextData: FavoritesContextData = {
    favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextData}>
      {children}
    </FavoritesContext.Provider>
  );
};
