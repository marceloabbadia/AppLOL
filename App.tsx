import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainStack } from "./src/routes/MainStack";
import "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} translucent={false} style="light" />
      <RootSiblingParent>
        <MainStack />
      </RootSiblingParent>
    </NavigationContainer>
  );
}
