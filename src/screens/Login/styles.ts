import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  areaLogin: {
    marginTop: 0,
    marginLeft: 0,
    width: "80%",
    height: "45%",
    paddingHorizontal: 10,
    backgroundColor: "rgba(30, 35, 40, 0.9)",
    borderWidth: 1.2,
    borderRadius: 20,
    borderColor: "#785A28",
  },
  input: {
    paddingVertical: 10,
    paddingLeft: 15,
    backgroundColor: "#c1c1c1",
    marginVertical: 20,
    borderRadius: 10,
    color: "black",
  },
  inputDark: {
    backgroundColor: "#0A1428",
  },

  SignInTXT: {
    color: "#C89B3C",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "left",
  },

  SIGNIN: {
    marginVertical: 10,
    paddingRight: 210,
    paddingBottom: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  textCadastrar: {
    fontSize: 15,
    padding: 5,
    marginBottom: 5,
    color: "#399FFF",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  buttonLogin: {
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#785A28",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonLoginDark: {
    backgroundColor: "#0A1428",
  },

  textButtonLogin: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 15,
  },
});
