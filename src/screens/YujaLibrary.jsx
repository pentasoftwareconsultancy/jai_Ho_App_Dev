import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const favoriteVideos = [
  {
    id: "1",
    title: "Rocks Velkeijnen",
    description: "Cinemas is the ultimate experience to see new movies in Gold Class.",
    date: "10 Feb",
    rating: 5,
    thumbnail: "https://linktoimage1.com", // Replace with your image URL
  },
];

const favoriteMandirs = [
  {
    id: "1",
    title: "Shri Hanuman and Shani Temple",
    description: "Lorem ipsum dolor sit amet.",
    rating: 4.5,
    image: "https://linktoimage2.com", // Replace with your image URL
  },
];

const favoriteImages = [
  { id: "1", image: "https://linktoimage3.com" },
  { id: "2", image: "https://linktoimage4.com" },
];

export default function YujaLibrary() {
  const renderVideo = ({ item }) => (
    <TouchableOpacity style={styles.videoCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.videoThumbnail} />
      <View style={styles.videoContent}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.videoDate}>{item.date}</Text>
        <View style={styles.videoRating}>
          {Array.from({ length: item.rating }).map((_, index) => (
            <AntDesign key={index} name="star" size={16} color="gold" />
          ))}
        </View>
        <Text style={styles.videoDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderMandir = ({ item }) => (
    <TouchableOpacity style={styles.mandirCard}>
      <Image source={{ uri: item.image }} style={styles.mandirImage} />
      <View style={styles.mandirContent}>
        <Text style={styles.mandirTitle}>{item.title}</Text>
        <Text style={styles.mandirRating}>⭐ {item.rating}</Text>
        <Text style={styles.mandirDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.mandirButton}>
          <Text style={styles.mandirButtonText}>View</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderImage = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.favoriteImage} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Favorite Videos</Text>
      <FlatList
        data={favoriteVideos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.header}>All Favorite Mandirs</Text>
      <FlatList
        data={favoriteMandirs}
        renderItem={renderMandir}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.header}>All Favorite Images</Text>
      <FlatList
        data={favoriteImages}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  videoCard: {
    flexDirection: "row",
    marginRight: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  videoThumbnail: {
    width: 120,
    height: 80,
  },
  videoContent: {
    padding: 10,
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  videoDate: {
    fontSize: 14,
    color: "#666",
  },
  videoRating: {
    flexDirection: "row",
    marginVertical: 5,
  },
  videoDescription: {
    fontSize: 14,
    color: "#444",
  },
  mandirCard: {
    flexDirection: "row",
    marginRight: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  mandirImage: {
    width: 100,
    height: 100,
  },
  mandirContent: {
    padding: 10,
    flex: 1,
  },
  mandirTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mandirRating: {
    fontSize: 14,
    color: "gold",
  },
  mandirDescription: {
    fontSize: 14,
    color: "#666",
  },
  mandirButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f05a28",
    borderRadius: 5,
  },
  mandirButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  favoriteImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
});