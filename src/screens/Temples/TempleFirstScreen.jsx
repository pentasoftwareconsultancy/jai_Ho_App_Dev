import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const templeData = [
  {
    id: "1",
    name: "Hanuman Mandir in Pune",
    image: require("../../../assets/images/dagdusheth.jpg"),
  },
  {
    id: "2",
    name: "Hanuman Mandir in Mumbai",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "3",
    name: "Hanuman Mandir in Bangalore",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "4",
    name: "Hanuman Mandir in Delhi",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "5",
    name: "Hanuman Mandir in Kolkata",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "6",
    name: "Hanuman Mandir in Chennai",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "7",
    name: "Hanuman Mandir in Hyderabad",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "8",
    name: "Hanuman Mandir in Ahmedabad",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "9",
    name: "Hanuman Mandir in Jaipur",
    image: require("../../../assets/images/hanuman.jpg"),
  },
  {
    id: "10",
    name: "Hanuman Mandir in Lucknow",
    image: require("../../../assets/images/hanuman.jpg"),
  },
];

const TempleFirstScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const filteredTemples = templeData.filter((temple) =>
    temple.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Good Morning!</Text>
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
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Temple2", { temple: item })}
          >
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
          </TouchableOpacity>
        )}
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
});

export default TempleFirstScreen;
