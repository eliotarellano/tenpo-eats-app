import { StyleSheet } from "react-native";

import normalize from "../../helpers/normalize";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    bottom: 22,
  },
  text: {
    color: colors.primaryDarker,
    marginLeft: normalize(false, 10),
    fontFamily: "gotham-regular",
    fontWeight: "800",
    fontSize: normalize(false, 15),
  },
});
