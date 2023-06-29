import React from "react";
import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface LoginButtonProps extends TouchableOpacityProps {
  title: string;
  styleText: object;
}

export const LoginButton = ({
  title,
  styleText,
  ...rest
}: LoginButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      <AntDesign name="login" size={15} color="#fff" />
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};
