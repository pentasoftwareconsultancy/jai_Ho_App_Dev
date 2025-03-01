import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
} from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const BhajanAudioPlayerScreen = () => {
  const route = useRoute();
  const { media } = route.params; // Bhajan data from navigation
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0); // Current position in milliseconds
  const [duration, setDuration] = useState(0); // Total duration in milliseconds
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const angleAnim = useRef(new Animated.Value(0)).current; // Added for rotating circle
  const radius = 100; // Same radius as CalAppScreen

  // Load audio, fade-in animation, and rotating circle animation
  useEffect(() => {
    const loadSound = async () => {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        { uri: media.audioUrl || "https://example.com/default-audio.mp3" } // Replace with actual audio URL
      );
      setSound(audioSound);

      // Get duration once loaded
      audioSound.getStatusAsync().then((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis);
        }
      });

      // Update position during playback
      audioSound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          setIsPlaying(status.isPlaying);
        }
      });
    };

    loadSound();

    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Rotating circle animation (same as CalAppScreen)
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
  }, [media]);

  const rotateInterpolation = angleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Same as CalAppScreen
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolation }, { translateX: radius }], // Same as CalAppScreen
  };

  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeekBackward = async () => {
    if (sound) {
      const newPosition = Math.max(0, position - 10000); // Rewind 10 seconds
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  };

  const handleSeekForward = async () => {
    if (sound) {
      const newPosition = Math.min(duration, position + 10000); // Forward 10 seconds
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  };

  const handleSliderChange = async (value) => {
    if (sound) {
      const newPosition = value * duration;
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition);
    }
  };

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* Image with Rotating Circle (Same as CalAppScreen) */}
        <View style={styles.circleImageContainer}>
          <Image source={media.image} style={styles.podcastImage} />
          <View style={styles.circularPath} />
          <Animated.View style={[styles.smallCircle, animatedStyle]} />
        </View>

        {/* Podcast Info */}
        <Text style={styles.title}>{media.title}</Text>

        {/* Progress Slider */}
        <View style={styles.progressContainer}>
          <Text style={styles.timeText}>{formatTime(position)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={duration ? position / duration : 0}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#FF7043"
            maximumTrackTintColor="#FFD700"
            thumbTintColor="#FF5722"
          />
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>

        {/* Playback Controls */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={handleSeekBackward}>
            <AntDesign name="stepbackward" size={30} color="#FFD700" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playButton}
            onPress={handlePlayPause}
          >
            <AntDesign
              name={isPlaying ? "pause" : "play"}
              size={40}
              color="#FF7043"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSeekForward}>
            <AntDesign name="stepforward" size={30} color="#FFD700" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7", 
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: "#FFA726",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  circleImageContainer: {
    position: "relative",
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center", // Same as CalAppScreen
  },
  podcastImage: {
    width: 150, // Same size as CalAppScreen
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#FF7043", // Same orange border as CalAppScreen
    zIndex: 1, // Same zIndex as CalAppScreen
    shadowColor: "#FF7043",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  circularPath: {
    position: "absolute",
    width: 200, // Same size as CalAppScreen
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FF7043", // Same orange border as CalAppScreen
    borderStyle: "solid", // Same solid style as CalAppScreen
  },
  smallCircle: {
    position: "absolute",
    width: 20, // Same size as CalAppScreen
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF7043", // Same orange color as CalAppScreen
    zIndex: 2, // Same zIndex as CalAppScreen
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#4A2C00",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(255, 215, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginTop:20,
    marginBottom:20
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: responsiveWidth(80),
    marginBottom: 30,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  timeText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: responsiveWidth(50),
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: "#FFECE0",
    borderRadius: 40,
    padding: 15,
    elevation: 5,
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default BhajanAudioPlayerScreen;