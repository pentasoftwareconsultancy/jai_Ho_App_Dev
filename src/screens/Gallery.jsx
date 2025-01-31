import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const Gallery = () => {
  const navigation = useNavigation();

  const HandlePhotoClick = (item) => {
    // Navigate to GalleryDetails and pass the image data
    navigation.navigate('GalleryDetails', { image: item.thumbnail });
  };

  const data = [
    { id: '1', title: 'Video', icon: '🎥' },
    { id: '2', title: 'Favorite', icon: '⭐' },
    { id: '3', title: 'Location', icon: '📍' },
    { id: '4', title: 'All Files', icon: '📁' },
  ];

  const images = [
    { id: '1', thumbnail: require('../../assets/images/thumb.jpg') },
    { id: '2', thumbnail: require('../../assets/images/thumb1.jpeg') },
    { id: '3', thumbnail: require('../../assets/images/thumb.jpg') },
    { id: '4', thumbnail: require('../../assets/images/thumb.jpg') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const renderThumbnail = ({ item }) => (
    <TouchableOpacity onPress={() => HandlePhotoClick(item)}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Hi Dhiraj</Text>
      <Text style={styles.greeting}>Good Morning!</Text>
      <TextInput style={styles.searchBar} placeholder="Search" />
      <View style={{ height: 100 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.sectionTitle}>Photos</Text>
      <FlatList
        data={images}
        renderItem={renderThumbnail}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 18,
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 0.5,
  },
  icon: {
    fontSize: 24,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  thumbnail: {
    width: 160,
    height: 200,
    margin: 14,
    borderRadius: 15,
    borderWidth: 1,
  },
});

export default Gallery;