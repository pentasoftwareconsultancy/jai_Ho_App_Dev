import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import icon library

const PhoneOtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Initialize with 6 empty strings for 6-digit OTP
  const navigation = useNavigation();

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input if a number is entered
    if (text && index < 5) {
      const nextInput = index + 1;
      refs[nextInput]?.current?.focus();
    }
  };

  // Array of refs for each input field (6 refs)
  const refs = Array(6)
    .fill(null)
    .map(() => React.createRef());

  // Check if all OTP fields are filled
  const isOtpComplete = otp.every((digit) => digit !== '');

  const handleVerifyClick = () => {
    // Navigate to the ReadyToExplore page when Verify button is clicked
    if (isOtpComplete) {
      navigation.navigate("TermsOfService");
    }
  };


  const handleResend = () => {
    Alert.alert('Info', 'OTP Resent to your number.');
  };

  const handleBackButton = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      {/* Back Button with Icon */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackButton}>
        <Icon name="arrowleft" size={30} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Phone OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the verification code we just sent to your number
        {'\n'}+91 94 *******53
      </Text>

      {/* OTP Input Fields (6 boxes) */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={[
              styles.otpInput,
              value && styles.otpInputFilled, // Apply filled style if value exists
            ]}
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            returnKeyType="next"
          />
        ))}
      </View>

      {/* Resend Link */}
      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>
          Didn’t receive code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </TouchableOpacity>

      {/* Verify Button */}
      <TouchableOpacity
        style={[
          styles.verifyButton,
          isOtpComplete && styles.verifyButtonActive, // Apply active styles if OTP is complete
        ]}
        disabled={!isOtpComplete} // Disable button if OTP is incomplete
        onPress={handleVerifyClick} // Add onPress event to verify OTP
      >
        <Text
          style={[
            styles.verifyButtonText,
            isOtpComplete && styles.verifyButtonTextActive, // Change text color when active
          ]}
        >
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
    width: '80%', // Adjusted width for 6 boxes
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  otpInputFilled: {
    borderColor: '#FF9800', // Change border color when filled
  },
  resendText: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
  resendLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  verifyButton: {
    marginTop: 30, // Increased marginTop to add a gap
    width: '80%',
    height: 50,
    backgroundColor: '#d3d3d3', // Default button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  verifyButtonActive: {
    backgroundColor: '#FF9800',
  },
  verifyButtonText: {
    fontSize: 18,
    color: '#888', // Default text color
    fontWeight: 'bold',
  },
  verifyButtonTextActive: {
    color: '#fff', // Active text color
  },
});

export default PhoneOtpVerification;