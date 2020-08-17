import { StyleSheet } from "react-native";

import normalize from "../../helpers/normalize";

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: normalize(false, 16),
    fontFamily: "gotham-bold",
    textTransform: "uppercase",
  },
});
