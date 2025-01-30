import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const galleryData = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150/FF0000', // Replace with real image URLs
    title: 'Hanuman Ji 1',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/150/00FF00',
    title: 'Hanuman Ji 2',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/150/0000FF',
    title: 'Hanuman Ji 3',
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/150/FFFF00',
    title: 'Hanuman Ji 4',
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/150/FF00FF',
    title: 'Hanuman Ji 5',
  },
];

const Gallery = ({ navigation }) => {
  const renderGalleryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => navigation.navigate('GalleryDetails', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gallery</Text>
      <FlatList
        data={galleryData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderGalleryItem}
        contentContainerStyle={styles.galleryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  galleryList: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Gallery;