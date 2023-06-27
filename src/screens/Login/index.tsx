import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ModalCadastro } from "../../components/ModalCadastro";
import { styles } from "./styles";
import { LoginInput } from "../../components/LoginInput";
import { LoginButton } from "../../components/LoginButton";
import { Usuario } from "../../services/apiLocal";
import axios from "axios";
import Toast from "react-native-root-toast";

export const Login = () => {
  const [modalCadastro, setModalCadastro] = useState<boolean>(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleButtonCadastrar = () => {
    setModalCadastro(true);
  };

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.log("Erro ao obter a lista de usuários:", error);
    }
  };

  const handleButtonLogin = () => {
    const user = usuarios.find(
      (user: Usuario) =>
        user.nickname === nickname && user.password === password
    );
    if (user) {
      Toast.show("Login feito com sucesso!", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      navigation.navigate("Home" as never);
      setNickname("");
      setPassword("");
    } else {
      Toast.show("Nickname ou senha inválidos!", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }
  };

  const backgroundImageStyle = Platform.select({
    ios: {
      top: 50,
      height: "115%",
    },
    android: {
      height: "100%",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/lol.jpg")}
        style={[styles.backgroundImage, backgroundImageStyle]}
      />
      <View style={styles.areaLogin}>
        <LoginInput
          placeholder="Nickname"
          placeholderTextColor="white"
          value={nickname}
          onChangeText={(t) => setNickname(t)}
          style={styles.input}
        />
        <LoginInput
          placeholder="Senha"
          placeholderTextColor="white"
          value={password}
          onChangeText={(t) => setPassword(t)}
          style={styles.input}
          secureTextEntry
        />
        <View>
          <TouchableWithoutFeedback onPress={handleButtonCadastrar}>
            <Text style={styles.textCadastrar}>Cadastre-se</Text>
          </TouchableWithoutFeedback>
        </View>
        <LoginButton
          title="LOGIN"
          style={styles.buttonLogin}
          styleText={styles.textButtonLogin}
          onPress={handleButtonLogin}
        />
      </View>
      {modalCadastro && (
        <ModalCadastro modal={modalCadastro} setModal={setModalCadastro} />
      )}
    </SafeAreaView>
  );
};
