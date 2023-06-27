import React from "react";
import { TextInputProps, TextInput, StyleSheet } from "react-native";

interface LoginInputProps extends TextInputProps {}

export const LoginInput = ({ ...rest }: LoginInputProps) => {
  return <TextInput {...rest}></TextInput>;
};
