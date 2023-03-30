import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

const app = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {},
});
