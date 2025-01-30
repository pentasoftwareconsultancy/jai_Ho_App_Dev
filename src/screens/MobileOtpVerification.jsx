import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const MobileOtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input if a number is entered
    if (text && index < 5) {
      const nextInput = index + 1;
      if (refs[nextInput]?.current) {
        refs[nextInput].current.focus();
      }
    }
  };

  // Array of refs for each input field
  const refs = Array(6)
    .fill(null)
    .map(() => React.createRef());

  const isOtpFilled = otp.every((digit) => digit !== "");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Mobile OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the verification code we just sent to your mobile number
        {"\n"}+1-234-567-8901
      </Text>

      {/* OTP Input Fields */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={[styles.otpInput, value && styles.otpInputActive]}
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            returnKeyType="next"
            placeholder="0"
            accessibilityLabel={`OTP Input ${index + 1}`}
          />
        ))}
      </View>

      {/* Resend Link */}
      <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn’t receive the code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </TouchableOpacity>

      {/* Verify Button */}
      <TouchableOpacity
        style={[styles.verifyButton, isOtpFilled && styles.verifyButtonActive]}
        disabled={!isOtpFilled}
      >
        <LinearGradient
          colors={isOtpFilled ? ["#FFA726", "#FB8C00"] : ["#d3d3d3", "#d3d3d3"]}
          style={styles.gradientButton}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
    width: "80%",
    paddingHorizontal: 10, // Added for spacing
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
    flex: 1, // Added for proportional width
    padding: 0, // Ensure no internal padding
  },
  otpInputActive: {
    borderColor: "#FFA726",
  },
  resendText: {
    fontSize: 14,
    color: "#777",
    marginTop: 10,
  },
  resendLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  verifyButton: {
    marginTop: 30,
    width: "80%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyButtonActive: {
    elevation: 5,
  },
  gradientButton: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MobileOtpVerification;
