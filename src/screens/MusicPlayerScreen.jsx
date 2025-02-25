import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const MusicPlayerScreen = ({ route }) => {
  const { songId } = route.params; // Get the songId from the route params
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sound, setSound] = useState(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    loadAudio();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audios/hanuman_chalisa.mp3"), 
      { shouldPlay: false }
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        setProgress(status.positionMillis / status.durationMillis);
      }
    });
  };

  const togglePlayPause = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = async (value) => {
    if (sound) {
      const newPosition = value * duration;
      await sound.setPositionAsync(newPosition);
      setPosition(newPosition);
      setProgress(value);
    }
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
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
      <Image source={require("../../assets/images/hanuman.jpg")} style={styles.albumArt} />

      {/* Song Details */}
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>Rama Rama Ratte</Text>
        <Text style={styles.artist}>Ritesh Mishra</Text>
      </View>

      {/* Connect to Device */}
      <TouchableOpacity style={styles.connectDevice}>
        <Ionicons name="tv-outline" size={18} color="black" />
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
          onValueChange={handleSliderChange}
        />
        <View style={styles.progressTimes}>
          <Text style={styles.time}>{formatTime(position)}</Text>
          <Text style={styles.time}>{formatTime(duration)}</Text>
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
          <FontAwesome name={isPlaying ? "pause" : "play"} size={34} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="skip-next" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="repeat" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  topControls: { 
    flexDirection: "row",
    // top: -50,
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  albumArt: {
    width: 350,
    height: 400,
    borderRadius: 10,
    marginTop: 20,
    borderWidth:1,
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
    // backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 50,
  },
});

export default MusicPlayerScreen;
