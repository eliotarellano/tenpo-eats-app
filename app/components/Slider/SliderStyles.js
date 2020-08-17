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
    bottom: height > 812 ? 20 : 26,
  },
  svgContainer: {
    marginLeft: "auto",
    transform: [{ scale: 1 }],
  },
  firstIllustration: {
    top: height > 812 ? 20 : 4,
    right: 30,
  },
  sliderPicker: {
    bottom: Platform.OS === "android" ? 8 : height > 812 ? height * 0.001 : 40,
    left: 90,
  },
});
