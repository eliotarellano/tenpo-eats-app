import * as Font from "expo-font";

export default async () => {
  await Font.loadAsync({
    "gotham-regular": require("../assets/fonts/Gotham-Regular.otf"),
    "gotham-bold": require("../assets/fonts/Gotham-Bold.otf"),
  });
};
