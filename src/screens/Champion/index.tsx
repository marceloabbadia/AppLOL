import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Champion } from "../../services/ChampionApi";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "../../Context/contextFavoritos";

interface ChampionScreenProps {
  route: {
    params: {
      champion: Champion;
    };
  };
}

const ChampionScreen: React.ComponentType = ({ route }: any) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const { champion } = route.params;
  const navigation = useNavigation();
  const renderChampionItem = (spell: {
    name: string;
    description: string;
    image: { full: string };
  }) => (
    <View>
      <Image
        source={{
          uri: `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/${spell.image.full}`,
        }}
        style={{ width: 50, height: 50 }}
      />
      <Text>{spell.name}</Text>
      <Text>{spell.description}</Text>
    </View>
  );

  const isFavorite = favorites.some((fav) => fav.name === champion.name);
  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(champion);
    } else {
      addFavorite(champion);
    }
  };

  return (
    <View>
      <Text>{champion.name}</Text>
      <Text>{champion.title}</Text>
      <Text>{champion.blurb}</Text>
      <FlatList
        data={champion.spells}
        renderItem={({ item }) => renderChampionItem(item)}
        keyExtractor={(item) => item.name}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavoritePress}>
        <Text>
          {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChampionScreen;
