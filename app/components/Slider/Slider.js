import React from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./SliderStyles";
import { Title, Subtitle, SvgContainer } from "./StyledSlider";
import FirstIllustration from "../../assets/svg/Illustration_1.svg";
import SliderPicker from "../../assets/svg/Slider.svg";

export default () => {
  return (
    <View style={styles.container}>
      <View>
        <Title type="light">Tenpo</Title>
        <Title type="primary">Eats</Title>
        <Subtitle>Deliver App</Subtitle>
      </View>
      <SvgContainer>
        <View>
          <FirstIllustration style={styles.firstIllustration} />
        </View>
        <TouchableOpacity>
          <View>
            <SliderPicker />
          </View>
        </TouchableOpacity>
      </SvgContainer>
    </View>
  );
};