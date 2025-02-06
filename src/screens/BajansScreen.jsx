import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', title: 'Hanuman Chalisa', description: 'Lorem ipsum dolor...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '2', title: 'Morning Bhajans', description: 'Start your day with devotional bhajans...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '3', title: 'Aarti of Lord Ram', description: 'Aarti description here...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '4', title: 'Bhajan Collection', description: 'Various devotional bhajans...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '5', title: 'Shiva Stotra', description: 'Praise and prayer to Lord Shiva...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '6', title: 'Morning Mantras', description: 'Start your day with positive mantras...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '7', title: 'Krishna Bhajans', description: 'Melodious Krishna bhajans...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '8', title: 'Durga Stuti', description: 'Devotional chant for Goddess Durga...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },
  { id: '9', title: 'Ganesh Vandana', description: 'Prayer to Lord Ganesha...', type: 'audio', image: require('../../assets/images/templeimage.jpg') },

  { id: '10', title: 'Divine Video', description: 'A divine video description...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '11', title: 'Temple Tour', description: 'A virtual tour of the temple...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '12', title: 'Yoga for Beginners', description: 'A beginner-friendly yoga video...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '13', title: 'Mahabharat Stories', description: 'Ancient stories from Mahabharata...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '14', title: 'Ramayan Katha', description: 'A deep dive into Ramayana stories...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '15', title: 'Meditation Guide', description: 'Step-by-step guide to meditation...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '16', title: 'Shiv Tandav', description: 'Powerful Shiv Tandav Stotra...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '17', title: 'Festivals of India', description: 'Explore various Hindu festivals...', type: 'video', image: require('../../assets/images/templeimage.jpg') },
  { id: '18', title: 'Spiritual Discourse', description: 'A discourse on spirituality...', type: 'video', image: require('../../assets/images/templeimage.jpg') }
];


export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const navigation = useNavigation();

  const handleTabChange = (tab) => setActiveTab(tab);

  const filterData = (data) => {
    if (activeTab === 'Audios') return data.filter(item => item.type === 'audio');
    if (activeTab === 'Videos') return data.filter(item => item.type === 'video');
    return data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="orange" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {['All', 'Audios', 'Videos'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => handleTabChange(tab)}
          >
            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'All' && (
        <View>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Recently Played</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filterData(data)}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}

      <View style={styles.row}>
      <Text style={styles.sectionTitle}>
    {activeTab === 'Audios' ? 'Audios' : activeTab === 'Videos' ? 'Videos' : 'Most Watched'}
  </Text>
      </View>
      <FlatList
        data={activeTab === 'Audios' ? filterData(data) : filterData(data).slice(0, 5)}
        renderItem={({ item }) => (
          <View style={styles.mostWatchedItem}>
            <Image source={item.image} style={styles.mostWatchedImage} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
            <Ionicons name="heart-outline" size={24} color="black" />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  tab: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, backgroundColor: '#EAEAEA' },
  activeTab: { backgroundColor: '#FF8500' },
  tabText: { color: '#000' },
  activeTabText: { color: '#FFF' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  seeAll: { fontSize: 14, color: '#FF8500' },
  card: { marginRight: 30, width: 140 },
  cardImage: { width: 150, height: 150, borderRadius: 10, marginBottom: 5 },
  cardTitle: { fontSize: 14, fontWeight: 'bold' },
  cardDescription: { fontSize: 12, color: '#666' },
  mostWatchedItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  mostWatchedImage: { width: 70, height: 70, borderRadius: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});

