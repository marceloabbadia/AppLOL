import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Switch,
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
import { Usuario, getUsuarios } from "../../services/apiLocal";
import axios from "axios";
import Toast from "react-native-root-toast";
import { DarkModeContext } from "../../Context/darkModelContext";

export const Login = () => {
  const [modalCadastro, setModalCadastro] = useState<boolean>(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigation = useNavigation();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleButtonCadastrar = () => {
    setModalCadastro(true);
  };

  const fetchUsuarios = async () => {
    try {
      const response = await getUsuarios();
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
      navigation.navigate("Home", { nickname });
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
        source={
          darkMode
            ? require("../../assets/fundodark.jpg")
            : require("../../assets/lol.jpg")
        }
        style={[styles.backgroundImage, backgroundImageStyle]}
      />
      <View style={styles.areaLogin}>
        <LoginInput
          placeholder="Nickname"
          placeholderTextColor="white"
          value={nickname}
          onChangeText={(t) => setNickname(t)}
          style={[styles.input, darkMode && styles.inputDark]}
        />
        <LoginInput
          placeholder="Senha"
          placeholderTextColor="white"
          value={password}
          onChangeText={(t) => setPassword(t)}
          style={[styles.input, darkMode && styles.inputDark]}
          secureTextEntry
        />
        <View>
          <TouchableWithoutFeedback onPress={handleButtonCadastrar}>
            <Text style={styles.textCadastrar}>Cadastre-se</Text>
          </TouchableWithoutFeedback>
        </View>
        <LoginButton
          title="LOGIN"
          style={[styles.buttonLogin, darkMode && styles.buttonLoginDark]}
          styleText={styles.textButtonLogin}
          onPress={handleButtonLogin}
        />
      </View>
      <View style={{ marginLeft: 25, top: 30 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            zIndex: 2,
          }}
        >
          DarkMode
        </Text>

        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#4B0082" : "#f4f3f4"}
        />
      </View>

      {modalCadastro && (
        <ModalCadastro
          modal={modalCadastro}
          setModal={setModalCadastro}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
        />
      )}
    </SafeAreaView>
  );
};
