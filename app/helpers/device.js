import { Dimensions, Platform } from "react-native";

export function isIphoneXOrAbove() {
  const { width, height } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
}
