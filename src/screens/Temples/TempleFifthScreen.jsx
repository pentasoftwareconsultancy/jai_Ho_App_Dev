import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TempleFifthScreen = ({ route, navigation }) => {
  const { temple,firstImage } = route.params; // Get the temple data from params

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      
      {/* Temple Image */}
      <View style={styles.imageContainer}>
        <Image
          source={firstImage} // Use the temple image passed from the previous screen
          style={styles.templeImage}
        />
        <Text style={styles.locationText}>{temple.location}</Text>
      </View>
      
      {/* Temple Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.templeTitle}>{temple.name}</Text>
        <Text style={styles.dateText}>November 10, 2023 - Wednesday</Text>
        
        {/* Time Section */}
        <Text style={styles.label}>Time</Text>
        <Text style={styles.timeText}>14:00</Text>
        
        {/* Flight Details */}
        <View style={styles.flightContainer}>
          <Text style={styles.flightTitle}>Flight on: November 10, 2025</Text>
          <View style={styles.flightRow}>
            <Text style={styles.flightTime}>14:00</Text>
            <Ionicons name="airplane" size={24} color="#007BFF" />
            <Text style={styles.flightTime}>19:00</Text>
          </View>
          <Text style={styles.flightRoute}>Mumbai → Pune</Text>
        </View>
        
        <View style={styles.flightContainer}>
          <Text style={styles.flightTitle}>Return Flight on: November 13, 2025</Text>
          <View style={styles.flightRow}>
            <Text style={styles.flightTime}>14:00</Text>
            <Ionicons name="airplane" size={24} color="#007BFF" />
            <Text style={styles.flightTime}>19:00</Text>
          </View>
          <Text style={styles.flightRoute}>Delhi → Pune</Text>
        </View>
      </View>
      
      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  header: { flexDirection: "row", alignItems: "center", padding: 15 },
  imageContainer: { alignItems: "center", position: "relative" },
  templeImage: { width: "90%", height: 200, borderRadius: 10 },
  locationText: { position: "absolute", top: 15, left: 20, color: "white", fontWeight: "bold", fontSize: 16, backgroundColor: "rgba(0,0,0,0.4)", padding: 5, borderRadius: 5 },
  detailsContainer: { paddingHorizontal: 20, marginTop: 10 },
  templeTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  dateText: { fontSize: 14, color: "gray", marginVertical: 5 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  timeText: { fontSize: 16, color: "#007BFF" },
  flightContainer: { backgroundColor: "#FFF", padding: 15, borderRadius: 10, marginTop: 15, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  flightTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  flightRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  flightTime: { fontSize: 16, fontWeight: "bold", color: "#007BFF" },
  flightRoute: { fontSize: 14, color: "gray", textAlign: "center", marginTop: 5 },
  bookButton: { backgroundColor: "#FF5733", paddingVertical: 15, alignItems: "center", borderRadius: 10, marginHorizontal: 20, marginTop: 20 },
  bookButtonText: { fontSize: 18, color: "white", fontWeight: "bold" },
});

export default TempleFifthScreen;