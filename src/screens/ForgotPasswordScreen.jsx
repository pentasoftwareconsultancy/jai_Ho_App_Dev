import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

// Main component for Login/Signup functionality
const ForgotPasswordScreen = ({ navigation }) => {
  // State hooks for managing input and UI behavior
  const [selectedOption, setSelectedOption] = useState("Email"); // Tracks selected input type (Email/Phone)
  const [inputValue, setInputValue] = useState(""); // Holds the input value for email/phone
  const [hoveredLink, setHoveredLink] = useState(null); // Tracks which link is hovered

  // Navigation Handlers
  // const handleNavigateToTerms = () => {
  //   navigation.navigate("TermsOfService"); // Navigate to Terms of Service screen
  // };

  // const handleNavigateToPrivacy = () => {
  //   navigation.navigate("PrivacyPolicy"); // Navigate to Privacy Policy screen
  // };

  // const handleNavigateToCookies = () => {
  //   navigation.navigate("CookiesPolicies"); // Navigate to Cookies Policies screen
  // };

  // Handler for sending OTP based on selected input option
  const handleSendOtp = () => {
    // Input validation
    if (!inputValue.trim()) {
      Alert.alert("Input Required", `Please enter your ${selectedOption === "Email" ? "email" : "phone number"}.`);
      return;
    }

    // Navigate to OTP verification screen based on input type (Email or Phone)
    if (selectedOption === "Phone") {
      navigation.navigate("PhoneOtpVerification");
    } else {
      navigation.navigate("OtpVerification");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Title and Subtitle */}
      <Text style={styles.title}>Welcome to Jai Ho</Text>
      <Text style={styles.subtitle}>Scanner for your Organization</Text>

      {/* Toggle between Email and Phone input */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === "Email" && styles.activeButton,
          ]}
          onPress={() => setSelectedOption("Email")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedOption === "Email" && styles.activeText,
            ]}
          >
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === "Phone" && styles.activeButton,
          ]}
          onPress={() => setSelectedOption("Phone")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedOption === "Phone" && styles.activeText,
            ]}
          >
            Phone
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dynamic Input Field based on selected option */}
      <Text style={styles.inputLabel}>
        {selectedOption === "Email" ? "Email" : "Phone No"}
      </Text>
      <TextInput
        style={styles.inputField}
        placeholder={
          selectedOption === "Email"
            ? "xxxxx@stringconsultants.com" // Placeholder for email
            : "Enter your phone number" // Placeholder for phone number
        }
        keyboardType={selectedOption === "Email" ? "email-address" : "phone-pad"} // Set keyboard type dynamically
        value={inputValue}
        onChangeText={setInputValue} // Update input value
      />

      {/* OTP Button */}
      <TouchableOpacity style={styles.otpButton} onPress={handleSendOtp}>
        <Text style={styles.otpButtonText}>Send OTP</Text>
      </TouchableOpacity>

      {/* Footer with Links */}
      {/*  */}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  toggleContainer: {
    flexDirection: "row",
    marginTop: 100,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "#FF9800",
  },
  toggleText: {
    fontSize: 16,
    color: "#000",
  },
  activeText: {
    color: "#fff",
  },
  inputLabel: {
    fontSize: 16,
    color: "#777",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 5,
  },
  inputField: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  otpButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  otpButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
    textAlign: "center",
  },
  linkText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  hoverText: {
    color: "#0056b3",
    textDecorationLine: "underline",
  },
});

export default ForgotPasswordScreen;










{/* 
  
  <Text style={styles.footerText}>
        By continuing you accept our{" "}
        <TouchableOpacity
          onPress={handleNavigateToTerms} // Navigate to Terms of Service
          onPressIn={() => setHoveredLink("terms")} // Track hover effect
          onPressOut={() => setHoveredLink(null)} // Reset hover effect
        >
          <Text
            style={[
              styles.linkText,
              hoveredLink === "terms" && styles.hoverText, // Apply hover effect styling
            ]}
          >
            Terms of Service
          </Text>
        </TouchableOpacity>{" "}
        and{" "}
        <TouchableOpacity
          onPress={handleNavigateToPrivacy} // Navigate to Privacy Policy
          onPressIn={() => setHoveredLink("privacy")} // Track hover effect
          onPressOut={() => setHoveredLink(null)} // Reset hover effect
        >
          <Text
            style={[
              styles.linkText,
              hoveredLink === "privacy" && styles.hoverText, // Apply hover effect styling
            ]}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>{" "}
        and{" "}
        <TouchableOpacity
          onPress={handleNavigateToCookies} // Navigate to Cookies Policy
          onPressIn={() => setHoveredLink("cookies")} // Track hover effect
          onPressOut={() => setHoveredLink(null)} // Reset hover effect
        >
          <Text
            style={[
              styles.linkText,
              hoveredLink === "cookies" && styles.hoverText, // Apply hover effect styling
            ]}
          >
            Cookies Policy
          </Text>
        </TouchableOpacity>
        .
      </Text>
  
  
  
  
  
  */}