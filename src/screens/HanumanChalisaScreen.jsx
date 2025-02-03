import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import ImageUri from "../../assets/images/HanumanChalisaIcon.png";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export default function HanumanChalisaScreen({ navigation }) {
  const [sliderValue, setSliderValue] = useState(0); // Start at 0 seconds
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [isAudio, setIsAudio] = useState(true); // State to toggle between audio and video
  const [selectedVerse, setSelectedVerse] = useState("01"); // State to track selected verse

  // Handle Back Button Functionality
  const handleBackButton = () => {
    navigation.goBack();
  };

  // Function to toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle Backward and Forward Button
  const HandleBackwardButton = () => {
    // Logic to handle backward button
    Alert.alert("Backward Button Pressed")
  }

  const HandleForwardButton = () => {
    Alert.alert("Forward Button Pressed")
  }

  // Function to handle gender selection
  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    Alert.alert(`${gender} clicked`);
    // navigation.navigate(`${gender}Page`);
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButton}>
          <Ionicons name="arrow-back" size={24} color="#FF6E30" />
        </TouchableOpacity>
        <Text style={styles.greeting}>Good Morning!</Text>
        <Image
          source={ImageUri}
          style={styles.profileImage}
        />
      </View>

      {/* Image and Title */}
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={["#ff8e42", "#f74c32"]}
          style={styles.imageBorder}
        >
          <Image
            source={{
              uri: ImageUri,
            }}
            style={styles.hanumanImage}
          />
        </LinearGradient>
      </View>

      {/* Verse Selector */}
      <View style={styles.verseSelector}>
        {["01", "11", "21", "108"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.verseButton,
              selectedVerse === item && styles.selectedVerseButton, // Apply selected style
            ]}
            onPress={() => handleVerseSelection(item)} // Handle verse selection
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
      <View style={styles.audioVideoSection}>
        <TouchableOpacity style={styles.audioButton} onPress={() => setIsAudio(!isAudio)}>
          <MaterialIcons
            name={isAudio ? "pause" : "play-arrow"}
            size={30}
            color="#FF8C00"
          />
          <Text style={styles.audioText}>{isAudio ? "Audios" : "Videos"}</Text>
        </TouchableOpacity>
      </View>

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
      <View style={styles.audioSection}>
        <View style={styles.mediaControls}>
          <TouchableOpacity onPress={HandleBackwardButton}>
            <Ionicons name="play-back" size={40} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayPause}>
            <Ionicons
              name={isPlaying ? "pause" : "play"}
              size={40}
              color="#FF6E30"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={HandleForwardButton}>
            <Ionicons name="play-forward" size={40} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View >
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
  greeting: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#000",
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
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
    borderRadius: 20,
    borderWidth: 0.9,
    borderColor: "#CCC",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.03,
  },
  verseButton: {
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 16,
    flex: 1, // Allow the button to take equal space
    alignItems: "center", // Center the text horizontally
  },
  selectedVerseButton: {
    backgroundColor: "#FF8C00", // Change this to your desired selected color
  },
  verseText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
  textContent: {
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  primaryText: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  secondaryText: {
    fontSize: width * 0.04,
    color: "#555",
    textAlign: "center",
  },
  genderSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: height * 0.02,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
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
  audioVideoSection: {
    alignItems: "flex-end",
    marginVertical: height * 0.0,
  },
  audioSection: {
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  audioButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFEAAD",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 16,
  },
  audioText: {
    color: "#FF6E30",
    marginLeft: 8,
  },
  slider: {
    width: "100%",
    marginVertical: height * 0.0,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  timeText: {
    fontSize: width * 0.050,
    color: "#555",
  },
  mediaControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginVertical: height * 0.05,
  },
});