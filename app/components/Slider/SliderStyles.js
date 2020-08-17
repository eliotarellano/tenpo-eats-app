import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
console.log("height", height);

export default StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    bottom: height > 812 ? 12 : 24,
  },
  firstIllustration: {
    top: height > 812 ? 20 : 4,
    right: 10,
  },
  sliderPicker: {
    top: 8,
  },
});
