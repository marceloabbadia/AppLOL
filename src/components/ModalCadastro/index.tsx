import React, { useContext, useState } from "react";
import {
  Modal,
  ModalProps,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LoginInput } from "../LoginInput";
import { LoginButton } from "../LoginButton";
import { styles } from "./styles";
import { createUserApi, Usuario } from "../../services/apiLocal";
import Toast from "react-native-root-toast";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

interface ModalCadastroProps extends ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  usuarios: Usuario[];
  setUsuarios: (value: React.SetStateAction<Usuario[]>) => void;
}

export const ModalCadastro = ({
  modal,
  setModal,
  usuarios,
  setUsuarios,
  ...rest
}: ModalCadastroProps) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [championFav, setChampionFav] = useState([]);

  const handleAddUsuario = async () => {
    try {
      const usuario: Usuario = {
        nickname,
        email,
        password,
      };
      await createUserApi(usuario);
      setModal(false);
      Toast.show("Usuário cadastrado com sucesso!", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      setUsuarios([...usuarios, usuario]);
    } catch (err: any) {
      Toast.show(err.message, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(!modal);
      }}
      {...rest}
    >
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <View style={styles.ContainerClose}>
            <TouchableWithoutFeedback onPress={() => setModal(false)}>
              <AntDesign name="closecircleo" size={30} color="red" />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.SIGNIN}>
            <FontAwesome5 name="user-plus" size={24} color="#C89B3C" />
            <Text style={styles.SignInTXT}> CADASTRE-SE</Text>
          </View>
          <LoginInput
            placeholder="Nickname"
            placeholderTextColor="#fff"
            value={nickname}
            autoCapitalize="none"
            onChangeText={(t) => setNickname(t)}
            style={styles.input}
          />
          <LoginInput
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={(t) => setEmail(t)}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
          <LoginInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={(t) => setPassword(t)}
            style={styles.input}
            secureTextEntry
          />
          <LoginButton
            title="CADASTRAR"
            style={styles.buttonLogin}
            styleText={styles.textButtonLogin}
            onPress={handleAddUsuario}
          />
        </View>
      </View>
    </Modal>
  );
};
