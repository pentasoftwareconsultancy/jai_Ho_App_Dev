import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";

// Dummy Video Podcast Data
const dummyVideoPodcasts = [
  {
    id: "1",
    title: "Hanuman's Role in Ramayana",
    author: "Mythology Expert",
    views: "98,456 views",
    daysAgo: "5 days ago",
    image: "https://example.com/podcast2.jpg",
    duration: "45:32",
  },
  {
    id: "2",
    title: "Exploring Famous Hanuman Temples",
    author: "Travel Enthusiast",
    views: "50,123 views",
    daysAgo: "3 days ago",
    image: "https://example.com/podcast4.jpg",
    duration: "38:15",
  },
  {
    id: "3",
    title: "Neem Karoli Baba's Miracles",
    author: "Devotee",
    views: "25,000 views",
    daysAgo: "3 days ago",
    image: "https://example.com/podcast7.jpg",
    duration: "52:10",
  },
  {
    id: "4",
    title: "How to Stay Motivated",
    author: "Motivational Speaker",
    views: "35,000 views",
    daysAgo: "4 days ago",
    image: "https://example.com/podcast9.jpg",
    duration: "29:45",
  },
  {
    id: "5",
    title: "Journey to Hanuman's Birthplace",
    author: "History Expert",
    views: "65,432 views",
    daysAgo: "6 days ago",
    image: "https://example.com/podcast11.jpg",
    duration: "41:20",
  },
];

const AllVideoPodcasts = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Extract podcasts from route params (passed from PodcastSection)
  const podcasts = route.params?.podcasts || dummyVideoPodcasts;

  useEffect(() => {
    // Fade-in animation on mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderPodcastItem = ({ item }) => (
    <TouchableOpacity
      style={styles.podcastCard}
      onPress={() => navigation.navigate("VideoPodcastPlayer", { podcast: item })}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={{ uri: item.image }} style={styles.podcastImage} />
        <View style={styles.podcastInfo}>
          <Text style={styles.podcastTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.podcastDetails}>
            {item.author} • {item.views} • {item.daysAgo}
          </Text>
          <View style={styles.durationContainer}>
            <Ionicons name="videocam" size={16} color="#FF5722" />
            <Text style={styles.durationText}>{item.duration}</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={["#FFF3E0", "#FFE0B2"]} // Light saffron gradient
      style={styles.container}
    >
      {/* Podcast List */}
      <FlatList
        data={podcasts}
        renderItem={renderPodcastItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  podcastCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  podcastImage: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    borderRadius: 8,
  },
  podcastInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  podcastTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4A2C00", // Deep maroon
    lineHeight: 24,
    fontFamily: "Georgia",
  },
  podcastDetails: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    fontFamily: "Arial",
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  durationText: {
    fontSize: 14,
    color: "#FF5722", // Saffron orange
    marginLeft: 4,
    fontWeight: "600",
    fontFamily: "Arial",
  },
});

export default AllVideoPodcasts;