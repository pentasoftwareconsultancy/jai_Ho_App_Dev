import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

const MusicPlayerScreen = ({ route }) => {
  const { songId } = route.params; // Get the songId from the route params
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0.25);
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Top Controls */}
      <View style={styles.topControls}>
        <TouchableOpacity>
          <MaterialIcons name="expand-more" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {/* Album Art */}
      <Image source={{ uri: "https://your-image-url.com/hanuman.png" }} style={styles.albumArt} />
      {/* Song Details */}
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>Rama Rama Ratte</Text>
        <Text style={styles.artist}>Ritesh Mishra</Text>
      </View>
      {/* Connect to Device */}
      <TouchableOpacity style={styles.connectDevice}>
        <Ionicons name="md-tv-outline" size={18} color="black" />
        <Text style={styles.connectText}>Connect to a device</Text>
      </TouchableOpacity>
      {/* Music Progress Bar */}
      <View style={styles.progressContainer}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFA500"
          maximumTrackTintColor="#DDD"
          thumbTintColor="#FFA500"
          value={progress}
          onValueChange={setProgress}
        />
        <View style={styles.progressTimes}>
          <Text style={styles.time}>0:25</Text>
          <Text style={styles.time}>3:15</Text>
        </View>
      </View>
      {/* Playback Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <MaterialIcons name="shuffle" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="skip-previous" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayPause} style={styles.playPause}>
          <FontAwesome name={isPlaying ? "pause" : "play"} size={34} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="skip-next" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="repeat" size={28} color="black" />
        </TouchableOpacity>
      </View>
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="home" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="qrcode" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="cog" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here...
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
  songDetails: {
    alignItems: "center",
    marginTop: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 18,
    color: "#666",
    marginTop: 4,
  },
  connectDevice: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  connectText: {
    fontSize: 16,
    color: "#007AFF",
    marginLeft: 10,
  },
  progressContainer: {
    width: "90%",
    marginTop: 20,
  },
  progressTimes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  playPause: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 50,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    marginTop: 20,
  },
});

export default MusicPlayerScreen;