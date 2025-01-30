import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";

const AudioPlayerScreen = ({ route, navigation }) => {
  const { data } = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"< Back"}</Text>
      </TouchableOpacity>
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Slider
        style={styles.slider}
        value={progress}
        minimumValue={0}
        maximumValue={1}
        onValueChange={setProgress}
        minimumTrackTintColor="#FFA726"
        maximumTrackTintColor="#ddd"
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
          <Text style={styles.controlText}>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  backButtonText: {
    fontSize: 16,
    color: "#FFA726",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  slider: {
    width: "80%",
    marginVertical: 20,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  controlText: {
    fontSize: 16,
    color: "#FFA726",
  },
});

export default AudioPlayerScreen;