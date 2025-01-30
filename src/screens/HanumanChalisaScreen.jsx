import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
// import Video from "react-native-video";
import { Video } from "expo-av";

const HanumanChalisaScreen = () => {
  const [selectedVoice, setSelectedVoice] = useState("Male");
  const [playingAudio, setPlayingAudio] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Agam - Epic Hanuman Chalisa on Raghu Composition",
      views: "125,908",
      likes: "47,987",
      uri: "https://path-to-your-video.mp4", // Replace with a valid video URL
      thumbnail: "https://path-to-thumbnail.jpg", // Replace with a valid image URL
    },
    // Add more videos as needed
  ];

  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice);
  };

  const toggleAudio = () => {
    setPlayingAudio(!playingAudio);
  };

  const handleVideoComments = (id) => {
    console.log(`Opening comments for video ID: ${id}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Dhiraj! Good Morning!</Text>
      </View>

      {/* Audio Section */}
      <View style={styles.audioContainer}>
        <Image
          source={{ uri: "https://path-to-hanuman-image.jpg" }} // Replace with a valid image URL
          style={styles.audioImage}
        />
        <View style={styles.audioControls}>
          <Text style={styles.chant}>श्रीगुरु चरण सरोज रज...</Text>
          <View style={styles.voiceOptions}>
            <TouchableOpacity
              style={[
                styles.voiceButton,
                selectedVoice === "Male" && styles.selectedVoice,
              ]}
              onPress={() => handleVoiceSelect("Male")}
            >
              <Text style={styles.voiceText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.voiceButton,
                selectedVoice === "Female" && styles.selectedVoice,
              ]}
              onPress={() => handleVoiceSelect("Female")}
            >
              <Text style={styles.voiceText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.voiceButton,
                selectedVoice === "Child" && styles.selectedVoice,
              ]}
              onPress={() => handleVoiceSelect("Child")}
            >
              <Text style={styles.voiceText}>Child</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleAudio}>
            <Text style={styles.audioToggle}>
              {playingAudio ? "Pause" : "Play"} Audio
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Video Section */}
      <View style={styles.videoContainer}>
        <Text style={styles.sectionTitle}>Videos</Text>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.videoCard}>
              <Video
                source={{ uri: item.uri }}
                style={styles.videoPlayer}
                resizeMode="cover"
                onError={(error) =>
                  console.error(`Video Error for ${item.title}:`, error)
                }
              />
              <Text style={styles.videoTitle}>{item.title}</Text>
              <Text style={styles.videoDetails}>
                {item.views} views | {item.likes} likes
              </Text>
              <TouchableOpacity onPress={() => handleVideoComments(item.id)}>
                <Text style={styles.commentButton}>View Comments</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 20, fontWeight: "bold" },
  audioContainer: { alignItems: "center", marginBottom: 30 },
  audioImage: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  chant: { fontSize: 18, textAlign: "center", marginVertical: 10 },
  voiceOptions: { flexDirection: "row", marginBottom: 20 },
  voiceButton: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#FFA500",
  },
  selectedVoice: { backgroundColor: "#FFA500", borderColor: "#fff" },
  voiceText: { fontSize: 14 },
  audioToggle: { color: "#FFA500", fontWeight: "bold", fontSize: 16 },
  videoContainer: { flex: 1 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  videoCard: { marginBottom: 20 },
  videoPlayer: { width: "100%", height: 200, marginBottom: 10 },
  videoTitle: { fontSize: 16, fontWeight: "bold" },
  videoDetails: { fontSize: 14, color: "#666" },
  commentButton: { color: "#FFA500", marginTop: 10 },
});

export default HanumanChalisaScreen;
