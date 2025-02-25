import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const TempleSecondScreen = ({ route, navigation }) => {
  const { temple } = route.params;
  const [searchText, setSearchText] = useState("");

  const templeData = [
    {
      id: "1",
      name: "Premal Hanuman Temple",
      location: "Pune",
      rating: 4.5,
      image: require("../../../assets/images/hanuman.jpg"),
    },
    {
      id: "2",
      name: "Shree Ram Temple",
      location: "Mumbai",
      rating: 4.7,
      image: require("../../../assets/images/hanuman.jpg"),
    },
    {
      id: "3",
      name: "Shankar Temple",
      location: "Delhi",
      rating: 4.6,
      image: require("../../../assets/images/hanuman.jpg"),
    },
    {
      id: "4",
      name: "Siddhivinayak Temple",
      location: "Mumbai",
      rating: 4.8,
      image: require("../../../assets/images/hanuman.jpg"),
    },
  ];

  const filteredTemples = templeData.filter((temple) =>
    temple.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderTempleCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate("Temple3", { temple: item })} // Pass the entire temple object
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardLocation}>{item.location}</Text>
        <Text style={styles.cardRating}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{temple.name}</Text>
        <TouchableOpacity>
          <FontAwesome name="user-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      {/* Temples Grid */}
      <FlatList
        data={filteredTemples}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={renderTempleCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", paddingTop: 40 },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "#FFA500",
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "white" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 15,
    elevation: 2,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, height: 40, fontSize: 16, color: "#333" },
  row: { flex: 1, justifyContent: "space-between", marginBottom: 10 },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    padding: 10,
  },
  cardImage: { width: "100%", height: 150, borderRadius: 10 },
  cardTitle: { fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 5 },
  cardLocation: { fontSize: 12, color: "#777", textAlign: "center" },
  cardRating: { fontSize: 12, color: "#888", textAlign: "center" },
});

export default TempleSecondScreen;