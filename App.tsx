import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainStack } from "./src/routes/MainStack";
import "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { DarkModeProvider } from "./src/Context/darkModelContext";
import { FavoritesProvider } from "./src/Context/contextFavoritos";
LogBox.ignoreLogs(["Warning: ..."]);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} translucent={false} style="light" />
      <DarkModeProvider>
        <RootSiblingParent>
          <FavoritesProvider>
            <MainStack />
          </FavoritesProvider>
        </RootSiblingParent>
      </DarkModeProvider>
    </NavigationContainer>
  );
}
