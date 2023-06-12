import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ListViewComponent from "../components/ListViewComponent";
import { H1 } from "../components/basic";
import Btn from "../components/basic/Btn";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <H1>Home</H1>
      <View style={styles.twoButton}>
        <Btn
          onPress={() => navigation.navigate("Info")}
          text="Register Medication"
          bgColor={"#125763"}
        />
        <Btn
          onPress={() => navigation.navigate("Info")}
          text="Register Medication"
          bgColor={"#2c3844"}
        />
      </View>
      <ListViewComponent />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  twoButton: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
