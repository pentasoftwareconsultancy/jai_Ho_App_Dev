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
import bajanIcon from "../../assets/images/HanumanChalisaIcon.png"
import japaIcon from "../../assets/images/HanumanChalisaIcon.png"
import mantraIcon from "../../assets/images/HanumanChalisaIcon.png"
import hanumanChalisaIcon from "../../assets/images/HanumanChalisaIcon.png"
import storyIcon from "../../assets/images/HanumanChalisaIcon.png"
import liveArtiIcon from "../../assets/images/HanumanChalisaIcon.png"
import templesIcon from "../../assets/images/HanumanChalisaIcon.png"

import learnHanumanChalisaImage from "../../assets/images/HanumanChalisaIcon.png"
import testimonyImage from "../../assets/images/HanumanChalisaIcon.png"

const HomeScreen = ({ navigation }) => {
  const features = [
    { name: "Bajan", icon: bajanIcon, route: "Bajan" },
    { name: "Japa", icon: japaIcon, route: "Japa" },
    { name: "Mantra", icon: mantraIcon, route: "Mantra" },
    { name: "Hanuman Chalisa", icon: hanumanChalisaIcon, route: "HanumanChalisa" },
    { name: "Story", icon: storyIcon, route: "Story" },
    { name: "Live Arti", icon: liveArtiIcon, route: "LiveArti" },
    { name: "Temples", icon: templesIcon, route: "Temples" },
  ];

  const otherFeatures = [
    { name: "Learn Hanuman Chalisa", image: learnHanumanChalisaImage, route: "LearnHanumanChalisa" },
    { name: "Testimony", image: testimonyImage, route: "Testimony" },
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
          {features.map((feature, index) => (
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
    padding: 20
  },
  header: {
    marginBottom: 20
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold"
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  featureIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 0.2
  },
  featureName: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center"
  },
  otherFeaturesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20
  },
  otherFeatureCard: {
    marginRight: 20,
    

  },
  otherFeatureImage: {
    width: 260,
    height: 230,
    borderRadius: 5,
    borderWidth: 0.5
    
  },
  otherFeatureText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default HomeScreen;
