import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const testimonials = [
  {
    id: '1',
    name: 'Angelina Zolly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    time: '6h 30min',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Rocks Velkeijnen',
    video: true,
    description: 'Cinemas is the ultimate experience to see new movies.',
    date: '10 Feb',
    avatar: 'https://via.placeholder.com/100',
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const renderTestimonial = ({ item }) => {
    if (item.video) {
      return (
        <TouchableOpacity style={styles.videoContainer}>
          <Image source={{ uri: item.avatar }} style={styles.videoThumbnail} />
          <View style={styles.videoContent}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.textContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.textContent}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={testimonials}
      keyExtractor={(item) => item.id}
      renderItem={renderTestimonial}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  videoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  videoThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  videoContent: {
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default Testimonials;