import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H1 = ({ children, color }) => {
  return (
    <Text style={color ? [styles.h1, { color: color }] : styles.h1}>
      {children}
    </Text>
  );
};

export default H1;

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
