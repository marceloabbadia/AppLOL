import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainStack } from "./src/routes/MainStack";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} translucent={false} style="light" />
      <MainStack />
    </NavigationContainer>
  );
}
