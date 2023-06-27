import React, { useState } from "react";
import {
  Modal,
  ModalProps,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LoginInput } from "../LoginInput";
import { LoginButton } from "../LoginButton";
import { styles } from "./styles";
import { createUserApi, Usuario } from "../../services/apiLocal";

interface ModalCadastroProps extends ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCadastro = ({
  modal,
  setModal,
  ...rest
}: ModalCadastroProps) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUsuario = async () => {
    const usuario: Usuario = {
      nickname,
      email,
      password,
    };

    await createUserApi(usuario);
    setModal(false);
    //     ToastAndroid.show("Usuário cadastrado com sucesso!", ToastAndroid.SHORT);

    //     ToastAndroid.show(err.message, ToastAndroid.SHORT);
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
          <TouchableWithoutFeedback onPress={() => setModal(false)}>
            <Text style={styles.textClose}>X</Text>
          </TouchableWithoutFeedback>
          <LoginInput
            placeholder="Nickname"
            placeholderTextColor="#399FFF"
            value={nickname}
            onChangeText={(t) => setNickname(t)}
            style={styles.input}
          />
          <LoginInput
            placeholder="Email"
            placeholderTextColor="#399FFF"
            value={email}
            onChangeText={(t) => setEmail(t)}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />
          <LoginInput
            placeholder="Senha"
            placeholderTextColor="#399FFF"
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
