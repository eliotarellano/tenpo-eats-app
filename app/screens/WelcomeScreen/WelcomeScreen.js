import React from "react";
import { View, SafeAreaView, Image } from "react-native";

import styles from "./WelcomeScreenStyles";
import {
  TitleContainer,
  Title,
  Subtitle,
  SvgContainer,
} from "./StyledWelcomeScreen";
import SecondIllustration from "../../assets/svg/Illustration_2.svg";

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <View>
          <TitleContainer>
            <Title type="light">Tenpo</Title>
            <Title type="primary">Eats</Title>
            <Subtitle>Deliver App</Subtitle>
          </TitleContainer>
          <SvgContainer>
            <SecondIllustration width={300} height={300} />
          </SvgContainer>
        </View> */}
      </SafeAreaView>
    </View>
  );
};
