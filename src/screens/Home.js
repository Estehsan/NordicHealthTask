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
  useAnimatedStyle,
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

const Home = ({ route }) => {
  const navigation = useNavigation();
  const navigationRef = useNavigationContainerRef();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const fontStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // From big to small size
          scale: interpolate(
            scrollY.value,
            [0, 30],
            [1, 0.9], // Updated range from 1 to 0.5
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView>
      <Animated.View
        style={[
          {
            paddingHorizontal: 20,
            borderRadius: 10,
            marginVertical: 10,
            shadowColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
          },
          fontStyles,
        ]}>
        <H2>{route.name}</H2>
      </Animated.View>

      <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
        <View style={[styles.twoButton]}>
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
  },
  AnimatedView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },

  twoButton: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
