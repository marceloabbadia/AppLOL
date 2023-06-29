import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Champion } from "../../services/ChampionApi";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "../../Context/contextFavoritos";
import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorProps } from "../../routes/MainStack";

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
  const navigation = useNavigation<StackNavigationProp<StackNavigatorProps>>();
  const renderChampionItem = (spell: {
    name: string;
    description: string;
    image: { full: string };
  }) => (
    <View style={styles.HABcontainer}>
      <Text style={styles.HABTxtEnun}>HABILIDADE</Text>
      <Text style={styles.HABName}>{spell.name}</Text>
      <View style={styles.HABContentView}>
        <Image
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/${spell.image.full}`,
          }}
          style={{
            width: 60,
            height: 60,
            margin: 7,
            borderWidth: 1,
            borderColor: "#C89B3C",
          }}
        />
        <Text style={styles.HABDescription}>{spell.description}</Text>
      </View>
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
    <View style={styles.containerblack}>
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home", {})}
            style={styles.buttonreturn}
          >
            <AntDesign name="arrowleft" size={30} color="#C8AA6E" />
          </TouchableOpacity>
          <Text style={styles.modalTxtHeader}>Informações do Campeão</Text>
        </View>
        <ScrollView>
          <View style={styles.CHAMPcontainer}>
            <Text style={styles.CHAMPName}>{champion.name}</Text>
            <View style={styles.TextContainer}>
              <Text style={styles.CHAMPTitle}>{champion.title}</Text>
            </View>
            <Text style={styles.TituloBiografia}>BIOGRAFIA</Text>
            <Text style={styles.CHAMPDescription}>{champion.blurb}</Text>
          </View>

          <View style={styles.DivisaoHAB}>
            <Text style={styles.TXTDivisaoHAB}>HABILIDADES</Text>
            <FlatList
              data={champion.spells}
              renderItem={({ item }) => renderChampionItem(item)}
              keyExtractor={(item) => item.name}
            />
          </View>

          <TouchableOpacity
            onPress={handleFavoritePress}
            style={styles.ContainerBtn}
          >
            <Text style={styles.TxtBtn}>
              {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ChampionScreen;
