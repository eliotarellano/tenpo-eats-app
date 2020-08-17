import React from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./SliderStyles";
import { Title, Subtitle, SvgContainer } from "./StyledSlider";
import FirstIllustration from "../../assets/svg/Illustration_1.svg";
import SliderPicker from "../../assets/svg/Slider.svg";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Title type="light">Tenpo</Title>
        <Title type="primary">Eats</Title>
        <Subtitle>Deliver App</Subtitle>
      </View>
      <View style={styles.svgContainer}>
        <View>
          <FirstIllustration style={styles.firstIllustration} />
        </View>
        <TouchableOpacity>
          <View>
            <SliderPicker style={styles.sliderPicker} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
