import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HanumanChalisaVideoScreen = () => {

  const navigation = useNavigation();
  const [selectedVersion, setSelectedVersion] = useState("Male");
  const [paused, setPaused] = useState(false);

  const comments = [
    { id: "1", name: "Ram Sharma", comment: "Amazing rendition of Hanuman Chalisa!" },
    { id: "2", name: "Ram Sharma", comment: "Very peaceful and divine experience." },
    { id: "3", name: "Sita Devi", comment: "This version is so soothing to listen to." },
    { id: "4", name: "Vishal Singh", comment: "Love the voice! Very calming." },
    { id: "5", name: "Ankit Sinha", comment: "Incredible! It brings peace to the mind." },
    { id: "6", name: "Ravi Gopane", comment: "The best rendition I’ve ever heard!" },
    { id: "7", name: "Priya Yadav", comment: "I can feel the divine presence through this!" },
    { id: "8", name: "Krishna Kumar", comment: "So beautiful and energizing!" },
    { id: "9", name: "Manoj Patel", comment: "The music blends perfectly with the chant." },
    { id: "10", name: "Neha Verma", comment: "My go-to version of Hanuman Chalisa!" }
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#FF6E30" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Videos</Text>

        {/* Toggle Button for Audios */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.versionButton, selectedVersion === "Audios" && styles.activeButton]}
            onPress={() => navigation.navigate("HanumanChalisa")}
          >
            <Text style={[styles.versionText, selectedVersion === "Audios" && styles.activeText]}>
              Audios
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Play/Pause Button */}
      <TouchableOpacity style={styles.playPauseButton} onPress={() => setPaused(!paused)}>
        <FontAwesome name={paused ? "play" : "pause"} size={24} color="white" />
      </TouchableOpacity>

      {/* Video Title and Details */}
      <Text style={styles.videoTitle}>Agam - Epic Hanuman Chalisa on Raghunandana Composition</Text>
      <View style={styles.videoStats}>
        <View style={styles.stats}>
          <FontAwesome name="eye" size={16} color="#888" />
          <Text style={styles.statsText}>125,908 views</Text>
        </View>
        <View style={styles.stats}>
          <FontAwesome name="heart" size={16} color="#888" />
          <Text style={styles.statsText}>47,987 likes</Text>
        </View>
      </View>

      {/* Selection Buttons for Male, Female, and Child */}
      <View style={styles.buttonGroup}>
        {["Male", "Female", "Child"].map((version) => (
          <TouchableOpacity
            key={version}
            style={[styles.versionButton, selectedVersion === version && styles.activeButton]}
            onPress={() => setSelectedVersion(version)}
          >
            <Text style={[styles.versionText, selectedVersion === version && styles.activeText]}>
              {version}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.commentCard}
            onPress={() => {
              // Handle the press event here, such as navigating or any other action
              console.log(`Comment by ${item.name} clicked`);
            }}
          >
            <Image source={require('../../assets/images/user.png')} style={styles.avatar} />
            <View style={styles.commentTextContainer}>
              <Text style={styles.commentUser}>{item.name}</Text>
              <Text style={styles.commentText}>{item.comment}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", marginTop: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", padding: 16, alignItems: "center", top: 10 },
  headerTitle: { fontSize: 20, fontWeight: "bold" },
  video: { width: "100%", height: height * 0.3, borderRadius: 10 },
  playPauseButton: {
    position: "absolute",
    top: height * 0.15,
    left: width * 0.45,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 50,
  },
  videoTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10, paddingHorizontal: 16 },
  videoStats: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, marginBottom: 100 },
  stats: { flexDirection: "row", alignItems: "center" },
  statsText: { marginLeft: 6, color: "#666" },
  buttonGroup: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  versionButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 20,
    marginHorizontal: 6
  },
  activeButton: { backgroundColor: "#FFA500", borderColor: "#FFA500" },
  versionText: { color: "#888", fontWeight: "bold" },
  activeText: { color: "white" },
  commentCard: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 6,
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3
  },
  avatar: { width: 70, height: 70, borderRadius: 50, marginRight: 20 },
  commentTextContainer: { flex: 1 },
  commentUser: { fontWeight: "bold", fontSize: 14, color: "#333" },
  commentText: { color: "#666", fontSize: 12, marginTop: 4 }
});

export default HanumanChalisaVideoScreen;
