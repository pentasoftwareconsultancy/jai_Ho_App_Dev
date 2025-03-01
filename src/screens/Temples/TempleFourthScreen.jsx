import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

const TempleFourthScreen = ({ route, navigation }) => {
  const { temple, firstImage } = route.params; // Get the temple data and first image from params

  return (
    <SafeAreaView style={styles.safeArea}>
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
          onPress={() => navigation.navigate("Temple5", { temple,firstImage })} // Navigate to TempleFifthScreen
        >
          <Ionicons name="paper-plane" size={20} color="white" />
          <Text style={styles.startText}> Start</Text>
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
  container: { 
    flex: 1, 
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
  imageContainer: { 
    alignItems: "center", 
    marginTop: 10, 
    position: "relative" 
  },
  templeImage: { 
    width: "100%", 
    height: 200, 
    borderRadius: 10 
  },
  locationText: { 
    position: "absolute", 
    top: 15, 
    left: 20, 
    color: "white", 
    fontWeight: "bold", 
    fontSize: 16, 
    backgroundColor: "rgba(0,0,0,0.4)", 
    padding: 5, 
    borderRadius: 5 
  },
  map: { 
    width: "100%", 
    height: 200, 
    marginTop: 15, 
    borderRadius: 10 
  },
  markerContainer: { 
    alignItems: "center" 
  },
  markerText: { 
    fontSize: 12, 
    color: "gray" 
  },
  startButton: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#FFA500", 
    borderRadius: 10, 
    paddingVertical: 12, 
    marginTop: 20, // Add margin to position the button below the MapView
  },
  startText: { 
    fontSize: 16, 
    color: "white", 
    fontWeight: "bold", 
    marginLeft: 10, // Add spacing between icon and text
  },
});

export default TempleFourthScreen;