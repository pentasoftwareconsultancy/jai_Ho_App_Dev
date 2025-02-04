import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TempleDetailsScreen = ({ route, navigation }) => {
  const { temple } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{"< Back"}</Text>
      </TouchableOpacity>
      <Image source={{ uri: temple.image }} style={styles.templeImage} />
      <Text style={styles.templeName}>{temple.name}</Text>
      <Text style={styles.templeLocation}>{temple.location}</Text>
      <Text style={styles.templeRating}>⭐ {tHoeemple.rating}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam.
      </Text>
      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreButtonText}>Explore</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: "#FFA726",
  },
  templeImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  templeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  templeLocation: {
    fontSize: 16,
    color: "#777",
  },
  templeRating: {
    fontSize: 16,
    color: "#FFA726",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginVertical: 8,
  },
  exploreButton: {
    marginTop: 16,
    height: 50,
    backgroundColor: "#FFA726",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  exploreButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TempleDetailsScreen;