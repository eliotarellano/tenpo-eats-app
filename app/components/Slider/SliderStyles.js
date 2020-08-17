import { StyleSheet, Dimensions, Platform } from "react-native";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    bottom: Platform.OS === "android" ? 28 : height > 812 ? 14 : 28,
  },
  logoContainer: {
    bottom: height > 812 ? 10 : 26,
  },
  firstIllustration: {
    top: height > 812 ? 14 : 4,
    right: 30,
  },
  sliderPicker: {
    bottom: Platform.OS === "android" ? 4 : height > 667 ? 10 : 40,
    left: 90,
  },
});
