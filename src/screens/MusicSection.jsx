import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MusicSection = () => {
  const categories = [
    { id: '1', name: 'Relax', image: require('../../assets/images/music.jpeg') },
    { id: '2', name: 'Workout', image: require('../../assets/images/music.jpeg') },
    { id: '3', name: 'Hanuman', image: require('../../assets/images/music.jpeg') },
    { id: '4', name: 'Travel', image: require('../../assets/images/music.jpeg') },
  ];

  const playlists = [
    {
      id: '1',
      title: 'Peace',
      subtitle: '22 songs',
      image: require('../../assets/images/music.jpeg'),
      songs: [
        { id: '1', name: 'Weightless', artist: 'Marconi Union' },
        { id: '2', name: 'Nothing It Can', artist: 'Helios' },
        { id: '3', name: 'Small Memory', artist: 'Jon Hopkins' },
        { id: '4', name: 'Close to Home', artist: 'Lyle Mays' },
      ],
    },
    {
      id: '2',
      title: 'Hanuman Aarti',
      subtitle: '10 songs',
      image: require('../../assets/images/music.jpeg'),
      songs: [
        { id: '1', name: 'Hanuman Chalisa', artist: 'Ritesh Mishra' },
        { id: '2', name: 'Bajrang Baan', artist: 'Ritesh Mishra' },
      ],
    },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.category}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPlaylist = ({ item }) => (
    <View style={styles.playlist}>
      <Image source={item.image} style={styles.playlistImage} />
      <View style={styles.playlistInfo}>
        <Text style={styles.playlistTitle}>{item.title}</Text>
        <Text style={styles.playlistSubtitle}>{item.subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hi Ram, Good Evening</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.categories}
      />
      <Text style={styles.sectionTitle}>Playlists</Text>
      <FlatList
        data={playlists}
        renderItem={renderPlaylist}
        keyExtractor={(item) => item.id}
        style={styles.playlists}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    marginBottom: 20,
  },
  category: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playlists: {
    marginBottom: 20,
  },
  playlist: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  playlistInfo: {
    flex: 1,
    marginLeft: 10,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  playButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MusicSection;