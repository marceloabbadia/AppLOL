import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12100055",
  },
  modalContainer: {
    backgroundColor: "#399FFF",
    borderRadius: 20,
    padding: "5%",
    width: "75%",
    maxHeight: "60%",
  },
  textClose: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,

    padding: 5,
  },
  input: {
    paddingVertical: 10,
    paddingLeft: 15,
    backgroundColor: "#FFF",
    marginVertical: 10,
    borderRadius: 10,
    color: "black",
  },
  buttonLogin: {
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
  },
  textButtonLogin: {
    color: "#399FFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});
