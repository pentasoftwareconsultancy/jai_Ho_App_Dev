import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import ImageUri from "../../assets/images/HanumanChalisaIcon.png";
import { useFocusEffect } from "@react-navigation/native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export default function HanumanChalisaScreen({ navigation }) {
  const [sliderValue, setSliderValue] = useState(0); // Start at 0 seconds
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [isAudio, setIsAudio] = useState(true); // State to toggle between audio and video
  const [selectedVerse, setSelectedVerse] = useState("01"); // State to track selected verse

  // Reset toggle switch when navigating back
  useFocusEffect(
    useCallback(() => {
      setIsAudio(false); // Set toggle to left (OFF)
    }, [])
  );

  // Handle Back Button Functionality
  const handleBackButton = () => {
    navigation.goBack();
  };

  // Function to toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle gender selection
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    Alert.alert(`${gender} clicked`);
  };

  // Function to format time from seconds to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`; // Format as MM:SS
  };

  // Function to handle verse selection
  const handleVerseSelection = (verse) => {
    Alert.alert(`${verse} clicked`);
    setSelectedVerse(verse); // Update selected verse
  };

  // Function to toggle audio/video and navigate to HanumanChalisaVideoScreen
  const toggleSwitch = (value) => {
    setIsAudio(value); // Update the state
    if (value) {
      // If the switch is toggled to "Videos" (false), navigate to HanumanChalisaVideoScreen
      navigation.navigate("HanumanChalisaVideoScreen");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Switch toggle */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton}>
          <Ionicons name="arrow-back" size={24} color="#FF6E30" />
        </TouchableOpacity>
        <View style={styles.toggleContainer}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isAudio ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isAudio}
          />
          <Text style={styles.toggleLabel}>Audio/Video</Text>
        </View>
      </View>

      {/* Image and Title */}
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={["#ff8e42", "#f74c32"]}
          style={styles.imageBorder}
        >
          <Image source={{ uri: ImageUri }} style={styles.hanumanImage} />
        </LinearGradient>
      </View>

      {/* Verse Selector */}
      <View style={styles.verseSelector}>
        {["01", "11", "21", "108"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.verseButton,
              selectedVerse === item && styles.selectedVerseButton,
            ]}
            onPress={() => handleVerseSelection(item)}
          >
            <Text style={styles.verseText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Text Content */}
      <View style={styles.textContent}>
        <Text style={styles.primaryText}>
          श्रीगुरु चरण सरोज रज निज मनु मुकुरु सुधारि
        </Text>
        <Text style={styles.secondaryText}>
          बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार
        </Text>
      </View>

      {/* Gender Selector */}
      <View style={styles.genderSelector}>
        {["Male", "Female", "Child"].map((gender, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.genderButton,
              gender === selectedGender && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelection(gender)}
          >
            <Text
              style={[
                styles.genderText,
                gender === selectedGender && styles.selectedGenderText,
              ]}
            >
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Audio/Video Section */}
      <View style={styles.audioSection}>
        {/* Slider */}
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={330} // 5 minutes and 30 seconds in seconds
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
          minimumTrackTintColor="#FF6E30"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#FF6E30"
        />
        <View style={styles.timeLabels}>
          <Text style={styles.timeText}>{formatTime(sliderValue)}</Text>
          <Text style={styles.timeText}>5:30</Text> {/* Fixed maximum time */}
        </View>

        {/* Media Controls */}
        <View style={styles.mediaControls}>
          <Ionicons name="play-back" size={40} color="#000" />
          <TouchableOpacity onPress={togglePlayPause}>
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={40}
              color="#FF6E30"
            />
          </TouchableOpacity>
          <Ionicons name="play-forward" size={40} color="#000" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: width * 0.04,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.08,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleLabel: {
    fontSize: width * 0.05,
    marginLeft: 10,
    color: "#000",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  imageBorder: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  hanumanImage: {
    width: width * 0.38,
    height: width * 0.38,
    borderRadius: width * 0.19,
  },
  verseSelector: {
    borderRadius: 15,
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
  },
  verseButton: {
    borderRadius: 10,
    padding: 8,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: "center",
  },
  selectedVerseButton: {
    backgroundColor: "#FF8C00",
  },
  verseText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
  textContent: {
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  primaryText: {
    fontSize: width * 0.06,
    // fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  secondaryText: {
    fontSize: width * 0.05,
    color: "#555",
    textAlign: "center",
  },
  genderSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: height * 0.08,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  selectedGenderButton: {
    backgroundColor: "#FF6E30",
  },
  genderText: {
    color: "#555",
  },
  selectedGenderText: {
    color: "#FFF",
  },
  audioSection: {
    alignItems: "center",
    marginVertical: height * 0.0,
  },
  slider: {
    width: "100%",
    marginVertical: height * 0.03,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  timeText: {
    fontSize: width * 0.05,
    color: "#555",
  },
  mediaControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginVertical: height * 0.04,
  },
});
