import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Hanuman Chalisa",
    description: "Lorem ipsum dolor...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "2",
    title: "Morning Bhajans",
    description: "Start your day with devotional bhajans...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "3",
    title: "Aarti of Lord Ram",
    description: "Aarti description here...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "4",
    title: "Bhajan Collection",
    description: "Various devotional bhajans...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "5",
    title: "Shiva Stotra",
    description: "Praise and prayer to Lord Shiva...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "6",
    title: "Morning Mantras",
    description: "Start your day with positive mantras...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "7",
    title: "Krishna Bhajans",
    description: "Melodious Krishna bhajans...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "8",
    title: "Durga Stuti",
    description: "Devotional chant for Goddess Durga...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "9",
    title: "Ganesh Vandana",
    description: "Prayer to Lord Ganesha...",
    type: "audio",
    image: require("../../assets/images/templeimage.jpg"),
  },
  {
    id: "10",
    title: "Divine Video",
    description: "A divine video description...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "11",
    title: "Temple Tour",
    description: "A virtual tour of the temple...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "12",
    title: "Yoga for Beginners",
    description: "A beginner-friendly yoga video...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "13",
    title: "Mahabharat Stories",
    description: "Ancient stories from Mahabharata...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "14",
    title: "Ramayan Katha",
    description: "A deep dive into Ramayana stories...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "15",
    title: "Meditation Guide",
    description: "Step-by-step guide to meditation...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "16",
    title: "Shiv Tandav",
    description: "Powerful Shiv Tandav Stotra...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "17",
    title: "Festivals of India",
    description: "Explore various Hindu festivals...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
  {
    id: "18",
    title: "Spiritual Discourse",
    description: "A discourse on spirituality...",
    type: "video",
    image: require("../../assets/images/templeimage.jpg"),
    videoId: "jSzV92tg6as",
  },
];

export default function BhajanVideoPlayerScreen() {
  const [activeTab, setActiveTab] = useState("All");
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  const flatListRef = useRef(null);

  const handleTabChange = (tab) => setActiveTab(tab);

  const filterData = (data) => {
    let filtered = data;
    if (activeTab === "Audios")
      filtered = filtered.filter((item) => item.type === "audio");
    if (activeTab === "Videos")
      filtered = filtered.filter((item) => item.type === "video");
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  };

  const filterRecentlyPlayed = () => {
    let filtered = recentlyPlayed;
    if (activeTab === "Audios")
      filtered = filtered.filter((item) => item.type === "audio");
    if (activeTab === "Videos")
      filtered = filtered.filter((item) => item.type === "video");
    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  };

  const handleCardPress = (item) => {
    setRecentlyPlayed((prev) => [
      item,
      ...prev.filter((p) => p.id !== item.id),
    ]);
    if (item.type === "audio") {
      navigation.navigate("BhajanAudioPlayerScreen", { media: item });
    } else if (item.type === "video") {
      navigation.navigate("BhajanVideoPlayerScreen", { media: item });
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((itemId) => itemId !== id)
        : [...prevFavorites, id]
    );
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  }, [activeTab, searchQuery]);

  const renderRecentlyPlayed = () => {
    const filteredRecentlyPlayed = filterRecentlyPlayed();
    if (filteredRecentlyPlayed.length === 0) return null;

    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          ref={flatListRef}
          data={filteredRecentlyPlayed}
          renderItem={({ item }) =>
            item.type === "audio" ? (
              <TouchableOpacity onPress={() => handleCardPress(item)}>
                <View style={styles.audioRecentCard}>
                  <Image source={item.image} style={styles.audioRecentImage} />
                  <View style={styles.audioRecentDetails}>
                    <Text style={styles.audioRecentTitle} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text
                      style={styles.audioRecentDescription}
                      numberOfLines={1}
                    >
                      {item.description}
                    </Text>
                  </View>
                  <Ionicons name="play" size={20} color="#FF7722" />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleCardPress(item)}>
                <View style={styles.videoRecentContainer}>
                  <View style={styles.videoRecentCard}>
                    <Image
                      source={item.image}
                      style={styles.videoRecentImage}
                    />
                    <Ionicons
                      name="play-circle-outline"
                      size={24}
                      color="#FFFFFF"
                      style={styles.playIcon}
                    />
                  </View>
                  <Text style={styles.videoRecentTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentListContainer}
        />
      </View>
    );
  };

  const renderAppleTVStyleVideos = () => {
    const videos = filterData(data).filter((item) => item.type === "video");

    return (
      <View style={styles.videoSectionContainer}>
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item)}>
              <View style={styles.videoCardContainer}>
                <View style={styles.appleTvVideoCard}>
                  <Image source={item.image} style={styles.appleTvVideoImage} />
                  <Ionicons
                    name="play-circle-outline"
                    size={24}
                    color="#FFFFFF"
                    style={styles.playIcon}
                  />
                </View>
                <Text style={styles.appleTvVideoTitle} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.videoListContainer}
        />
        <Text style={styles.sectionTitleVideo}>Top Mantras</Text>
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item)}>
              <View style={styles.videoCardContainer}>
                <View style={styles.appleTvVideoCard}>
                  <Image source={item.image} style={styles.appleTvVideoImage} />
                  <Ionicons
                    name="play-circle-outline"
                    size={24}
                    color="#FFFFFF"
                    style={styles.playIcon}
                  />
                </View>
                <Text style={styles.appleTvVideoTitle} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.videoListContainer}
        />
      </View>
    );
  };

  const renderMusicStyleAudios = () => {
    const audios = filterData(data).filter((item) => item.type === "audio");

    return (
      <View style={styles.audioListContainer}>
        {audios.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleCardPress(item)}>
            <View style={styles.musicStyleAudioRow}>
              <Image source={item.image} style={styles.musicAudioCover} />
              <View style={styles.musicAudioDetails}>
                <Text style={styles.musicAudioTitle}>{item.title}</Text>
                <Text style={styles.musicAudioSubtitle}>
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => toggleFavorite(item.id)}
                style={styles.favoriteButton}
              >
                <Ionicons
                  name={favorites.includes(item.id) ? "heart" : "heart-outline"}
                  size={24}
                  color={favorites.includes(item.id) ? "#FF5900" : "#FF7722"}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderAllContent = () => {
    if (activeTab !== "All") {
      return (
        <>
          {renderRecentlyPlayed()}
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>
              {activeTab === "Audios" ? "Audios" : "Videos"}
            </Text>
          </View>
          {activeTab === "Videos"
            ? renderAppleTVStyleVideos()
            : renderMusicStyleAudios()}
        </>
      );
    }

    return (
      <>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Videos</Text>
          <TouchableOpacity onPress={() => handleTabChange("Videos")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.videoSectionContainer}>
          <FlatList
            data={data.filter((item) => item.type === "video").slice(0, 5)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCardPress(item)}>
                <View style={styles.videoCardContainer}>
                  <View style={styles.appleTvVideoCard}>
                    <Image
                      source={item.image}
                      style={styles.appleTvVideoImage}
                    />
                    <Ionicons
                      name="play-circle-outline"
                      size={24}
                      color="#FFFFFF"
                      style={styles.playIcon}
                    />
                  </View>
                  <Text style={styles.appleTvVideoTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.videoListContainer}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Audios</Text>
          <TouchableOpacity onPress={() => handleTabChange("Audios")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.audioListContainer}>
          {data
            .filter((item) => item.type === "audio")
            .slice(0, 5)
            .map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleCardPress(item)}
              >
                <View style={styles.musicStyleAudioRow}>
                  <Image source={item.image} style={styles.musicAudioCover} />
                  <View style={styles.musicAudioDetails}>
                    <Text style={styles.musicAudioTitle}>{item.title}</Text>
                    <Text style={styles.musicAudioSubtitle}>
                      {item.description}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => toggleFavorite(item.id)}
                    style={styles.favoriteButton}
                  >
                    <Ionicons
                      name={
                        favorites.includes(item.id) ? "heart" : "heart-outline"
                      }
                      size={24}
                      color={
                        favorites.includes(item.id) ? "#FF5900" : "#FF7722"
                      }
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <View style={styles.innerContainer}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="1C1C1E"
            style={styles.searchIcon}
          />
          <TextInput
            style={[styles.searchInput, { color: "1C1C1E" }]}
            placeholder="Search Mantras, videos..."
            placeholderTextColor="#1C1C1E"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.tabContainer}>
          {["All", "Audios", "Videos"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => handleTabChange(tab)}
            >
              <Text
                style={
                  activeTab === tab ? styles.activeTabText : styles.tabText
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {renderAllContent()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  innerContainer: {
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F7",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#F5F5F7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: { marginRight: 10 },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#F5F5F7",
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingLeft: 4,
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
    backgroundColor: "#FF7722",
  },
  tabText: {
    color: "#1C1C1E",
    fontWeight: "normal",
  },
  activeTabText: {
    color: "#F5F5F7",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1C1C1E",
  },
  sectionTitleVideo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1C1C1E",
    marginTop: 24,
  },
  seeAll: {
    fontSize: 14,
    color: "#1C1C1E",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  recentListContainer: {
    paddingBottom: 16,
  },
  // Audio Recent Card
  audioRecentCard: {
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginRight: 16,
    padding: 8,
    shadowColor: "#FF9955",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#FFD8A8",
  },
  audioRecentImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 12,
  },
  audioRecentDetails: {
    flex: 1,
    justifyContent: "center",
  },
  audioRecentTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  audioRecentDescription: {
    fontSize: 12,
    color: "#1C1C1E",
  },
  // Video Recent Card
  videoRecentContainer: {
    marginRight: 16,
  },
  videoRecentCard: {
    width: 160,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    position: "relative",
  },
  videoRecentImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  videoRecentTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 8,
    textAlign: "left",
  },
  // Apple TV+ Style Video Section
  videoSectionContainer: {
    marginBottom: 24,
  },
  videoListContainer: {
    paddingBottom: 16,
  },
  videoCardContainer: {
    marginRight: 12,
  },
  appleTvVideoCard: {
    width: 220,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#000",
    position: "relative",
  },
  appleTvVideoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  appleTvVideoTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 8,
    textAlign: "left",
  },
  // Music Style Audio List
  audioListContainer: {
    marginBottom: 16,
  },
  musicStyleAudioRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#FFD8A8",
  },
  musicAudioCover: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
  },
  musicAudioDetails: {
    flex: 1,
    justifyContent: "center",
  },
  musicAudioTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  musicAudioSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  favoriteButton: {
    padding: 8,
  },
});
