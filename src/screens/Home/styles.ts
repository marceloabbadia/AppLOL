import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#399fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  championItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
  },
  championImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  championName: {
    backgroundColor: "black",
    width: 100,
    height: 20,
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
  },
});
