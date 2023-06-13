import React, { useEffect, useRef, useLayoutEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ListViewComponent from "../components/ListViewComponent";
import { H1, H2 } from "../components/basic";
import Btn from "../components/basic/Btn";
import {
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedHeader from "../components/AnimatedHeader";

const Home = ({ route }) => {
  const navigation = useNavigation();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <SafeAreaView style={styles.main}>
      <AnimatedHeader title={route.name} scrollY={scrollY} />

      <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
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
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  twoButton: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
