import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import styles from "./HomeScreenStyles";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import AdressButton from "../../components/AdressButton/AdressButton";

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topContainer}>
          <Header />
          <Slider />
        </View>
        <View style={styles.middleContainer}>
          <AdressButton />
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView></ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};
