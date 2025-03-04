import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const EditProfileScreen = ({ route, navigation }) => {
  const { profile } = route.params;
  
  const [userDetails, setUserDetails] = useState({
    name: profile.name,
    email: profile.email,
    password: profile.password,
    dob: profile.dob,
    address: profile.address,
  });

  const handleChange = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };

  const handleSave = () => {
    console.log("Updated User Details:", userDetails);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={userDetails.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userDetails.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={userDetails.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={userDetails.dob}
        onChangeText={(text) => handleChange("dob", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={userDetails.address}
        onChangeText={(text) => handleChange("address", text)}
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
