import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Image } from "react-native";

const TitleContainer = styled.View`
  text-align: left;
`;

const Title = styled.Text`
  font-size: 52px;
  font-weight: bold;
  line-height: 50px;
  color: ${(props) => (props.type === "primary" ? "#333333" : "#00BAA4")};
`;

const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <TitleContainer>
            <Title type="primary">Tenpo</Title>
            <Title type="secondary">Eats</Title>
            <Subtitle>Deliver App</Subtitle>
          </TitleContainer>
          <Image
            width={215}
            height={259}
            source={require("../assets/illustration2.png")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
});
