import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

// Import local images
import hanuman1 from '../../assets/images/templeimage.jpg';
import hanuman2 from '../../assets/images/templeimage.jpg';
import hanuman3 from '../../assets/images/templeimage.jpg';
import hanuman4 from '../../assets/images/templeimage.jpg';
import hanuman5 from '../../assets/images/templeimage.jpg';
import profileImage from '../../assets/images/templeimage.jpg';

const BhajanAudioScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Audios");
  const recentlyPlayed = [
    { id: "1", title: "Hanuman Chalisa", image: hanuman1 },
    { id: "2", title: "Lorem ipsum dolor.....", image: hanuman2 },
  ];
  const mostWatched = [
    { id: "1", title: "Hanuman Chalisa", image: hanuman3, liked: true },
    { id: "2", title: "Hanuman Chalisa", image: hanuman4, liked: false },
    { id: "3", title: "Hanuman Chalisa", image: hanuman5, liked: false },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#FF6E30" />
        </TouchableOpacity>
        <View>
          <Text style={styles.greeting}>Hi Dhiraj!</Text>
          <Text style={styles.subtitle}>Good Morning!</Text>
        </View>
        {/* <Image source={profileImage} style={styles.profilePic} /> */}
      </View>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      {/* Category Tabs */}
      <View style={styles.tabs}>
        {["All", "Audios", "Videos"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Recently Played */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>RECENTLY PLAYED</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recentlyPlayed}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recentItem}>
            <Image source={item.image} style={styles.recentImage} />
            <Text style={styles.recentTitle}>{item.title}</Text>
          </View>
        )}
      />
      {/* Most Watched */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>MOST WATCHED</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mostWatched}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={item.image} style={styles.listImage} />
            <View>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listSubtitle}>Lorem ipsum dolor ...</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name={item.liked ? "heart" : "heart-o"} size={20} color={item.liked ? "red" : "black"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0.04 * width, top: 20 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "#888" },
  profilePic: { width: 0.1 * width, height: 0.1 * width, borderRadius: 20 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 0.04 * width,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1 },
  tabs: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  tabButton: { paddingVertical: 8, paddingHorizontal: 0.05 * width, borderWidth: 1, borderColor: "#888", borderRadius: 20, marginHorizontal: 6 },
  activeTab: { backgroundColor: "#FFA500", borderColor: "#FFA500" },
  tabText: { color: "#888", fontWeight: "bold" },
  activeTabText: { color: "white" },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold" },
  seeAll: { color: "#FFA500", fontWeight: "bold" },
  recentItem: { marginRight: 16, alignItems: "center" },
  recentImage: { width: 0.25 * width, height: 0.25 * width, borderRadius: 10 },
  recentTitle: { fontSize: 14, marginTop: 5, fontWeight: "bold" },
  listItem: { flexDirection: "row", alignItems: "center", padding: 12, backgroundColor: "white", marginVertical: 6, borderRadius: 10, marginHorizontal: 16 },
  listImage: { width: 50, height: 50, borderRadius: 10, marginRight: 12 },
  listTitle: { fontWeight: "bold", fontSize: 14 },
  listSubtitle: { color: "#666" },
});

export default BhajanAudioScreen;
