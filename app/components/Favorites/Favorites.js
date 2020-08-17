import React from "react";
import { View, Text } from "react-native";

import styles from "./FavoritesStyles";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus favoritos</Text>
    </View>
  );
};
