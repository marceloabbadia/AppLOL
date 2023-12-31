import { useState, ReactNode, createContext, useContext } from "react";
import { Champion } from "../services/api";

interface FavoritesContextData {
  nicknameHome: string;
  setNicknameHome: (nickname: string) => void;
  favorites: Champion[];
  addFavorite: (champion: Champion) => void;
  removeFavorite: (champion: Champion) => void;
  isFavorite: (champion: Champion) => boolean;
}

const FavoritesContext = createContext<FavoritesContextData>({
  nicknameHome: "",
  setNicknameHome: () => {},
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
});

export const useFavorites = () => useContext(FavoritesContext);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Champion[]>([]);
  const [nicknameHome, setNicknameHome] = useState<string>("");

  const addFavorite = (champion: Champion) => {
    const updatedFavorites = [...favorites, champion];
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (champion: Champion) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.name !== champion.name
    );
    setFavorites(updatedFavorites);
  };

  const isFavorite = (champion: Champion) =>
    favorites.some((fav) => fav.name === champion.name);

  const favoritesContextData: FavoritesContextData = {
    nicknameHome,
    setNicknameHome,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextData}>
      {children}
    </FavoritesContext.Provider>
  );
};
