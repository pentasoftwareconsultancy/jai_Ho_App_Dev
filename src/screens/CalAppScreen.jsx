import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Image,
  Vibration,
  Easing,
} from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const CalAppScreen = ({ route }) => {
  const { selectedNumber, enableSound, enableVibration } = route.params;
  const [sound, setSound] = useState(null);
  const [currentCount, setCurrentCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const countAnimation = useRef(new Animated.Value(0)).current;
  const angleAnim = useRef(new Animated.Value(0)).current;
  const radius = 100;

  useEffect(() => {
    const loadSound = async () => {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        require("../../assets/audios/jaap.mp3")
      );
      setSound(audioSound);
    };

    loadSound();

    Animated.loop(
      Animated.timing(angleAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const rotateInterpolation = angleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolation }, { translateX: radius }],
  };

  const animateCount = () => {
    Animated.sequence([
      Animated.timing(countAnimation, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(countAnimation, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTap = async () => {
    if (isCounting && currentCount < selectedNumber) {
      setCurrentCount((prevCount) => prevCount + 1);
      animateCount();

      if (enableSound && sound) {
        await sound.replayAsync();
      }

      if (enableVibration) {
        Vibration.vibrate(300);
      }

      if (currentCount + 1 === selectedNumber) {
        setIsCounting(false);
      }
    }
  };

  const handleStartMantras = () => {
    if (isCounting) {
      setIsCounting(false);
      setCurrentCount(0);
    } else {
      setCurrentCount(0);
      setIsCounting(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={styles.container}>
        <View style={styles.circleImageContainer}>
          <Image
            source={require("../../assets/images/hanuman.jpg")}
            style={styles.circleImage}
          />
          <View style={styles.circularPath} />
          <Animated.View style={[styles.smallCircle, animatedStyle]} />
        </View>

        <Text style={styles.title}>Mantra Counter</Text>
        <Text style={styles.selectedNumber}>
          Total Mantras: {selectedNumber}
        </Text>

        <Animated.Text
          style={[
            styles.countNumber,
            {
              transform: [
                {
                  scale: countAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.2],
                  }),
                },
              ],
            },
          ]}
        >
          {currentCount}
        </Animated.Text>

        <View style={styles.iconContainer}>
          <AntDesign
            name={isCounting ? "pausecircleo" : "playcircleo"}
            size={60}
            color="#FF7043"
            onPress={handleStartMantras}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Light beige background for a serene feel
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF7043", // Indigo color for a divine touch
    marginBottom: 10,
    fontFamily: "serif",
    textShadowColor: "rgba(233, 248, 28, 0.5)", // Adding a subtle shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  selectedNumber: {
    fontSize: 20,
    color: "#FF7043",
    marginBottom: 30,
    fontFamily: "serif",
  },
  countNumber: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#FF7043", // Gold color for a divine and luxurious feel
    marginBottom: 40,
    fontFamily: "serif",
    textShadowColor: "rgba(255, 215, 0, 0.5)", // Adding a subtle shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  iconContainer: {
    marginTop: 20,
  },
  circleImageContainer: {
    position: "relative",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  circleImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#FF7043", // Rich orange border for a divine touch
    zIndex: 1,
    shadowColor: "#FF7043", // Gold shadow for a divine glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  circularPath: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FF7043", // Rich orange border for a divine touch
    borderStyle: "solid",
  },
  smallCircle: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF7043", // Rich orange color for a divine touch
    zIndex: 2,
  },
});

export default CalAppScreen;