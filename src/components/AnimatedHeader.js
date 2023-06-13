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
    return {
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [0, 30],
            [1, 0.9],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
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
      <View
        style={
          subtitle
            ? styles.containerText
            : { flex: 1, paddingHorizontal: 20, alignItems: "center" }
        }>
        <H2>{title}</H2>

        {subtitle ? <H3>{subtitle}</H3> : null}
      </View>
    </Animated.View>
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({
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
