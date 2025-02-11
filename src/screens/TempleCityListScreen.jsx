import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const cityImages = {
  "Pune, Maharashtra": require("../../assets/images/dagdusheth.jpg"),  // Dagdusheth Ganpati Temple
  "Mumbai, Maharashtra": require("../../assets/images/siddhivinayak.jpg"),  // Siddhivinayak Temple
  "Shirdi, Maharashtra": require("../../assets/images/shirdi.jpg"),  // Shirdi Sai Baba Temple
  "Nashik, Maharashtra": require("../../assets/images/trimbakeshwar.jpg"),  // Trimbakeshwar Temple
  "Aurangabad, Maharashtra": require("../../assets/images/grishneshwar.jpg"),  // Grishneshwar Temple
  "Pandharpur, Maharashtra": require("../../assets/images/vitthal.jpg"),  // Vitthal Rukmini Temple
  "Tuljapur, Maharashtra": require("../../assets/images/tuljapur.jpg"),  // Tuljapur Bhavani Temple
  "Morgaon, Maharashtra": require("../../assets/images/morgaon.jpg")  // Morgaon Ganpati Temple
};

const cities = [
  { id: "1", name: "Pune, Maharashtra" },
  { id: "2", name: "Mumbai, Maharashtra" },
  { id: "3", name: "Shirdi, Maharashtra" },
  { id: "4", name: "Nashik, Maharashtra" },
  { id: "5", name: "Aurangabad, Maharashtra" },
  { id: "6", name: "Pandharpur, Maharashtra" },
  { id: "7", name: "Tuljapur, Maharashtra" },
  { id: "8", name: "Morgaon, Maharashtra" },
  { id: "9", name: "Kolhapur, Maharashtra" },
  { id: "10", name: "Alandi, Maharashtra" },
  { id: "11", name: "Solapur, Maharashtra" },
  { id: "12", name: "Nanded, Maharashtra" },
  { id: "13", name: "Shegaon, Maharashtra" },
  { id: "14", name: "Dehu, Maharashtra" },
  { id: "15", name: "Jejuri, Maharashtra" },
  { id: "16", name: "Mahabaleshwar, Maharashtra" },
];

const TempleCityListScreen = ({ navigation }) => {
  const renderCity = ({ item }) => (
    <TouchableOpacity
      style={styles.cityCard}
      onPress={() => navigation.navigate("TempleDetails", { city: item.name })}
    >
      <Image source={cityImages[item.name]} style={styles.cityImage} resizeMode="cover" />
      <Text style={styles.cityName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={renderCity}
        keyExtractor={(item) => item.id}
        numColumns={2}  // This makes the FlatList display 2 columns
        key={2}  // Use number of columns as the key to force re-render
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    padding: 16,
  },
  cityCard: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    margin: 10,  // Adjusted margin to add space between cards
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cityImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cityName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default TempleCityListScreen;
