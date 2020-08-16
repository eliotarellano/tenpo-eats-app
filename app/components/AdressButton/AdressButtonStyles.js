import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    bottom: 16,
  },
  text: {
    color: colors.primaryDarker,
    marginLeft: 8,
    fontWeight: "300",
  },
});
