import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const DonationList = ({ navigation }) => {
  const donations = [
    {
      id: 1,
      title: "Veera Hanuman",
      description: "Devotees who help to construct temples are freed from sins of a thousand births...",
      image: "https://link-to-image.com/image1.png",
    },
    {
      id: 2,
      title: "Ram Hanuman",
      description: "Departed soul of a devotee who contributed towards temple construction will reach...",
      image: "https://link-to-image.com/image2.png",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Our Donation Choices</Text>
      {donations.map((donation) => (
        <TouchableOpacity
          key={donation.id}
          style={styles.card}
          onPress={() => navigation.navigate('DonationDetail', { donation })}
        >
          <Image source={{ uri: donation.image }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{donation.title}</Text>
            <Text style={styles.description}>{donation.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: { flexDirection: 'row', marginBottom: 16, borderRadius: 8, backgroundColor: '#f9f9f9', padding: 8 },
  image: { width: 80, height: 80, borderRadius: 8 },
  cardContent: { marginLeft: 16, flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555', marginTop: 4 },
});

export default DonationList;