import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

// Dummy Podcast Data (kept all data for "See All" functionality)
const podcasts = [
  {
    id: "1",
    title: "Hanuman Chalisa: Meaning and Benefits",
    author: "Spiritual Guru",
    views: "125,908 views",
    daysAgo: "2 days ago",
    type: "audio",
    image: "https://example.com/podcast1.jpg",
    category: "Hanuman",
    duration: "45:32",
    videoUrl: "https://youtu.be/LUx8wlA_dk8?si=et7-dgiVAWXI-APW", // Direct URL
    description: "Discover the pivotal role of Lord Hanuman in the epic Ramayana.",
  },
  {
    id: "2",
    title: "Hanuman's Role in Ramayana",
    author: "Mythology Expert",
    views: "98,456 views",
    daysAgo: "5 days ago",
    type: "video",
    image: "https://example.com/podcast2.jpg",
    category: "Hanuman",
  },
  {
    id: "3",
    title: "Power of Hanuman Beej Mantra",
    author: "Yoga Master",
    views: "75,321 views",
    daysAgo: "1 week ago",
    type: "audio",
    image: "https://example.com/podcast3.jpg",
    category: "Hanuman",
  },
  {
    id: "4",
    title: "Exploring Famous Hanuman Temples",
    author: "Travel Enthusiast",
    views: "50,123 views",
    daysAgo: "3 days ago",
    type: "video",
    image: "https://example.com/podcast4.jpg",
    category: "Hanuman",
  },
  {
    id: "5",
    title: "Hanuman's Teachings for Modern Life",
    author: "Life Coach",
    views: "45,678 views",
    daysAgo: "4 days ago",
    type: "audio",
    image: "https://example.com/podcast5.jpg",
    category: "Hanuman",
  },
  {
    id: "6",
    title: "Neem Karoli Baba's Teachings",
    author: "Spiritual Guru",
    views: "30,000 views",
    daysAgo: "1 day ago",
    type: "audio",
    image: "https://example.com/podcast6.jpg",
    category: "Neem Karoli Baba",
  },
  {
    id: "7",
    title: "Neem Karoli Baba's Miracles",
    author: "Devotee",
    views: "25,000 views",
    daysAgo: "3 days ago",
    type: "video",
    image: "https://example.com/podcast7.jpg",
    category: "Neem Karoli Baba",
  },
  {
    id: "8",
    title: "Motivation for Daily Life",
    author: "Life Coach",
    views: "40,000 views",
    daysAgo: "2 days ago",
    type: "audio",
    image: "https://example.com/podcast8.jpg",
    category: "Motivation",
  },
  {
    id: "9",
    title: "How to Stay Motivated",
    author: "Motivational Speaker",
    views: "35,000 views",
    daysAgo: "4 days ago",
    type: "video",
    image: "https://example.com/podcast9.jpg",
    category: "Motivation",
  },
  {
    id: "10",
    title: "Secrets of Hanuman's Strength",
    author: "Spiritual Scholar",
    views: "90,543 views",
    daysAgo: "1 week ago",
    type: "audio",
    image: "https://example.com/podcast10.jpg",
    category: "Hanuman",
  },
  {
    id: "11",
    title: "Journey to Hanuman's Birthplace",
    author: "History Expert",
    views: "65,432 views",
    daysAgo: "6 days ago",
    type: "video",
    image: "https://example.com/podcast11.jpg",
    category: "Hanuman",
  },
  {
    id: "12",
    title: "Neem Karoli Baba and Steve Jobs",
    author: "Spiritual Historian",
    views: "48,000 views",
    daysAgo: "5 days ago",
    type: "audio",
    image: "https://example.com/podcast12.jpg",
    category: "Neem Karoli Baba",
  },
];

const PodcastSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Hanuman");
  const [currentImage, setCurrentImage] = useState(0);
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef(null);

  const images = [
    require("../../assets/images/t1.webp"),
    require("../../assets/images/ha123.webp"),
    require("../../assets/images/hanu007.webp"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3700);
    Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    return () => clearInterval(interval);
  }, [images.length, fadeAnim]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
    }
  }, [activeTab]);

  const handleSearch = (query) => setSearchQuery(query);
  const handleTabChange = (tab) => setActiveTab(tab);

  const filterPodcasts = (data) => {
    let filteredData = data;
    if (activeTab) filteredData = filteredData.filter((item) => item.category === activeTab);
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredData;
  };

  const filteredPodcasts = filterPodcasts(podcasts);
  const limitedVideoPodcasts = filteredPodcasts.filter((item) => item.type === "video").slice(0, 5);
  const limitedAudioPodcasts = filteredPodcasts.filter((item) => item.type === "audio").slice(0, 5);

  const renderVideoPodcastItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("VideoPodcastPlayer", { podcast: item })}>
      <Animated.View style={[styles.videoPodcastCard, { opacity: fadeAnim }]}>
        <Image source={{ uri: item.image }} style={styles.videoPodcastImage} />
        <View style={styles.videoPodcastInfo}>
          <View style={styles.iconTitleContainer}>
            <Ionicons name="play-circle" size={20} color="#FF5722" style={styles.icon} />
            <Text style={styles.videoPodcastTitle} numberOfLines={2}>{item.title}</Text>
          </View>
          <Text style={styles.videoPodcastDetails}>
            {item.author} • {item.views} • {item.daysAgo}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

  const renderAudioPodcastItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("AudioPodcastPlayer", { podcast: item })}>
      <Animated.View style={[styles.audioPodcastCard, { opacity: fadeAnim }]}>
        <Image source={{ uri: item.image }} style={styles.audioPodcastImage} />
        <View style={styles.audioPodcastInfo}>
          <View style={styles.iconTitleContainer}>
            <Ionicons name="musical-notes" size={20} color="#FF5722" style={styles.icon} />
            <Text style={styles.audioPodcastTitle} numberOfLines={2}>{item.title}</Text>
          </View>
          <Text style={styles.audioPodcastDetails}>
            {item.author} • {item.views} • {item.daysAgo}
          </Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "search":
        return (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Seek divine wisdom..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <Ionicons name="search" size={22} color="#FF5722" />
          </View>
        );
      case "banner":
        return (
          <Animated.View style={[styles.bannerContainer, { opacity: fadeAnim }]}>
            <Image style={styles.bannerImage} source={images[currentImage]} />
          </Animated.View>
        );
      case "tabs":
        return (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}
          >
            {["Hanuman", "Neem Karoli Baba", "Motivation"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => handleTabChange(tab)}
              >
                <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
      case "videoHeader":
        return (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Video Podcasts</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AllVideoPodcasts", {
                  podcasts: filteredPodcasts.filter((item) => item.type === "video"),
                })
              }
            >
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
        );
      case "videoList":
        return (
          <FlatList
            ref={flatListRef}
            data={limitedVideoPodcasts}
            renderItem={renderVideoPodcastItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContainer}
          />
        );
      case "audioHeader":
        return (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Audio Podcasts</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AllAudioPodcasts", {
                  podcasts: filteredPodcasts.filter((item) => item.type === "audio"),
                })
              }
            >
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
        );
      case "audioList":
        return (
          <View style={styles.listContainer}>
            {limitedAudioPodcasts.map((item) => (
              <View key={item.id}>{renderAudioPodcastItem({ item })}</View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  const data = [
    { type: "search", id: "1" },
    { type: "banner", id: "2" },
    { type: "tabs", id: "3" },
    { type: "videoHeader", id: "4" },
    { type: "videoList", id: "5" },
    { type: "audioHeader", id: "6" },
    { type: "audioList", id: "7" },
  ];

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{ paddingBottom: 80 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7", // Light saffron-tinted cream
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginLeft: 16,
    color: "#FF5722", // Saffron orange
    fontFamily: "Georgia",
    letterSpacing: 0.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginRight: 10,
    fontFamily: "Arial",
  },
  bannerContainer: {
    alignItems: "center",
    marginBottom: 24,
    borderRadius: 15,
    overflow: "hidden",
  },
  bannerImage: {
    height: responsiveHeight(25),
    width: responsiveWidth(92),
    borderRadius: 15,
  },
  tabContainer: {
    paddingHorizontal:0, // Adds padding to the start and end of the scrollable area
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: "#F5F5F7",
    borderWidth: 1,
    borderColor: "#F5F5F7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeTab: {
    backgroundColor: "#FF5722",
    shadowColor: "#FF5722",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 6,
  },
  tabText: {
    color: "#1C1C1E",
    fontWeight: "600",
    fontSize: 14,
  },
  activeTabText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  seeAllText: {
    fontSize: 16,
    color: "#1C1C1E",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  horizontalListContainer: {
    paddingBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  videoPodcastCard: {
    width: 260,
    height: 240,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  videoPodcastImage: {
    width: "100%",
    height: 130,
    borderRadius: 12,
  },
  videoPodcastInfo: {
    marginTop: 10,
  },
  iconTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  videoPodcastTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
    lineHeight: 22,
    flex: 1,
  },
  videoPodcastDetails: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
  audioPodcastCard: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  audioPodcastImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  audioPodcastInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  audioPodcastTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    lineHeight: 20,
    flex: 1,
  },
  audioPodcastDetails: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});

export default PodcastSection;