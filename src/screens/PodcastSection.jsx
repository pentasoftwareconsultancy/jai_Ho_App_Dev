import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const podcasts = [
  {
    id: "1",
    title: "Prepare for your first skateboard jump",
    author: "Jordan Wise",
    views: "125,908 views",
    daysAgo: "2 days ago",
    image: "https://example.com/podcast1.jpg", // Replace with your image URLs
  },
  {
    id: "2",
    title: "Basic how to ride your skateboard comfortably",
    author: "Jordan Wise",
    views: "125,908 views",
    daysAgo: "2 days ago",
    image: "https://example.com/podcast2.jpg",
  },
  // Add more items as needed
];

const PodcastSection = () => {
  const renderPodcastItem = ({ item }) => (
    <View style={styles.podcastCard}>
      <Image source={{ uri: item.image }} style={styles.podcastImage} />
      <View style={styles.podcastInfo}>
        <Text style={styles.podcastTitle}>{item.title}</Text>
        <Text style={styles.podcastDetails}>
          {item.author} • {item.views} • {item.daysAgo}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Podcast</Text>
      <FlatList
        data={podcasts}
        renderItem={renderPodcastItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  podcastCard: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  podcastImage: {
    width: 100,
    height: 100,
  },
  podcastInfo: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  podcastTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  podcastDetails: {
    fontSize: 12,
    color: "#666",
  },
});

export default PodcastSection;