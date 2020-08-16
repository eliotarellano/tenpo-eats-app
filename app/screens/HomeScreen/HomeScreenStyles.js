import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const width = Dimensions.get("window").width;
const borderRadius = 25;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
  },
  topContainer: {
    flex: 2,
  },
  middleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    top: 36,
  },
  bottomContainer: {
    width,
    flex: 4,
    alignSelf: "stretch",
    backgroundColor: colors.white,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    shadowColor: "#000",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
