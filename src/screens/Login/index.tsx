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
import Toast from "react-native-root-toast";
import { DarkModeContext } from "../../Context/darkModelContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorProps } from "../../routes/MainStack";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFavorites } from "../../Context/contextFavoritos";

export const Login = () => {
  const [modalCadastro, setModalCadastro] = useState<boolean>(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigation = useNavigation<StackNavigationProp<StackNavigatorProps>>();
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { setNicknameHome } = useFavorites();

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
      setNicknameHome(user.nickname);
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
        <View style={styles.SIGNIN}>
          <FontAwesome name="user-o" size={24} color="#C89B3C" />
          <Text style={styles.SignInTXT}> SIGN IN</Text>
        </View>
        <LoginInput
          placeholder="Nickname"
          placeholderTextColor="white"
          autoCapitalize="none"
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "300" }}>
            Não possui uma conta ?{" "}
          </Text>
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
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginLeft: 0,
          top: 90,
          backgroundColor: "rgba(40, 67, 135, 0.5)",
          borderWidth: 1,
          borderRadius: 20,
          borderColor: "rgba(4, 59, 92, 0.5)",
        }}
      >
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={28}
          color="white"
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            zIndex: 2,
            padding: 10,
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
