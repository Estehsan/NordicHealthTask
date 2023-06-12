import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H2 = ({ children }) => {
  return <Text style={styles.h2}>{children}</Text>;
};

export default H2;

const styles = StyleSheet.create({
  h2: {
    fontSize: 20,
    opacity: 0.7,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
