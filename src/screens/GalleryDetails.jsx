import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import { MaterialIcons } from '@expo/vector-icons';

const GalleryDetails = () => {
  const [isSaved, setIsSaved] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { image } = route.params; // Get the image passed from the Gallery component

  const handleSaveToggle = () => {
    setIsSaved(prevState => !prevState);
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
    <TouchableOpacity onPress={() => navigation.navigate('GalleryDetails', { image: item.thumbnail })}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Fixed Back Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <Icon name="arrow-left" size={24} color="#000" /> {/* Back icon */}
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView>
        {/* Larger Image at the Top */}
        <Image
          source={image} // Use the image passed from the Gallery component
          style={styles.largeImage}
          resizeMode="cover"
        />

        {/* Gallery Name, Rating, and Buttons */}
        <View style={styles.galleryHeader}>
          <View style={styles.galleryInfo}>
            <Text style={styles.galleryName}>3D JUST VISION GUN</Text>
            <Text style={styles.rating}>★★★★★</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={handleSaveToggle}>
              <MaterialIcons
                name={isSaved ? "bookmark" : "bookmark-border"}
                size={24}
                color={isSaved ? "#000" : "#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="share-alt" size={24} color="#000" /> {/* Share icon */}
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie est sed
          diam ornare, quis congue metus vestibulum. Aliquam diam quam, mollis ornare lacus at, maximus posuere magna.
        </Text>

        {/* For You Section */}
        <Text style={styles.sectionTitle}>For You</Text>
        <FlatList
          data={images}
          renderItem={renderThumbnail}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backIcon: {
    position: 'absolute',
    top: 40, // Adjust the top position as needed
    left: 16, // Adjust the left position as needed
    zIndex: 1, // Ensure the icon is above other elements
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
    borderRadius: 20,
  },
  largeImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6, // 60% of screen height
  },
  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  galleryInfo: {
    flex: 1,
  },
  galleryName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 18,
    color: '#FFD700', // Gold color for stars
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50, // Fixed width for the icon button
    height: 50, // Fixed height for the icon button
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginVertical: 10,
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
  thumbnail: {
    width: Dimensions.get('window').width * 0.45, // 45% of screen width
    height: 200,
    margin: 8,
    borderRadius: 15,
    borderWidth: 1,
  },
});

export default GalleryDetails;