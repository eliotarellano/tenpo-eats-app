import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";

import styles from "./HomeScreenStyles";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import AdressButton from "../../components/AdressButton/";
import Restaurants from "../../components/Restaurants/";
import Categories from "../../components/Categories";
import Favorites from "../../components/Favorites";

export default () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Header />
          <Slider />
        </View>
        <View style={styles.middleContainer}>
          <AdressButton />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.sectionContainer}>
            <Restaurants />
            <Categories />
            <Favorites />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
