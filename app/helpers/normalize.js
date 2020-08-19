import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375;

export default (isStyledComponent, size) => {
  const newSize = size * scale;

  const finalSize =
    Platform.OS === 'ios'
      ? Math.round(PixelRatio.roundToNearestPixel(newSize))
      : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;

  return isStyledComponent ? `${finalSize}px` : finalSize;
};
