import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { getChampions, Champion, ChampionData } from '../../services/api';


export function Home() {
  const [championData, setChampionData] = useState<ChampionData | undefined>(undefined);

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

  const renderChampion = ({ item }: { item: Champion }) => (
    <TouchableOpacity style={styles.championItem}>
      <Image
        source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${item.image.full}` }}
        style={styles.championImage}
      />
      <Text style={styles.championName}>{item.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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


