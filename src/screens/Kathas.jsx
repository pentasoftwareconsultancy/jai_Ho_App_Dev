import React from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Kathas = () => {
  const popularKathas = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, cons...",
      author: "Dr. Tikendranath Sarkar",
      rating: 4.5,
      ratingsCount: 50,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, cons...",
      author: "Derek Collins",
      rating: 3.5,
      ratingsCount: 80,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, cons...",
      author: "Paul-Alain Beaulieu",
      rating: 4.8,
      ratingsCount: 120,
      image: "https://via.placeholder.com/150",
    },
  ];

  const renderKathas = ({ item }) => (
    <View style={styles.kathaCard}>
      <Image source={{ uri: item.image }} style={styles.kathaImage} />
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
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Dhiraj!</Text>
        <Text style={styles.subGreeting}>Good Morning!</Text>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.featuredSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/300" }}
          style={styles.featuredImage}
        />
        <Text style={styles.featuredTitle}>Lorem ipsum dolor sit amet, consectetur ...</Text>
        <View style={styles.featuredDetails}>
          <AntDesign name="playcircleo" size={24} color="black" />
          <Text style={styles.featuredTime}>15h Listen</Text>
          <Text style={styles.featuredAuthor}>Andrew Dalby</Text>
        </View>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8C00",
  },
  subGreeting: {
    fontSize: 16,
    color: "#555",
  },
  searchBar: {
    marginTop: 10,
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
  featuredImage: {
    width: "100%",
    height: 200,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  featuredDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  featuredTime: {
    marginLeft: 5,
    color: "#555",
  },
  featuredAuthor: {
    marginLeft: 15,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 10,
  },
  kathasList: {
    paddingHorizontal: 20,
  },
  kathaCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 1,
  },
  kathaImage: {
    width: 80,
    height: 80,
  },
  kathaInfo: {
    flex: 1,
    padding: 10,
  },
  kathaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  kathaAuthor: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  kathaRatings: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
    color: "#FFD700",
  },
  ratingsCount: {
    marginLeft: 10,
    color: "#777",
  },
});

export default Kathas;