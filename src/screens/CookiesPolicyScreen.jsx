import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';

const CookiesPolicyScreen = () => {
  const navigation = useNavigation();
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Cookies Policy</Text>
        <Text style={styles.text}>
          This app uses cookies to improve user experience. By using our services, you agree to our use of cookies.
        </Text>
        <Text style={styles.sectionTitle}>What Are Cookies?</Text>
        <Text style={styles.text}>
          Cookies are small pieces of data stored on your device to help improve app functionality and performance.
        </Text>
        <Text style={styles.sectionTitle}>How We Use Cookies</Text>
        <Text style={styles.text}>
          - To enhance user experience
          {'\n'}- To remember user preferences
          {'\n'}- To analyze app performance
        </Text>
        <View style={styles.checkboxContainer}>
          <Switch value={isAccepted} onValueChange={setIsAccepted} />
          <Text style={styles.checkboxText}>I accept the Cookies Policy</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !isAccepted && styles.disabledButton]}
          onPress={handleAccept}
          disabled={!isAccepted}
        >
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#222',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#444',
  },
  buttonContainer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#388E3C',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 2,
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CookiesPolicyScreen;