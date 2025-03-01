import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';

const FavoriteScreen = () => {
  const favoriteVideos = [
    {
      id: '1',
      title: 'Rocks Velkeinjen',
      description: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax. Find a cinema near you.',
      date: '10 Feb',
      rating: 4,
      image: require("../../assets/images/hanuman.jpg"),
    },
    {
      id: '2',
      title: 'The Great Show',
      description: 'An inspiring documentary to lift your spirits.',
      date: '12 Feb',
      rating: 5,
      image: require("../../assets/images/hanuman.jpg"),
    },
    {
      id: '3',
      title: 'Cinematic Masterpiece',
      description: 'A profound dive into the art of film-making.',
      date: '15 Feb',
      rating: 5,
      image: require("../../assets/images/hanuman.jpg"),
    },
  ];

  const favoriteMandirs = [
    {
      id: '1',
      title: 'Shri Hanuman and Shani Temple',
      rating: 4.5,
      image: require("../../assets/images/hanuman.jpg"),
    },
    {
      id: '2',
      title: 'Shri Krishna Temple',
      rating: 4.7,
      image: require("../../assets/images/hanuman.jpg"),
    },
    {
      id: '3',
      title: 'Shri Ganesh Mandir',
      rating: 4.8,
      image: require("../../assets/images/hanuman.jpg"),
    },
  ];

  const favoriteImages = [
    {
      id: '1',
      image: require("../../assets/images/hanuman.jpg"),
    },
    {
      id: '2',
      image: require("../../assets/images/hanuman.jpg"),
    },
    {
      id: '3',
      image: require("../../assets/images/hanuman.jpg"),
    },
  ];

  const handleViewPress = (title) => {
    Alert.alert(`You pressed view for ${title}`);
  };

  const renderVideoCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.videoImage} />
      <Text style={styles.videoTitle}>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text>{item.description}</Text>
      <Text>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</Text>
    </View>
  );

  const renderMandirCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.mandirImage} />
      <Text style={styles.mandirTitle}>{item.title}</Text>
      <Text>Rating: {item.rating}</Text>
      <TouchableOpacity style={styles.viewButton} onPress={() => handleViewPress(item.title)}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  const renderImageCard = ({ item }) => (
    <View style={styles.imageCard}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Hi Dhiraj!</Text>
      <Text style={styles.subHeader}>Good Morning!</Text>

      <Text style={styles.sectionTitle}>All Favorite Videos</Text>
      <FlatList
        data={favoriteVideos}
        renderItem={renderVideoCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>All Favorite Mandirs</Text>
      <FlatList
        data={favoriteMandirs}
        renderItem={renderMandirCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>All Favorite Images</Text>
      <FlatList
        data={favoriteImages}
        renderItem={renderImageCard}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
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
  subHeader: {
    fontSize: 18,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  card: {
    width: Dimensions.get('window').width / 2.5,
    marginRight: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
  },
  videoImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mandirImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  mandirTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
  },
  imageCard: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  horizontalList: {
    paddingVertical: 10,
  },
});

export default FavoriteScreen;