import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    marginTop: Platform.OS === "android" ? 20 : 0,
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    width: 50,
    height: 50,
  },
  search: {
    marginLeft: "auto",
    marginRight: 4,
  },
});
