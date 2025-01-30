import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const TermsOfServiceScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    navigation.navigate('ReadyToExplore');
  };

  const handleDecline = () => {
    navigation.navigate('LoginSignup');
  };

  const handleCheckboxToggle = (newValue) => {
    if (newValue) {
      Alert.alert(
        'Terms and Conditions',
        'Do you agree to the terms and conditions?',
        [
          {
            text: 'Cancel',
            onPress: () => setIsChecked(false),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => setIsChecked(true),
          },
        ],
        { cancelable: false }
      );
    } else {
      setIsChecked(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>AGREEMENT</Text>
        <Text style={styles.subTitle}>Terms of Service</Text>
        <Text style={styles.text}>
          Tellus at sit ante rutrum suspendisse pretium, vitae vel dignissim. Nunc, scelerisque adipiscing
          condimentum massa dignissim tortor leo lacus. Sapien felis ultrices fringilla nisi sit nibh. Etiam
          volutpat nisl ornare lorem mus at a, et pulvinar.
        </Text>
        <Text style={styles.sectionTitle}>2. Use License</Text>
        <Text style={styles.text}>
          Fermentum erat nisl duis varius risus. Augue ac facilisi porta metus enim. Ullamcorper lacus
          praesent rhoncus, sapien rutrum nulla mattis vitae ultrices.
        </Text>
        <View style={styles.checkboxContainer}>
          <Switch value={isChecked} onValueChange={setIsChecked} />
          <Text style={styles.checkboxText}>I accept the terms and conditions</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={handleDecline}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.acceptButton, !isChecked && styles.disabledButton]}
          onPress={handleAccept}
          disabled={!isChecked}
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
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#555',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#444',
  },
  buttonContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderRadius: 10,
    elevation: 3,
  },
  button: {
    
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 2,
  },
  declineButton: {
    borderRadius: 50,
    backgroundColor: '#D32F2F',
  },
  acceptButton: {
    borderRadius: 50,
    backgroundColor: '#388E3C',
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
});

export default TermsOfServiceScreen;