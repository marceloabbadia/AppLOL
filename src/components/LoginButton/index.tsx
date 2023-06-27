import React from "react";
import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native";

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
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};
