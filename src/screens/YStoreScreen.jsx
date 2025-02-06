import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const YStoreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Our Donation Choices</Text>
      <View style={styles.comingSoonContainer}>
        <Text style={styles.comingSoonText}>Coming Soon</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  comingSoonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  comingSoonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default YStoreScreen;