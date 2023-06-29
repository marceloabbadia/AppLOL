import React from "react";
import { StyleSheet, StatusBar, Platform } from "react-native";

export const styles = StyleSheet.create({
  HABpage: {
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    backgroundColor: "#091428",
  },

  CHAMPName: {
    borderBottomWidth: 0.199,
    borderColor: "#c1c1c1",
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    paddingHorizontal: 5,
    paddingVertical: 5,
    top: -20,
  },

  CHAMPDescription: {
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
    paddingVertical: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 7,
  },

  CHAMPTitle: {
    color: "#c1c1c1",
    fontSize: 12,
    fontWeight: "300",
    fontStyle: "italic",
    borderWidth: 1,
    borderColor: "#1E2328",
    backgroundColor: "#374049",
    borderRadius: 7,
  },

  TextContainer: {
    paddingHorizontal: 5,
    backgroundColor: "#1E2328",
    alignItems: "flex-start",
    marginTop: 5,
    top: -20,
  },

  CHAMPcontainer: {
    borderWidth: 1,
    borderColor: "#C89B3C",
    backgroundColor: "#1E2328",
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  HABcontainer: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#C89B3C",
    backgroundColor: "#1E2328",
    marginTop: 1,
    borderRadius: 10,
    marginVertical: 10,
  },

  HABName: {
    borderWidth: 0.199,
    borderColor: "#c1c1c1",
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  HABDescription: {
    fontSize: 13,
    fontWeight: "100",
    color: "#fff",
    paddingVertical: 30,
    marginLeft: 7,
    marginRight: 20,
    paddingHorizontal: 7,
  },

  HABContentView: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },

  HABTxtEnun: {
    color: "#d3d3d3",
    fontSize: 13,
    fontWeight: "300",
    paddingHorizontal: 20,
    paddingVertical: 2,
  },

  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 110,
    marginHorizontal: 5,
  },
  containerblack: {
    flex: 1,
    backgroundColor: "black",
    marginTop: -50,
  },

  modalHeader: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 0.199,
    borderColor: "#C89B3C",
    borderTopWidth: 2,
  },

  buttonreturn: {
    borderRadius: 30,
    backgroundColor: "#463714",
    marginRight: 50,
  },

  modalTxtHeader: {
    fontSize: 20,
    color: "#C8AA6E",
    fontWeight: "600",
    marginRight: 100,
  },

  TxtBtn: {
    fontSize: 15,
    color: "#C8AA6E",
    fontWeight: "600",
  },

  ContainerBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#C89B3C",
    backgroundColor: "#010A13",
    marginTop: 0,
    borderRadius: 20,
    width: 382,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },

  TituloBiografia: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "700",
    backgroundColor: "#1E2328",
    paddingHorizontal: 15,
    paddingVertical: 0,
    paddingTop: 10,
    marginLeft: 10,
    width: "40%",
  },

  DivisaoHAB: {
    backgroundColor: "#1E282D",
    borderWidth: 2,
    borderColor: "#785A28",
    borderRadius: 20,
  },

  TXTDivisaoHAB: {
    color: "#C89B3C",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 150,
    paddingVertical: 15,
  },
});
