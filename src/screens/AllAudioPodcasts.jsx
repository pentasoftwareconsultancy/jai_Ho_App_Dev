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
import { useNavigation, useRoute } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

// Dummy Audio Podcast Data (unchanged)
const dummyAudioPodcasts = [
  {
    id: "1",
    title: "Hanuman Chalisa Recitation",
    author: "Spiritual Singer",
    listens: "85,000 listens",
    daysAgo: "5 days ago",
    image: "https://example.com/audio1.jpg",
    duration: "15:45",
  },
  {
    id: "2",
    title: "Hanuman Mantras for Strength",
    author: "Vedic Scholar",
    listens: "62,300 listens",
    daysAgo: "3 days ago",
    image: "https://example.com/audio2.jpg",
    duration: "20:10",
  },
  {
    id: "3",
    title: "Neem Karoli Baba Bhajans",
    author: "Devotional Artist",
    listens: "38,500 listens",
    daysAgo: "3 days ago",
    image: "https://example.com/audio3.jpg",
    duration: "25:30",
  },
  {
    id: "4",
    title: "Morning Motivation Mantras",
    author: "Motivational Speaker",
    listens: "75,000 listens",
    daysAgo: "4 days ago",
    image: "https://example.com/audio4.jpg",
    duration: "12:50",
  },
  {
    id: "5",
    title: "Stories of Hanuman's Valor",
    author: "Mythology Narrator",
    listens: "45,000 listens",
    daysAgo: "6 days ago",
    image: "https://example.com/audio5.jpg",
    duration: "35:20",
  },
  {
    id: "6",
    title: "Neem Karoli Baba's Wisdom",
    author: "Devotee",
    listens: "50,000 listens",
    daysAgo: "4 days ago",
    image: "https://example.com/audio6.jpg",
    duration: "30:00",
  },
  {
    id: "7",
    title: "Overcoming Fear with Affirmations",
    author: "Life Coach",
    listens: "42,000 listens",
    daysAgo: "3 days ago",
    image: "https://example.com/audio7.jpg",
    duration: "22:30",
  },
];

const AllAudioPodcasts = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Extract podcasts from route params (passed from PodcastSection)
  const podcasts = route.params?.podcasts || dummyAudioPodcasts;

  useEffect(() => {
    // Fade-in animation on mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderPodcastItem = ({ item }) => (
    <TouchableOpacity
      style={styles.podcastCard}
      onPress={() => navigation.navigate("AudioPodcastPlayer", { podcast: item })}
    >
      <Animated.View style={[styles.cardContent, { opacity: fadeAnim }]}>
        <Image source={{ uri: item.image }} style={styles.podcastImage} />
        <View style={styles.podcastInfo}>
          <Text style={styles.podcastTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.podcastDetails}>
            {item.author} • {item.duration}
          </Text>
          <Text style={styles.podcastMeta}>{item.listens} • {item.daysAgo}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={podcasts}
        renderItem={renderPodcastItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0", // Subtle saffron-cream for divine feel
  },
  listContainer: {
    padding: 20,
  },
  podcastCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#FFD700", // Golden shadow for spiritual touch
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  podcastImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FFD700", // Gold border for divinity
  },
  podcastInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  podcastTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4A2C00", // Deep brown for grounding
    lineHeight: 24,
  },
  podcastDetails: {
    fontSize: 14,
    color: "#FF5722", // Vibrant saffron-orange for energy
    marginTop: 4,
    fontWeight: "500",
  },
  podcastMeta: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
    opacity: 0.8,
  },
});

export default AllAudioPodcasts;