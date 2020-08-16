import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./AdressStyles";
import Location from "../../assets/svg/Location.svg";

export default () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Location />
        <Text style={styles.text}>Agregar dirección de entrega</Text>
      </View>
    </TouchableOpacity>
  );
};
