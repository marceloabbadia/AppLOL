import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { Summoner } from "../screens/Summoner";
import ChatLOL from "../screens/ChatLOL";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerNavigate} />
    </Stack.Navigator>
  );
};

const DrawerNavigate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "HOME",
          drawerActiveBackgroundColor: "#399fff",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "#399fff",
          drawerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Drawer.Screen
        name="ChatLOL"
        component={ChatLOL}
        options={{
          drawerActiveBackgroundColor: "#399fff",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "#399fff",
          drawerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Drawer.Screen
        name="Summoner"
        component={Summoner}
        options={{
          drawerActiveBackgroundColor: "#399fff",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "#399fff",
          drawerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Drawer.Screen
        name="Log Out"
        component={Login}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: "#399fff",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "#399fff",
          drawerStyle: {
            backgroundColor: "white",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
