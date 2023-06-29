import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Champion } from "./api";

const apiLocal = axios.create({
  baseURL: "http://localhost:3000",
});

export interface Usuario {
  nickname: string;
  email: string;
  password: string;
  champions?: Champion[];
}

export function getUsuarios() {
  const url = "/Usuarios";

  return apiLocal.get(url);
}

export const createUserApi = async (usuario: Usuario): Promise<Usuario[]> => {
  const { nickname, email, password } = usuario;

  if (!nickname || !email || !password) {
    throw new Error("Por favor, preencha todos os campos");
  }

  const response = await apiLocal.get("/Usuarios");

  const usuarios: Usuario[] = response.data;

  const existingNicknameUser = usuarios.find(
    (user: Usuario) => user.nickname === usuario.nickname
  );
  const existingEmailUser = usuarios.find(
    (user: Usuario) => user.email === usuario.email
  );

  if (existingNicknameUser) {
    throw new Error("Nickname já existente");
  }

  if (existingEmailUser) {
    throw new Error("Email já existente");
  }
  const createResponse = await apiLocal.post("/Usuarios", usuario);

  const newUsuario: Usuario = createResponse.data;

  usuarios.push(newUsuario);

  try {
    await AsyncStorage.setItem("lista", JSON.stringify(usuarios));
  } catch (error) {
    throw new Error("Erro ao salvar a lista de usuários");
  }

  return usuarios;
};
