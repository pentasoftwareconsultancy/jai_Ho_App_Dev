import React, { useState, useCallback, useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRoute } from "@react-navigation/native";

// Dummy Related Videos Data
const relatedVideos = [
  {
    id: "1",
    title: "Hanuman's Role in Ramayana",
    author: "Mythology Expert",
    views: "98K views",
    image: "https://t4.ftcdn.net/jpg/08/06/64/31/360_F_806643198_bYkGQLBf3BS7KGY4cr0WEt9CTN1qS0WQ.jpg",
    duration: "45:32",
    videoId: "jSzV92tg6as",
    description: "Discover the pivotal role of Lord Hanuman in the epic Ramayana."
  },
  {
    id: "2",
    title: "Exploring Famous Hanuman Temples",
    author: "Travel Enthusiast",
    views: "50K views",
    image: "https://images3.alphacoders.com/134/1346432.png",
    duration: "38:15",
    videoId: "tgbNymZ7vqY",
    description: "A journey through famous Hanuman temples across India."
  },
];

const VideoPodcastPlayer = () => {
  const route = useRoute();
  const { podcast } = route.params;

  const [playing, setPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(podcast || relatedVideos[0]);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const timeoutRef = useRef(null);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      alert("Video has finished playing!");
    }
  }, []);

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
    setShowPlayButton(true); // Show play button when user interacts
    resetTimeout();
  };

  const handleRelatedVideoPress = (video) => {
    setCurrentVideo(video);
    setPlaying(true);
    setShowPlayButton(true); // Show play button when video changes
    resetTimeout();
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowPlayButton(false);
    }, 3000); // Hide play button after 3 seconds
  };

  useEffect(() => {
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [playing]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Video Player Section */}
      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={200}
          play={playing}
          videoId={currentVideo.videoId}
          onChangeState={onStateChange}
        />
        {showPlayButton && (
          <TouchableOpacity onPress={togglePlaying} style={styles.playButton}>
            <Icon name={playing ? "pause" : "play-arrow"} size={30} color="#FFF" />
          </TouchableOpacity>
        )}
      </View>

      {/* Video Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{currentVideo.title}</Text>
        <Text style={styles.views}>{currentVideo.views} • 1 day ago</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="thumb-up" size={20} color="#666" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="thumb-down" size={20} color="#666" />
            <Text style={styles.actionText}>Dislike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="share" size={20} color="#666" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="playlist-add" size={20} color="#666" />
            <Text style={styles.actionText}>Save</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{currentVideo.description}</Text>
      </View>

      {/* Related Videos Section */}
      <Text style={styles.relatedTitle}>Related Videos</Text>
      <FlatList
        data={relatedVideos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.relatedVideoCard} onPress={() => handleRelatedVideoPress(item)}>
            <Image source={{ uri: item.image }} style={styles.relatedImage} />
            <Text style={styles.relatedTitleText} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.relatedDetails}>{item.author} • {item.views}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.relatedList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#F5F5F7",
  },
  videoContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -22 }],
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 30,
    padding: 10,
  },
  detailsContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  views: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  channelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  channelImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  channelDetails: {
    flex: 1,
  },
  channelName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  subscribers: {
    fontSize: 14,
    color: "#666",
  },
  subscribeButton: {
    backgroundColor: "#FF0000",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  subscribeButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#1C1C1E",
    lineHeight: 20,
  },
  relatedTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 16,
  },
  relatedVideoCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  relatedImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },
  relatedTitleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    margin: 8,
  },
  relatedDetails: {
    fontSize: 12,
    color: "#666",
    marginHorizontal: 8,
    marginBottom: 8,
  },
  relatedList: {
    paddingBottom: 120,
  },
});

export default VideoPodcastPlayer;