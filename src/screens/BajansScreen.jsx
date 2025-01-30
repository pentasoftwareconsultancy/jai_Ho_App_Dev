import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const mockData = [
  {
    id: "1",
    type: "audio",
    title: "Hanuman Chalisa",
    description: "Lorem ipsum dolor...",
    views: "125,908",
    likes: "47,987",
    image: "https://linktohanumanchalisaimage.com/image1.jpg",
  },
  {
    id: "2",
    type: "video",
    title: "Hanuman Chalisa Video",
    description: "Lorem ipsum dolor...",
    views: "200,120",
    likes: "89,123",
    image: "https://linktohanumanchalisaimage.com/image2.jpg",
  },
  {
    id: "3",
    type: "audio",
    title: "Bajrang Baan",
    description: "Lorem ipsum dolor...",
    views: "90,245",
    likes: "23,981",
    image: "https://linktohanumanchalisaimage.com/image3.jpg",
  },
];

const BajansScreen = () => {
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all" ? mockData : mockData.filter((item) => item.type === filter);

  const renderBajanItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.metadata}>
          {item.views} views · {item.likes} likes
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#aaa"
        />
        <View style={styles.filterTabs}>
          <TouchableOpacity
            style={[styles.tab, filter === "all" && styles.activeTab]}
            onPress={() => setFilter("all")}
          >
            <Text style={[styles.tabText, filter === "all" && styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, filter === "audio" && styles.activeTab]}
            onPress={() => setFilter("audio")}
          >
            <Text style={[styles.tabText, filter === "audio" && styles.activeTabText]}>Audios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, filter === "video" && styles.activeTab]}
            onPress={() => setFilter("video")}
          >
            <Text style={[styles.tabText, filter === "video" && styles.activeTabText]}>Videos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bajan List */}
      <FlatList
        data={filteredData}
        renderItem={renderBajanItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
    marginBottom: 8,
  },
  filterTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#f5f5f5",
  },
  activeTab: {
    backgroundColor: "#FFA500",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardContent: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginVertical: 4,
  },
  metadata: {
    fontSize: 10,
    color: "#aaa",
  },
});

export default BajansScreen;