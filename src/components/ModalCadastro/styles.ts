import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12100055",
  },
  modalContainer: {
    marginTop: 0,
    marginLeft: 0,
    width: "80%",
    height: "50%",
    paddingHorizontal: 15,
    backgroundColor: "rgba(30, 35, 40, 0.97)",
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: "#785A28",
  },

  ContainerClose: {
    paddingVertical: 12,
  },

  textClose: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    padding: 5,
  },

  SignInTXT: {
    color: "#C89B3C",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "left",
  },

  SIGNIN: {
    marginVertical: 10,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  input: {
    paddingVertical: 10,
    paddingLeft: 15,
    backgroundColor: "#c1c1c1",
    marginVertical: 10,
    borderRadius: 10,
    color: "black",
    marginTop: 20,
  },
  buttonLogin: {
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#785A28",
    borderRadius: 10,
    marginVertical: 10,
    marginTop: 30,
  },
  textButtonLogin: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 15,
  },
});
