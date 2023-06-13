import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const AnimatedHeader = () => {
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
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({});
