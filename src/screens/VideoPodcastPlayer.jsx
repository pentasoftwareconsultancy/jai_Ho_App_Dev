import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Video } from "expo-av";
import { useRoute, useNavigation } from "@react-navigation/native";

// Dummy Related Videos Data
const relatedVideos = [
  {
    id: "1",
    title: "Hanuman's Role in Ramayana",
    author: "Mythology Expert",
    views: "98,456 views",
    image: "https://example.com/podcast2.jpg",
    duration: "45:32",
    videoUri: "https://example.com/video1.mp4", // Ignored in favor of fixed URI
    description: "Discover the pivotal role of Lord Hanuman in the epic Ramayana.",
  },
  {
    id: "2",
    title: "Exploring Famous Hanuman Temples",
    author: "Travel Enthusiast",
    views: "50,123 views",
    image: "https://example.com/podcast4.jpg",
    duration: "38:15",
    videoUri: "https://example.com/video2.mp4", // Ignored in favor of fixed URI
    description: "A journey through famous Hanuman temples across India.",
  },
];

const VideoPodcastPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();

  // Extract podcast data from route params
  const podcast = route.params?.podcast || {};

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to handle navigation to a related video
  const handleRelatedVideoPress = (relatedPodcast) => {
    // Pass the related podcast data but override videoUri in the player
    navigation.push("VideoPodcastPlayer", { podcast: relatedPodcast });
  };

  return (
    <LinearGradient colors={["#FFF3E0", "#FFE0B2"]} style={styles.container}>
      {/* Video Player Section */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          // Always use this fixed URI regardless of podcast.videoUri
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          style={styles.video}
          resizeMode="cover"
          shouldPlay={isPlaying}
          useNativeControls
        />
        <TouchableOpacity onPress={handlePlayPause} style={styles.playButton}>
          <Ionicons
            name={isPlaying ? "pause" : "play"}
            size={40}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      {/* Podcast Details */}
      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.title}>{podcast.title || "Hanuman's Role in Ramayana"}</Text>
        <Text style={styles.author}>
          {podcast.author || "Mythology Expert"} • {podcast.views || "98,456 views"}
        </Text>
        <Text style={styles.duration}>
          Duration: {podcast.duration || "45:32"}
        </Text>
        <Text style={styles.description}>
          {podcast.description ||
            "Discover the pivotal role of Lord Hanuman in the epic Ramayana. Learn about his devotion, strength, and unwavering loyalty to Lord Rama."}
        </Text>

        {/* Related Videos Section */}
        <Text style={styles.relatedTitle}>Related Videos</Text>
        <FlatList
          data={relatedVideos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.relatedVideoCard}
              onPress={() => handleRelatedVideoPress(item)}
            >
              <Image source={{ uri: item.image }} style={styles.relatedImage} />
              <Text style={styles.relatedTitleText} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.relatedDetails}>
                {item.author} • {item.views}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.relatedList}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: "100%",
    height: Dimensions.get("window").height * 0.3,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  playButton: {
    position: "absolute",
    padding: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4A2C00",
    fontFamily: "Georgia",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    color: "#666",
    fontFamily: "Arial",
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    color: "#FF5722",
    fontFamily: "Arial",
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: "#4A2C00",
    fontFamily: "Arial",
    lineHeight: 20,
    marginBottom: 24,
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4A2C00",
    fontFamily: "Georgia",
    marginBottom: 16,
  },
  relatedVideoCard: {
    width: 160,
    marginRight: 16,
  },
  relatedImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  relatedTitleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4A2C00",
    fontFamily: "Georgia",
    lineHeight: 18,
  },
  relatedDetails: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Arial",
  },
  relatedList: {
    paddingBottom: 16,
  },
});

export default VideoPodcastPlayer;