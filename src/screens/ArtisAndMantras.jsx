import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const audioData = [
  {
    id: "1",
    title: "Hanuman Chalisa",
    description: "Lorem ipsum dolor ...",
    image: "https://example.com/hanuman1.jpg",
  },
  {
    id: "2",
    title: "Lorem Ipsum Arti",
    description: "Lorem ipsum dolor ...",
    image: "https://example.com/hanuman2.jpg",
  },
];

const ArtisAndMantras = ({ navigation }) => {
  const renderAudioItem = ({ item }) => (
    <TouchableOpacity
      style={styles.audioCard}
      onPress={() => navigation.navigate("AudioPlayer", { data: item })}
    >
      <Image source={{ uri: item.image }} style={styles.audioImage} />
      <Text style={styles.audioTitle}>{item.title}</Text>
      <Text style={styles.audioDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi Dhiraj! Good Morning!</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Artis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Mantras</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionHeader}>Recently Played</Text>
      <FlatList
        horizontal
        data={audioData}
        renderItem={renderAudioItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionHeader}>Most Watched</Text>
      <FlatList
        data={audioData}
        renderItem={renderAudioItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  tabs: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#FFA726",
  },
  tabText: {
    fontSize: 14,
  },
  sectionHeader: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  audioCard: {
    marginRight: 16,
    width: 120,
  },
  audioImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  audioTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  audioDescription: {
    fontSize: 12,
    color: "#777",
  },
});

export default ArtisAndMantras;