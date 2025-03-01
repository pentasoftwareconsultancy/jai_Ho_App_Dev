import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ReadyToExplore = () => {
  const navigation = useNavigation();
  const handleBackToLogin = () => {
    // Navigate back to the login screen
    navigation.reset({
      index:0,
      routes:[{name:"Main"}]
    }); // Adjust the route name to match your navigation setup
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Ready to Explore!</Text>
      <Text style={styles.subtitle}>
        Your account password has been changed successfully.
      </Text>

      {/* Back to Login Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleBackToLogin}
      >
        <Text style={styles.buttonText}>Ready to Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 30,
  },
  confirmButton: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FB8C00", // Solid color background
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ReadyToExplore;
