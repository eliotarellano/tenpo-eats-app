import { StyleSheet } from "react-native";

import normalize from "../../helpers/normalize";

export default StyleSheet.create({
  container: {},
  title: {
    marginTop: -10,
    fontSize: normalize(false, 16),
    fontFamily: "gotham-bold",
    textTransform: "uppercase",
  },
});
