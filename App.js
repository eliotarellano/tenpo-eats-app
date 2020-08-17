import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import { AppLoading } from "expo";

import getFonts from "./app/helpers/getFonts";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState();

  return (
    <>
      {fontLoaded ? (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <HomeScreen />
        </View>
      ) : (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontLoaded(true)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
