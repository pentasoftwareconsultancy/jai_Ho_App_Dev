import React from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const temples = [
  {
    id: "1",
    name: "Premal Hanuman Temple",
    location: "Pune",
    rating: 4.5,
    image: "https://example.com/temple1.jpg",
  },
  {
    id: "2",
    name: "Shri Hanuman and Shani Temple",
    location: "Pune",
    rating: 4.5,
    image: "https://example.com/temple2.jpg",
  },
  // Add more temples here
];

const TempleListScreen = ({ navigation }) => {
  const renderTemple = ({ item }) => (
    <TouchableOpacity
      style={styles.templeCard}
      onPress={() => navigation.navigate("TempleDetails", { temple: item })}
    >
      <Image source={{ uri: item.image }} style={styles.templeImage} />
      <View style={styles.templeInfo}>
        <Text style={styles.templeName}>{item.name}</Text>
        <Text style={styles.templeLocation}>{item.location}</Text>
        <Text style={styles.templeRating}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi Dhiraj! Good Morning!</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#999"
      />
      <FlatList
        data={temples}
        renderItem={renderTemple}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  templeCard: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  templeImage: {
    width: 100,
    height: 100,
  },
  templeInfo: {
    flex: 1,
    padding: 8,
    justifyContent: "space-between",
  },
  templeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  templeLocation: {
    fontSize: 14,
    color: "#777",
  },
  templeRating: {
    fontSize: 14,
    color: "#FFA726",
  },
});

export default TempleListScreen;