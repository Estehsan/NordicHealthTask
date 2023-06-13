import { StyleSheet, Text, View } from "react-native";
import React from "react";

const H3 = ({ children, color }) => {
  return (
    <Text style={color ? [styles.h3, { color: color }] : styles.h3}>
      {children}
    </Text>
  );
};

export default H3;

const styles = StyleSheet.create({
  h3: {
    fontSize: 15,
    opacity: 0.7,
    fontWeight: "bold",
  },
});
