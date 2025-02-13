import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const MusicDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("For you");
  const navigation = useNavigation(); // Get the navigation object

  const recentlyPlayed = [
    { 
      id: "1", 
      title: "Bhajan", 
      image: require("../../assets/images/hanuman.jpg")
    },
    { 
      id: "2", 
      title: "Bhajan", 
      image: require("../../assets/images/hanuman.jpg")
    },
    { 
      id: "3", 
      title: "Bhajan", 
      image: require("../../assets/images/hanuman.jpg")
    },
    { 
      id: "4", 
      title: "Bhajan", 
      image: require("../../assets/images/hanuman.jpg")
    },
  ];

  const mixesForYou = [
    { 
      id: "1", 
      title: "Calvin Harris", 
      image: require("../../assets/images/hanuman.jpg")
    },
    { 
      id: "2", 
      title: "A R Rahman", 
      image: require("../../assets/images/hanuman.jpg")
    },
    { 
      id: "3", 
      title: "Maroon 5", 
      image: require("../../assets/images/hanuman.jpg")
    },
  ];

  const renderCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      activeOpacity={0.7} 
      onPress={() => navigation.navigate("MusicPlayerScreen", { songId: item.id })} // Navigate to MusicPlayerScreen
    >
      <Image
        source={item.image}
        style={[styles.cardImage, { width: width * 0.2, height: width * 0.2 }]}
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderMixCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.mixCard} 
      activeOpacity={0.7} 
      onPress={() => navigation.navigate("MusicPlayerScreen", { songId: item.id })} // Navigate to MusicPlayerScreen
    >
      <Image
        source={item.image}
        style={[styles.mixImage, { width: width * 0.3, height: width * 0.3 }]}
      />
      <Text style={styles.mixTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>👋 Hi Ram,</Text>
          <Text style={styles.subtitle}>Good Evening</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/hanuman.jpg")}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabs}>
        {["For you", "Relax", "Hanuman", "Ram A"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Featuring Today */}
        <Text style={styles.sectionTitle}>Featuring Today</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Image
              source={require("../../assets/images/hanuman.jpg")}
              style={[styles.featuredImage, { width: width * 0.9, height: height * 0.15 }]}
            />
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={0.9} style={styles.card}>
            <Image
              source={require("../../assets/images/hanuman.jpg")}
              style={[styles.featuredImage, { width: width * 0.9, height: height * 0.15 }]}
            />
          </TouchableOpacity>
        </ScrollView>
        
        {/* Recently Played */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See more</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recentlyPlayed}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        {/* Mixes For You */}
        <Text style={styles.sectionTitle}>Mixes for you</Text>
        <FlatList
          data={mixesForYou}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={renderMixCard}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          style={styles.bottomPadding}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here...
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#007AFF",
  },
  tabText: {
    fontSize: 15,
    color: "#666",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  seeAll: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
  featuredImage: {
    borderRadius: 16,
    alignSelf: "center",
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  listContent: {
    paddingHorizontal: 12,
  },
  card: {
    alignItems: "center",
    marginHorizontal: 8,
    padding: 4,
  },
  cardImage: {
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  mixCard: {
    alignItems: "center",
    marginHorizontal: 8,
    padding: 4,
  },
  mixImage: {
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  mixTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  bottomPadding: {
    paddingBottom: 20,
  },
});

export default MusicDashboard;