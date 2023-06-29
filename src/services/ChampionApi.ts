import axios from "axios";

const Lol = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn",
});

export interface ChampionData {
  data: {
    [key: string]: Champion;
  };
}

export interface Champion {
  name: string;
  title: string;
  blurb: string;
  spells: Spell[];
  image: {
    full: string;
  };
}

export interface Spell {
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export function getChampions(): Promise<ChampionData> {
  const url = `/13.12.1/data/pt_BR/championFull.json?locale=pt_BR`;

  return Lol.get(url).then((response) => response.data);
}
