import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid = newPassword && confirmPassword && newPassword === confirmPassword;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={{ uri: "https://your-logo-url.com/logo.png" }}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Set New Password</Text>

      {/* New Password Field */}
      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter new password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      {/* Confirm Password Field */}
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Confirm Button */}
      <TouchableOpacity
        style={[styles.confirmButton, isFormValid && styles.activeButton]}
        disabled={!isFormValid}
      >
        <LinearGradient
          colors={isFormValid ? ["#FFA726", "#FB8C00"] : ["#d3d3d3", "#d3d3d3"]}
          style={styles.gradientButton}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By continuing you accept our{" "}
        <Text style={styles.linkText}>Terms of Service</Text>.{" "}
        <Text style={styles.linkText}>Privacy Policy</Text> and{" "}
        <Text style={styles.linkText}>Cookies policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "#000",
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
  label: {
    fontSize: 16,
    color: "#777",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  inputField: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  confirmButton: {
    marginTop: 30,
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    elevation: 5,
  },
  gradientButton: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButtonText: {
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
});

export default ResetPassword;