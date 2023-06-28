import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#399fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  topArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20,
    paddingBottom: 30,
  },
  topText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    top: 50,
    color: "#FFFFFF",
  },
  topTextDark: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    top: 50,
    color: "#FFD700",
  },
  topText1: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    top: 10,
    color: "#FFFFFF",
  },
  topTextDark1: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    top: 10,
    color: "#FFD700",
  },
  topImage: {
    width: 200,
    height: 100,
    marginLeft: 77,
    top: 2,
  },
  containerDark: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  championItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
  },
  favoriteStar: {
    width: 20,
    height: 20,
    zIndex: 1,
    top: 3,
    right: 5,
    alignSelf: "flex-end",
    position: "absolute",
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
    textAlign: "center",
  },
});
