import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { H1, H2, H3 } from "../components/basic";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const AnimatedHeader = ({ title, scrollY, subtitle }) => {
  const navigation = useNavigation();
  const fontStyles = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollY.value,
      [0, 100],
      [0, -30],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      scrollY.value,
      [0, 100],
      [1, 0.8],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX }, { scale }],
    };
  });

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          },
          fontStyles,
        ]}>
        {subtitle ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="#125763" />
          </TouchableOpacity>
        ) : null}
        <View style={styles.containerText}>
          <H2>{title}</H2>
          {subtitle ? <H3>{subtitle}</H3> : null}
        </View>
      </Animated.View>
    </View>
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    backgroundColor: "white",
    shadowColor: "#125763",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,

    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  animatedView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  containerText: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start", // Aligns the content to the left
  },
});
