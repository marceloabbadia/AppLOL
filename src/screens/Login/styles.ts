import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  areaLogin: {
    marginTop: 120,
    marginLeft: 10,
    width: 200,
    height: 230,
    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 10,
    paddingLeft: 15,
    backgroundColor: "#399FFF",
    marginVertical: 10,
    borderRadius: 10,
    color: "white",
  },
  textCadastrar: {
    fontSize: 15,
    padding: 5,
    marginBottom: 5,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonLogin: {
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#399FFF",
    borderRadius: 10,
    marginVertical: 10,
  },
  textButtonLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
