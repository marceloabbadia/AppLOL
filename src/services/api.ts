import axios, { AxiosResponse } from "axios";

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
  image: {
    full: string;
  };
}

export function getChampions(): Promise<AxiosResponse<ChampionData>> {
  const url = `/13.12.1/data/pt_BR/championFull.json?locale=pt_BR`;

  return Lol.get(url);
}
