import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Switch,
  ScrollView,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFA6 from 'react-native-vector-icons/FontAwesome6';
// import auth from '@react-native-firebase/auth';

const LoginSignup = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Input Required", "Please enter your email and password.");
      return;
    }

    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      Alert.alert("Login Successful", "You have successfully logged in.");
      navigation.navigate("Home"); // Navigate to the home screen or dashboard
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  const handleSignUp = async () => {
    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Input Required", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: fullName });
      Alert.alert("Sign Up Successful", "You have successfully signed up.");
      navigation.navigate("Home"); // Navigate to the home screen or dashboard
    } catch (error) {
      Alert.alert("Sign Up Failed", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleNavigateToTerms = () => {
    navigation.navigate('TermsOfService');
  };

  const handleNavigateToPrivacy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleNavigateToCookies = () => {
    navigation.navigate('CookiesPolicies');
  };

  const handleSocialIconPress = (platform) => {
    Alert.alert(`Social Icon Pressed`, `You pressed the ${platform} icon.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to Jai Ho</Text>
      <Text style={styles.subtitle}>Scanner for your Organization</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === "Login" && styles.activeButton,
          ]}
          onPress={() => setSelectedOption("Login")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedOption === "Login" && styles.activeText,
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedOption === "SignUp" && styles.activeButton,
          ]}
          onPress={() => setSelectedOption("SignUp")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedOption === "SignUp" && styles.activeText,
            ]}
          >
            SignUp
          </Text>
        </TouchableOpacity>
      </View>

      {selectedOption === "Login" && (
        <>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="xxxxx@stringconsultants.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Your password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#777" />
            </TouchableOpacity>
          </View>

          <View style={styles.rememberForgotContainer}>
            <View style={styles.rememberMeContainer}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                style={styles.switch}
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signInTextContainer}
            onPress={() => setSelectedOption("SignUp")}
          >
            <Text style={styles.signInText}>
              Don’t have an account? <Text style={styles.signUpLink}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </>
      )}

      {selectedOption === "SignUp" && (
        <>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Your full name"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="xxxxx@stringconsultants.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Your password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#777" />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="Confirm your password"
              secureTextEntry={!isConfirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
              <Icon name={isConfirmPasswordVisible ? "eye-slash" : "eye"} size={20} color="#777" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signInTextContainer}
            onPress={() => setSelectedOption("Login")}
          >
            <Text style={styles.signInText}>
              Already have an account? <Text style={styles.signUpLink}>Login</Text>
            </Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.footerText}>
        By continuing you accept our{" "}
        <TouchableOpacity onPress={handleNavigateToTerms}>
          <Text style={styles.linkText}>Terms of Service</Text>
        </TouchableOpacity>{" "}
        and{" "}
        <TouchableOpacity onPress={handleNavigateToPrivacy}>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>{" "}
        and{" "}
        <TouchableOpacity onPress={handleNavigateToCookies}>
          <Text style={styles.linkText}>Cookies Policy</Text>
        </TouchableOpacity>
        .
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginTop: 30,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '40%',
    transform: [{ translateY: -12 }],
    padding: 2,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 16,
    color: '#777',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "#777",
    textDecorationLine: "none",
  },
  loginButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  signInTextContainer: {
    marginTop: 15,
  },
  signInText: {
    fontSize: 16,
    color: "#777",
  },
  signUpLink: {
    color: "#FF9800",
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 60,
    width: "100%",
  },
  icon: {
    margin: 5,
  },
  googleicon: {
    margin: 5,
  },
  footerText: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
    textAlign: "center",
  },
  linkText: {
    color: "#007BFF",
    textDecorationLine: "none",
  },
});

export default LoginSignup;