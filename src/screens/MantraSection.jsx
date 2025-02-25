import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const mantraData = [
  { id: '1', title: 'Hanuman Chalisa', description: 'Lorem ipsum dolor...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '2', title: 'Morning Bhajans', description: 'Start your day with devotional bhajans...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '3', title: 'Aarti of Lord Ram', description: 'Aarti description here...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '4', title: 'Bhajan Collection', description: 'Various devotional bhajans...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '5', title: 'Shiva Stotra', description: 'Praise and prayer to Lord Shiva...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '6', title: 'Morning Mantras', description: 'Start your day with positive mantras...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '7', title: 'Krishna Bhajans', description: 'Melodious Krishna bhajans...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '8', title: 'Durga Stuti', description: 'Devotional chant for Goddess Durga...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '9', title: 'Ganesh Vandana', description: 'Prayer to Lord Ganesha...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '10', title: 'Divine Video', description: 'A divine video description...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '11', title: 'Temple Tour', description: 'A virtual tour of the temple...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '12', title: 'Yoga for Beginners', description: 'A beginner-friendly yoga video...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '13', title: 'Mahabharat Stories', description: 'Ancient stories from Mahabharata...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '14', title: 'Ramayan Katha', description: 'A deep dive into Ramayana stories...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '15', title: 'Meditation Guide', description: 'Step-by-step guide to meditation...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '16', title: 'Shiv Tandav', description: 'Powerful Shiv Tandav Stotra...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '17', title: 'Festivals of India', description: 'Explore various Hindu festivals...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '18', title: 'Spiritual Discourse', description: 'A discourse on spirituality...', type: 'video', image: require('../../assets/images/templeimage.jpg') }
];


export default function MantraSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const navigation = useNavigation();

  const handleTabChange = (tab) => setActiveTab(tab);

  const filterData = (data) => {
    if (activeTab === "Audios") return data.filter((item) => item.type === "audio");
    if (activeTab === "Videos") return data.filter((item) => item.type === "video");
    return data;
  };

  const filterRecentlyPlayed = () => {
    if (activeTab === "Audios") return recentlyPlayed.filter((item) => item.type === "audio");
    if (activeTab === "Videos") return recentlyPlayed.filter((item) => item.type === "video");
    return recentlyPlayed;
  };

  const handleCardPress = (item) => {
    setRecentlyPlayed((prev) => [item, ...prev.filter((p) => p.id !== item.id)]);
    navigation.navigate("MediaPlayer", { media: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FF8500" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Divine Mantras</Text>
      </View>

      <View style={styles.tabContainer}>
        {["All", "Audios", "Videos"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => handleTabChange(tab)}
          >
            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {filterRecentlyPlayed().length > 0 && (
        <View>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Recently Played</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filterRecentlyPlayed()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCardPress(item)}>
                <View style={styles.card}>
                  <Image source={item.image} style={styles.cardImage} />
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.sectionTitle}>{activeTab === "Audios" ? "Audios" : activeTab === "Videos" ? "Videos" : "Most Watched"}</Text>
      </View>
      <FlatList
        data={filterData(mantraData)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <View style={styles.mostWatchedItem}>
              <Image source={item.image} style={styles.mostWatchedImage} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
              <Ionicons name="heart-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF3E3", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: "bold", marginLeft: 20, color: "#FF8500" },
  tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  tab: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: "#EAEAEA" },
  activeTab: { backgroundColor: "#FF8500" },
  tabText: { color: "#000", fontWeight: "bold" },
  activeTabText: { color: "#FFF", fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#FF8500" },
  seeAll: { fontSize: 14, color: "#FF8500" },
  card: { marginRight: 20, width: 140, backgroundColor: "#FFF", borderRadius: 10, padding: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 2, elevation: 2 },
  cardImage: { width: 120, height: 120, borderRadius: 10, marginBottom: 5 },
  cardTitle: { fontSize: 14, fontWeight: "bold", color: "#444" },
  cardDescription: { fontSize: 12, color: "#666" },
  mostWatchedItem: { flexDirection: "row", alignItems: "center", marginBottom: 10, backgroundColor: "#FFF", borderRadius: 10, padding: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  mostWatchedImage: { width: 70, height: 70, borderRadius: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});