import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./HomeScreenStyles";
import Topbar from "../../components/Topbar/Topbar";
import Adress from "../../components/Adress/Adress";

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topContainer}>
          <Topbar />
        </View>
        <View style={styles.middleContainer}>
          <Adress />
        </View>
        <View style={styles.bottomContainer}></View>
      </SafeAreaView>
    </View>
  );
};
