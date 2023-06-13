import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { H2 } from "./basic";

const data = Array.from(
  {
    length: 20,
  },
  (_, index) => `Medication ${index + 1}`
);

const ListViewComponent = () => {
  return (
    <View style={styles.main}>
      <H2>Medication List</H2>

      <FlatList
        data={data}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.listItemText}>{item}</Text>
  </View>
);
export default ListViewComponent;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  listItemText: {
    fontSize: 17,
    opacity: 0.7,
    backgroundColor: "#fff",
    marginVertical: 5,
    paddingHorizontal: 10,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
