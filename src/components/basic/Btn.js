import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Btn = ({ children, text, bgColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        bgColor ? [styles.button, { backgroundColor: bgColor }] : styles.button
      }>
      <Text style={styles.btnText}>{text ? text : children}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    flex: 1 / 3,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#125763",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "white",
    fontSize: 17,
  },
});
