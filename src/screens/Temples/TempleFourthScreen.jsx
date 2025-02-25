import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

const TempleFourthScreen = ({ route, navigation }) => {
  const { temple, firstImage } = route.params; // Get the temple data and first image from params

  return (
    <View style={styles.container}>
      {/* Temple Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={firstImage} // Use the first image passed from the previous screen
          style={styles.templeImage}
        />
        <Text style={styles.locationText}>{temple.location}</Text>
      </View>
      
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.5204, // Replace with the actual latitude of the temple
          longitude: 73.8567, // Replace with the actual longitude of the temple
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Destination Marker */}
        <Marker coordinate={{ latitude: 18.5204, longitude: 73.8567 }}>
          <View style={styles.markerContainer}>
            <Ionicons name="location" size={24} color="red" />
            <Text style={styles.markerText}>{temple.name}</Text>
          </View>
        </Marker>
      </MapView>
      
      {/* Start Navigation Button */}
      <TouchableOpacity 
        style={styles.startButton} 
        onPress={() => navigation.navigate("Temple5", { temple })} // Navigate to TempleFifthScreen
      >
        <Ionicons name="paper-plane" size={20} color="white" />
        <Text style={styles.startText}> Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  imageContainer: { alignItems: "center", marginTop: 10, position: "relative" },
  templeImage: { width: "90%", height: 400, borderRadius: 10 },
  locationText: { position: "absolute", top: 15, left: 20, color: "white", fontWeight: "bold", fontSize: 16, backgroundColor: "rgba(0,0,0,0.4)", padding: 5, borderRadius: 5 },
  map: { width: "90%", height: 200, alignSelf: "center", marginTop: 15, borderRadius: 10 },
  markerContainer: { alignItems: "center" },
  markerText: { fontSize: 12, color: "gray" },
  startButton: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFA500", 
    borderRadius: 10, 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    position: "absolute", // Position it absolutely
    left: 20, // Align to the left
    bottom: 20, // Adjust the bottom position as needed
  },
  startText: { fontSize: 16, color: "white", fontWeight: "bold" },
});

export default TempleFourthScreen;