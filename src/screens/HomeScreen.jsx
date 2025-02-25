import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Import local images
import bajanIcon from "../../assets/images/HanumanChalisaIcon.png";
import japaIcon from "../../assets/images/HanumanChalisaIcon.png";
import mantraIcon from "../../assets/images/HanumanChalisaIcon.png";
import hanumanChalisaIcon from "../../assets/images/HanumanChalisaIcon.png";
import storyIcon from "../../assets/images/HanumanChalisaIcon.png";
import liveArtiIcon from "../../assets/images/HanumanChalisaIcon.png";
import templesIcon from "../../assets/images/HanumanChalisaIcon.png";

import learnHanumanChalisaImage from "../../assets/images/HanumanChalisaIcon.png";
import testimonyImage from "../../assets/images/HanumanChalisaIcon.png";

const HomeScreen = ({ navigation }) => {
  const features = [
    { name: "Bajan", icon: bajanIcon, route: "Bajan" },
    { name: "Japa", icon: japaIcon, route: "Japa" },
    { name: "Mantra", icon: mantraIcon, route: "Mantra" },
    { name: "Hanuman Chalisa", icon: hanumanChalisaIcon, route: "HanumanChalisa" },
    { name: "Story", icon: storyIcon, route: "Story" },
    { name: "Live Arti", icon: liveArtiIcon, route: "LiveArti" },
    { name: "Temples", icon: templesIcon, route: "Temple1" },
  ];

  const otherFeatures = [
    { name: "Learn Hanuman Chalisa", image: learnHanumanChalisaImage, route: "LearnHanumanChalisa" },
    { name: "Testimony", image: testimonyImage, route: "Testimony" },
    { name: "Music", image: learnHanumanChalisaImage, route: "Music" },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Scrollable Content */}
      <ScrollView style={styles.container}>
        {/* Greeting Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi Dhiraj! Good Morning!</Text>
        </View>

        {/* Main Features */}
        <View style={styles.featuresGrid}>
          {/* Left Vertical Line */}
          <View style={styles.verticalLine}>
            {features.slice(0, 3).map((feature, index) => (
              <TouchableOpacity
                key={index}
                style={styles.featureCard}
                onPress={() => navigation.navigate(feature.route)}
              >
                <Image source={feature.icon} style={styles.featureIcon} />
                <Text style={styles.featureName}>{feature.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Middle Horizontal Line */}
          <View style={styles.horizontalLine}>
            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigation.navigate(features[3].route)}
            >
              <Image source={features[3].icon} style={styles.featureIcon} />
              <Text style={styles.featureName}>{features[3].name}</Text>
            </TouchableOpacity>
          </View>

          {/* Right Vertical Line */}
          <View style={styles.verticalLine}>
            {features.slice(4, 7).map((feature, index) => (
              <TouchableOpacity
                key={index}
                style={styles.featureCard}
                onPress={() => navigation.navigate(feature.route)}
              >
                <Image source={feature.icon} style={styles.featureIcon} />
                <Text style={styles.featureName}>{feature.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Other Features */}
        <Text style={styles.otherFeaturesTitle}>Other Features</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {otherFeatures.map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={styles.otherFeatureCard}
              onPress={() => navigation.navigate(feature.route)}
            >
              <Image source={feature.image} style={styles.otherFeatureImage} />
              <Text style={styles.otherFeatureText}>{feature.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  featuresGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalLine: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30%",
  },
  horizontalLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  featureCard: {
    alignItems: "center",
    marginBottom: 30,
  },
  featureIcon: {
    width: 80, // Increased size
    height: 80,
    borderRadius: 40, // Ensure a perfect circle
    borderWidth: 2, // Thicker border
    borderColor: "#FFD700", // A premium golden color
    backgroundColor: "white", // To keep it clean
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // For Android shadow
  },
  
  featureName: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  otherFeaturesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
  },
  otherFeatureCard: {
    marginRight: 20,
  },
  otherFeatureImage: {
    width: 260,
    height: 230,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  otherFeatureText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default HomeScreen;