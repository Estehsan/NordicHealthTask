import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListViewComponent from "../components/ListViewComponent";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedHeader from "../components/AnimatedHeader";

const Info = ({ route }) => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  return (
    <SafeAreaView style={styles.main}>
      <AnimatedHeader
        subtitle={
          "List of medications that you have been prescribed by your doctor."
        }
        title={route.name}
        scrollY={scrollY}
      />
      <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
        <ListViewComponent />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
