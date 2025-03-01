import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

// Import local images
import HanumanKatha1 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha2 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha3 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha4 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha5 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha6 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha7 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha8 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha9 from "../../assets/images/HanumanKatha.jpg";
import HanumanKatha10 from "../../assets/images/HanumanKatha.jpg";
import FeaturedKatha from "../../assets/images/HanumanKatha.jpg";
import { useNavigation } from "@react-navigation/native";

const Kathas = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const userName = "Ankit";

  const navigation = useNavigation();

  // Handle Popular Katha Press 
  const HandlePopularKathaPress = (item) => {
    navigation.navigate("KathaDetails", { katha: item });
  }

  const popularKathas = [
    {
      id: 1,
      title: "Hanuman Chalisa - A Devotional Journey",
      author: "Dr. Tikendranath Sarkar",
      rating: 4.5,
      ratingsCount: 50,
      image: HanumanKatha1,
    },
    {
      id: 2,
      title: "The Story of Hanuman and Ramayana",
      author: "Derek Collins",
      rating: 3.5,
      ratingsCount: 80,
      image: HanumanKatha2,
    },
    {
      id: 3,
      title: "Hanuman and the Power of Devotion",
      author: "Paul-Alain Beaulieu",
      rating: 4.8,
      ratingsCount: 120,
      image: HanumanKatha3,
    },
    {
      id: 4,
      title: "The Divine Devotion of Hanuman",
      author: "Swami Vivekananda",
      rating: 4.7,
      ratingsCount: 95,
      image: HanumanKatha4,
    },
    {
      id: 5,
      title: "The Courage of Hanuman in Lanka",
      author: "Dr. Ramesh Sharma",
      rating: 4.2,
      ratingsCount: 60,
      image: HanumanKatha5,
    },
    {
      id: 6,
      title: "Hanuman: The Mighty Warrior",
      author: "Anil Kumar",
      rating: 4.6,
      ratingsCount: 110,
      image: HanumanKatha6,
    },
    {
      id: 7,
      title: "Hanuman’s Role in Ramayana",
      author: "Maharishi Valmiki",
      rating: 5.0,
      ratingsCount: 200,
      image: HanumanKatha7,
    },
    {
      id: 8,
      title: "Lessons from Hanuman’s Devotion",
      author: "Sri Sri Ravi Shankar",
      rating: 4.3,
      ratingsCount: 70,
      image: HanumanKatha8,
    },
    {
      id: 9,
      title: "Sundarkand: The Journey of Hanuman",
      author: "Goswami Tulsidas",
      rating: 4.9,
      ratingsCount: 150,
      image: HanumanKatha9,
    },
    {
      id: 10,
      title: "Hanuman’s Bhakti and Strength",
      author: "Swami Sivananda",
      rating: 4.4,
      ratingsCount: 85,
      image: HanumanKatha10,
    }
  ];

  const renderKathas = ({ item }) => (
    <TouchableOpacity onPress={() => HandlePopularKathaPress(item)}>
      <View style={styles.kathaCard}>
        <Image source={item.image} style={styles.kathaImage} />
        <View style={styles.kathaInfo}>
          <Text style={styles.kathaTitle}>{item.title}</Text>
          <Text style={styles.kathaAuthor}>{item.author}</Text>
          <View style={styles.kathaRatings}>
            <AntDesign name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.ratingsCount}>({item.ratingsCount} Ratings)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          placeholderTextColor="#aaa"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("KathaDetails", { katha: { title: "The Power of Devotion in Hanuman Chalisa", author: "Andrew Dalby" } })}>
        <View style={styles.featuredSection}>
          <Image source={FeaturedKatha} style={styles.featuredImage} />
          <Text style={styles.featuredTitle}>The Power of Devotion in Hanuman Chalisa</Text>
          <View style={styles.featuredDetails}>
            <AntDesign name="playcircleo" size={24} color="black" />
            <Text style={styles.featuredTime}>15h Listen</Text>
            <Text style={styles.featuredAuthor}>Andrew Dalby</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Popular Kathas</Text>
      <FlatList
        data={popularKathas}
        renderItem={renderKathas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.kathasList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 20 },
  greeting: { fontSize: 24, fontWeight: "bold", color: "#FF8C00" },
  subGreeting: { fontSize: 16, color: "#555" },
  searchBar: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    color: "#000",
  },
  featuredSection: {
    margin: 20,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    overflow: "hidden",
  },
  featuredImage: { width: "100%", height: 200 },
  featuredTitle: { fontSize: 16, fontWeight: "bold", margin: 10 },
  featuredDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  featuredTime: { marginLeft: 5, color: "#555" },
  featuredAuthor: { marginLeft: 15, color: "#555" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginHorizontal: 20, marginTop: 10 },
  kathasList: { paddingHorizontal: 20, paddingBottom:100 },
  kathaCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 1,
  },
  kathaImage: { width: 80, height: 80 },
  kathaInfo: { flex: 1, padding: 10 },
  kathaTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  kathaAuthor: { fontSize: 14, color: "#777", marginVertical: 5 },
  kathaRatings: { flexDirection: "row", alignItems: "center" },
  rating: { marginLeft: 5, color: "#FFD700" },
  ratingsCount: { marginLeft: 10, color: "#777" },
});

export default Kathas;