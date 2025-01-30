import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const features = [
    { name: "Bajan", icon: "https://path-to-bajan-icon.png", route: "Bajan" },
    { name: "Japa", icon: "https://path-to-japa-icon.png", route: "Japa" },
    { name: "Mantra", icon: "https://path-to-mantra-icon.png", route: "Mantra" },
    {
      name: "Hanuman Chalisa",
      icon: "https://path-to-hanuman-chalisa-icon.png",
      route: "HanumanChalisa",
    },
    { name: "Story", icon: "https://path-to-story-icon.png", route: "Story" },
    {
      name: "Live Arti",
      icon: "https://path-to-live-arti-icon.png",
      route: "LiveArti",
    },
    { name: "Temples", icon: "https://path-to-temples-icon.png", route: "Temples" },
  ];

  const otherFeatures = [
    {
      name: "Learn Hanuman Chalisa",
      image: "https://path-to-feature1.png",
      route: "LearnHanumanChalisa", // Add route for this feature
    },
    {
      name: "Testimony",
      image: "https://path-to-feature2.png",
      route: "Testimony", // Add route for this feature
    },
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
              <Image source={{ uri: feature.icon }} style={styles.featureIcon} />
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
              onPress={() => navigation.navigate(feature.route)} // Navigate on press
            >
              <Image
                source={{ uri: feature.image }}
                style={styles.otherFeatureImage}
              />
              <Text style={styles.otherFeatureText}>{feature.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
      
    </View>

  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 20, fontWeight: "bold" },
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
  featureIcon: { width: 70, height: 70, borderRadius: 35 },
  featureName: { marginTop: 10, fontSize: 14, textAlign: "center" },
  otherFeaturesTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 20 },
  otherFeatureCard: { marginRight: 20 },
  otherFeatureImage: { width: 150, height: 100, borderRadius: 10 },
  otherFeatureText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default HomeScreen;
