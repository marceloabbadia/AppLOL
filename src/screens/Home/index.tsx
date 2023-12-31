import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
  Switch,
} from "react-native";
import { styles } from "./styles";
import { getChampions, Champion, ChampionData } from "../../services/api";
import { DarkModeContext } from "../../Context/darkModelContext";
import { useFavorites } from "../../Context/contextFavoritos";
import { useNavigation } from "@react-navigation/native";
import { StackNavigatorProps } from "../../routes/MainStack";
import { StackNavigationProp } from "@react-navigation/stack";

export function Home() {
  const navigation = useNavigation<StackNavigationProp<StackNavigatorProps>>();
  const [championData, setChampionData] = useState<ChampionData | undefined>(
    undefined
  );
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [greetings, setGreetings] = useState<string>("Bom dia");
  const { favorites, nicknameHome } = useFavorites();

  const backgroundImageStyle = Platform.select({
    ios: {
      top: -150,
      height: "150%",
    },
    android: {
      height: "100%",
    },
  });

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

  useEffect(() => {
    const horaDeAgora = new Date().getHours();
    if (horaDeAgora < 12) {
      setGreetings("Bom dia,");
    } else if (horaDeAgora >= 12 && horaDeAgora < 18) {
      setGreetings("Boa tarde,");
    } else {
      setGreetings("Boa noite,");
    }
  }, []);

  const [selectedChampion, setSelectedChampion] = useState<
    Champion | undefined
  >(undefined);
  const renderChampion = ({ item }: { item: Champion }) => {
    const isFavorite = favorites.some((fav) => fav.name === item.name);
    return (
      <TouchableOpacity
        style={styles.championItem}
        onPress={() => {
          setSelectedChampion(item);
          navigation.navigate("ChampionScreen", { champion: item });
        }}
      >
        {isFavorite && (
          <Image
            source={require("../../assets/star.png")}
            style={styles.favoriteStar}
          />
        )}

        <Image
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${item.image.full}`,
          }}
          style={styles.championImage}
        />
        <Text style={styles.championName}>{item.name.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.containerPrincipal}>
      <Image
        source={
          darkMode
            ? require("../../assets/fundodark.jpg")
            : require("../../assets/lol.jpg")
        }
        style={[styles.backgroundImage, backgroundImageStyle]}
      />

      <View style={[styles.container, darkMode && styles.containerDark]}>
        <View style={styles.topArea}>
          <Image
            source={require("../../assets/fundo.png")}
            style={styles.topImage}
          />
          <View>
            <Text style={[styles.topText, darkMode && styles.topTextDark]}>
              {greetings}
            </Text>
            <Text style={[styles.topText, darkMode && styles.topTextDark]}>
              {nicknameHome}
            </Text>
          </View>

          <View
            style={{
              position: "absolute",
              top: 20,
              backgroundColor: "rgba( 9, 20, 40, 0.2)",
              borderRadius: 90,
              marginLeft: 5,
            }}
          >
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
            renderItem={({ item }) => renderChampion({ item })}
            keyExtractor={(item: Champion) => item.name}
            numColumns={4}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
