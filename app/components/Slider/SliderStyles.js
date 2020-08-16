import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    bottom: 30,
  },
  firstIllustration: {
    top: height * 0.03,
    right: 10,
  },
});
