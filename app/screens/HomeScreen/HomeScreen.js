import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './HomeScreenStyles';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import AddressButton from '../../components/AddressButton';
import Restaurants from '../../components/Restaurants';
import Categories from '../../components/Categories';
import Favorites from '../../components/Favorites';

export default () => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.topContainer}>
        <Header />
        <Slider />
      </View>
      <View style={styles.middleContainer}>
        <AddressButton />
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
