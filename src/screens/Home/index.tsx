import { useContext, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { getChampions, Champion, ChampionData } from "../../services/api";
import { DarkModeContext } from "../../Context/darkModelContext";
import { useRoute } from "@react-navigation/native";
import { useFavorites } from "../../Context/contextFavoritos";
import { ScrollView, Switch } from "react-native-gesture-handler";

export function Home() {
  const [championData, setChampionData] = useState<ChampionData | undefined>(
    undefined
  );
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const route = useRoute();
  const name = (route.params as { nickname: string })?.nickname || "";

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getChampions();
        setChampionData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const renderChampion = ({ item }: { item: Champion }) => {
    const isFavorite = favorites.some((fav) => fav.name === item.name);

    const handleChampionPress = () => {
      if (isFavorite) {
        removeFavorite(item);
      } else {
        addFavorite(item);
      }
    };
    return (
      <TouchableOpacity
        style={styles.championItem}
        onPress={handleChampionPress}
      >
        {isFavorite && (
          <Image
            source={require("../../assets/star.png")}
            style={styles.favoriteStar}
          />
        )}
        <Image
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${item.image.full}`,
          }}
          style={styles.championImage}
        />
        <Text style={styles.championName}>{item.name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <View style={styles.topArea}>
        <Image
          source={require("../../assets/fundo.png")}
          style={styles.topImage}
        />
        <View>
          <Text style={[styles.topText, darkMode && styles.topTextDark]}>
            Boa Tarde,
          </Text>
          <Text style={[styles.topText, darkMode && styles.topTextDark]}>
            {name}!
          </Text>
        </View>

        <View style={{ position: "absolute", top: 50 }}>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#4B0082" : "#f4f3f4"}
          />
          <Text style={[styles.topText1, darkMode && styles.topTextDark1]}>
            Dark Mode
          </Text>
        </View>
      </View>
      {championData && (
        <FlatList
          data={Object.values(championData.data)}
          renderItem={renderChampion}
          keyExtractor={(item: Champion) => item.name}
          numColumns={4}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
