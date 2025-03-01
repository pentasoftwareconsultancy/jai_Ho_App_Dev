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
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useFocusEffect } from "@react-navigation/native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export default function HanumanChalisaScreen({ navigation }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [isAudio, setIsAudio] = useState(true);
  const [selectedVerse, setSelectedVerse] = useState("01");

  useFocusEffect(
    useCallback(() => {
      setIsAudio(false);
    }, [])
  );

  const handleBackButton = () => {
    navigation.goBack();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    Alert.alert(`${gender} clicked`);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleVerseSelection = (verse) => {
    Alert.alert(`${verse} clicked`);
    setSelectedVerse(verse);
  };

  const toggleSwitch = (value) => {
    setIsAudio(value);
    if (value) {
      navigation.navigate("HanumanChalisaVideoScreen");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header with Switch toggle */}
          <View style={styles.header}>
            <View style={styles.toggleContainer}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isAudio ? "#f5dd4b" : "#f4f3f4"}
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
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
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
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={330}
              value={sliderValue}
              onValueChange={(value) => setSliderValue(value)}
              minimumTrackTintColor="#FF6E30"
              maximumTrackTintColor="#CCCCCC"
              thumbTintColor="#FF6E30"
            />
            <View style={styles.timeLabels}>
              <Text style={styles.timeText}>{formatTime(sliderValue)}</Text>
              <Text style={styles.timeText}>5:30</Text>
            </View>

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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scrollContainer: {
    paddingBottom: height * 0.1, // Extra padding at the bottom for scroll
  },
  container: {
    paddingHorizontal: width * 0.04,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Move toggle to the right
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleLabel: {
    fontSize: width * 0.045,
    marginLeft: 10,
    color: "#000",
    fontWeight: "500",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: height * 0.03,
  },
  imageBorder: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, // Add shadow for depth
  },
  hanumanImage: {
    width: width * 0.48,
    height: width * 0.48,
    borderRadius: width * 0.24,
  },
  verseSelector: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#CCC",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
    backgroundColor: "#FFF",
    elevation: 2,
  },
  verseButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: "center",
  },
  selectedVerseButton: {
    backgroundColor: "#FF8C00",
  },
  verseText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
  textContent: {
    alignItems: "center",
    marginVertical: height * 0.03,
    paddingHorizontal: width * 0.02,
  },
  primaryText: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  secondaryText: {
    fontSize: width * 0.05,
    color: "#555",
    textAlign: "center",
    marginTop: 5,
  },
  genderSelector: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: height * 0.03,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    elevation: 2,
  },
  selectedGenderButton: {
    backgroundColor: "#FF6E30",
    borderColor: "#FF6E30",
  },
  genderText: {
    color: "#555",
    fontSize: width * 0.04,
  },
  selectedGenderText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  audioSection: {
    alignItems: "center",
    marginVertical: height * 0.02,
    paddingBottom: height * 0.05,
  },
  slider: {
    width: "100%",
    height: 40,
    marginVertical: height * 0.02,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: width * 0.04,
    color: "#555",
  },
  mediaControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginVertical: height * 0.03,
  },
});