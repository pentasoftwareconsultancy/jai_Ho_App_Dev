import { Picker } from "@react-native-picker/picker";
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
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; // For Apple icon
import IconFA6 from 'react-native-vector-icons/FontAwesome6'; // For Twitter icon

const LoginSignup = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [language, setLanguage] = useState("English");
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Input Required", "Please enter your email and password.");
      return;
    }
    Alert.alert("Login Successful", "You have successfully logged in.");
  };

  const handleSignUp = () => {
    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Input Required", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }
    Alert.alert("Sign Up Successful", "You have successfully signed up.");
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

          <View style={styles.iconContainer}>
            <IconFA6 name="facebook" size={30} color="#3b5998" style={styles.icon} />
            <IconFA6 name="x-twitter" size={30} color="#000000" style={styles.icon} />
            <Icon name="google" size={30} color="#db4437" style={styles.icon} />
            <IconFA6 name="apple" size={30} color="#000" style={styles.icon} />
          </View>

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

          <View style={styles.iconContainer}>
            <IconFA6 name="facebook" size={30} color="#3b5998" style={styles.icon} />
            <IconFA6 name="x-twitter" size={30} color="#000000" style={styles.icon} />
            <Icon name="google" size={30} color="#db4437" style={styles.icon} />
            <IconFA6 name="apple" size={30} color="#000" style={styles.icon} />
          </View>

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
        </>
      )}
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
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden', // Ensures the dropdown is clipped to the border radius
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#000", // Set text color for the picker
  },
});

export default LoginSignup;


// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
//   Switch,  // Use Switch instead of CheckBox
// } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';  // Correct import for FontAwesome icons

// const LoginSignup = ({ navigation }) => {
//   const [selectedOption, setSelectedOption] = useState("Login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);  // State for password visibility
//   const [hoveredLink, setHoveredLink] = useState(null); // State to track hovered link

//   // Handle Forgot Password Button
//   const handleForgotPassword = () => {
//     Alert.alert("Forgot Password Clicked...");
//   }

//   const handleLogin = () => {
//     if (!email.trim() || !password.trim()) {
//       Alert.alert("Input Required", "Please enter your email and password.");
//       return;
//     }

//     // Here you would typically handle the login logic, e.g., API call
//     Alert.alert("Login Successful", "You have successfully logged in.");
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);  // Toggle password visibility
//   };

//   const handleNavigateToTerms = () => {
//     navigation.navigate('TermsOfService'); // Replace 'TermsOfService' with your screen name
//   };

//   const handleNavigateToPrivacy = () => {
//     navigation.navigate('PrivacyPolicy'); // Replace 'PrivacyPolicy' with your screen name
//   };

//   const handleNavigateToCookies = () => {
//     navigation.navigate('CookiesPolicies'); // Replace 'CookiesPolicy' with your screen name
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require("../../assets/logo.png")} style={styles.logo} />
//       <Text style={styles.title}>Welcome to Jai Ho</Text>
//       <Text style={styles.subtitle}>Scanner for your Organization</Text>

//       <View style={styles.toggleContainer}>
//         <TouchableOpacity
//           style={[
//             styles.toggleButton,
//             selectedOption === "Login" && styles.activeButton,
//           ]}
//           onPress={() => setSelectedOption("Login")}
//         >
//           <Text
//             style={[
//               styles.toggleText,
//               selectedOption === "Login" && styles.activeText,
//             ]}
//           >
//             Login
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.toggleButton,
//             selectedOption === "SignUp" && styles.activeButton,
//           ]}
//           onPress={() => setSelectedOption("SignUp")}
//         >
//           <Text
//             style={[
//               styles.toggleText,
//               selectedOption === "SignUp" && styles.activeText,
//             ]}
//           >
//             SignUp
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {selectedOption === "Login" && (
//         <>
//           <Text style={styles.inputLabel}>Email</Text>
//           <TextInput
//             style={styles.inputField}
//             placeholder="xxxxx@stringconsultants.com"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={setEmail}
//           />

//           <Text style={styles.inputLabel}>Password</Text>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.inputField}
//               placeholder="Your password"
//               secureTextEntry={!isPasswordVisible}  // Conditionally show/hide password
//               value={password}
//               onChangeText={setPassword}
//             />
//             <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
//               <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="#777" />
//             </TouchableOpacity>
//           </View>

//           {/* Align Remember Me and Forgot Password on opposite sides */}
//           <View style={styles.rememberForgotContainer}>
//             <View style={styles.rememberMeContainer}>
//               <Switch
//                 value={rememberMe}
//                 onValueChange={setRememberMe}  // Update rememberMe state on switch toggle
//                 style={styles.switch}  // Style the switch if needed
//               />
//               <Text style={styles.rememberMeText}>Remember Me</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.forgotPasswordButton}
//               onPress={handleForgotPassword}
//             >
//               <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>

//           {/* Add "Already have an account? Sign in" text */}
//           <TouchableOpacity
//             style={styles.signInTextContainer}
//             onPress={() => setSelectedOption("SignUp")}
//           >
//             {/* signUpLink */}
//             <Text style={styles.signInText}>
//             Don’t have an account? <Text style={styles.signUpLink}>Sign up</Text>
//             </Text>
//           </TouchableOpacity>

//           {/* Icons below Forgot Password */}
//           <View style={styles.iconContainer}>
//             <Icon name="facebook" size={30} color="#3b5998" style={styles.icon} />
//             <Icon name="twitter" size={30} color="#00acee" style={styles.icon} />
//             <Icon name="google" size={30} color="#db4437" style={styles.icon} />
//             <Icon name="linkedin" size={30} color="#0077b5" style={styles.icon} />
//             <Icon name="instagram" size={30} color="#e4405f" style={styles.icon} />
//           </View>

//           <Text style={styles.footerText}>
//             By continuing you accept our{" "}
//             <TouchableOpacity
//               onPress={handleNavigateToTerms} // Navigate to Terms of Service
//               onPressIn={() => setHoveredLink("terms")} // Track hover effect
//               onPressOut={() => setHoveredLink(null)} // Reset hover effect
//             >
//               <Text
//                 style={[
//                   styles.linkText,
//                   hoveredLink === "terms" && styles.hoverText, // Apply hover effect styling
//                 ]}
//               >
//                 Terms of Service
//               </Text>
//             </TouchableOpacity>{" "}
//             and{" "}
//             <TouchableOpacity
//               onPress={handleNavigateToPrivacy} // Navigate to Privacy Policy
//               onPressIn={() => setHoveredLink("privacy")} // Track hover effect
//               onPressOut={() => setHoveredLink(null)} // Reset hover effect
//             >
//               <Text
//                 style={[
//                   styles.linkText,
//                   hoveredLink === "privacy" && styles.hoverText, // Apply hover effect styling
//                 ]}
//               >
//                 Privacy Policy
//               </Text>
//             </TouchableOpacity>{" "}
//             and{" "}
//             <TouchableOpacity
//               onPress={handleNavigateToCookies} // Navigate to Cookies Policy
//               onPressIn={() => setHoveredLink("cookies")} // Track hover effect
//               onPressOut={() => setHoveredLink(null)} // Reset hover effect
//             >
//               <Text
//                 style={[
//                   styles.linkText,
//                   hoveredLink === "cookies" && styles.hoverText, // Apply hover effect styling
//                 ]}
//               >
//                 Cookies Policy
//               </Text>
//             </TouchableOpacity>
//             .
//           </Text>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginTop: 60,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#777",
//     marginTop: 5,
//   },
//   toggleContainer: {
//     flexDirection: "row",
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   toggleButton: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#ddd",
//     alignItems: "center",
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   activeButton: {
//     backgroundColor: "#FF9800",
//   },
//   toggleText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   activeText: {
//     color: "#fff",
//   },
//   inputLabel: {
//     fontSize: 16,
//     color: "#777",
//     alignSelf: "flex-start",
//     marginLeft: 20,
//     marginBottom: 5,
//   },
//   inputField: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     position: 'relative',  // Ensure the icon is positioned correctly
//   },

//   eyeIcon: {
//     position: 'absolute',
//     right: 10,  // Place the icon towards the right side
//     top: '40%',  // Position the icon vertically in the center
//     transform: [{ translateY: -12 }],  // Adjust to perfectly center the icon vertically
//     padding: 2,
//   },
//   rememberForgotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 20,
//   },
//   rememberMeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   switch: {
//     marginRight: 10,
//   },
//   rememberMeText: {
//     fontSize: 16,
//     color: '#777',
//   },
//   forgotPasswordText: {
//     fontSize: 16,
//     color: "#777",
//     textDecorationLine: "none",
//   },
//   loginButton: {
//     width: "100%",
//     height: 52,
//     backgroundColor: "#FF9800",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 50,
//     marginTop: 10,
//   },
//   loginButtonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   signInTextContainer: {
//     marginTop: 15,
//   },
//   signInText: {
//     fontSize: 16,
//     color: "#777",
//   },
//   signUpLink: {
//     color: "#FF9800",
//     fontWeight: "bold",
//   },
//   iconContainer: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginTop: 60,
//     width: "100%",
//   },
//   icon: {
//     margin: 5,
//   },
//   footerText: {
//     fontSize: 14,
//     color: "#777",
//     marginTop: 20,
//     textAlign: "center",
//   },
//   linkText: {
//     color: "#007BFF",
//     textDecorationLine: "none",
//   },
//   hoverText: {
//     color: "#0056b3",
//     textDecorationLine: "underline",
//   },
// });

// export default LoginSignup;



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from "react-native";

// // Main component for Login/Signup functionality
// const LoginSignup = ({ navigation }) => {
//   // State hooks for managing input and UI behavior
//   const [selectedOption, setSelectedOption] = useState("Login"); // Tracks selected input type (Login/SignUp)
//   const [inputValue, setInputValue] = useState(""); // Holds the input value for email/phone
//   const [hoveredLink, setHoveredLink] = useState(null); // Tracks which link is hovered

//   // Navigation Handlers
//   const handleNavigateToTerms = () => {
//     navigation.navigate("TermsOfService"); // Navigate to Terms of Service screen
//   };

//   const handleNavigateToPrivacy = () => {
//     navigation.navigate("PrivacyPolicy"); // Navigate to Privacy Policy screen
//   };

//   const handleNavigateToCookies = () => {
//     navigation.navigate("CookiesPolicies"); // Navigate to Cookies Policies screen
//   };

//   // Handler for sending OTP based on selected input option
//   const handleSendOtp = () => {
//     // Input validation
//     if (!inputValue.trim()) {
//       Alert.alert("Input Required", `Please enter your ${selectedOption === "Login" ? "email" : "phone number"}.`);
//       return;
//     }

//     // Navigate to OTP verification screen based on input type (Login or SignUp)
//     if (selectedOption === "SignUp") {
//       navigation.navigate("PhoneOtpVerification");
//     } else {
//       navigation.navigate("OtpVerification");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Image source={require("../../assets/logo.png")} style={styles.logo} />

//       {/* Title and Subtitle */}
//       <Text style={styles.title}>Welcome to Jai Ho</Text>
//       <Text style={styles.subtitle}>Scanner for your Organization</Text>

//       {/* Toggle between Login and SignUp input */}
//       <View style={styles.toggleContainer}>
//         <TouchableOpacity
//           style={[
//             styles.toggleButton,
//             selectedOption === "Login" && styles.activeButton,
//           ]}
//           onPress={() => setSelectedOption("Login")}
//         >
//           <Text
//             style={[
//               styles.toggleText,
//               selectedOption === "Login" && styles.activeText,
//             ]}
//           >
//             Login
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.toggleButton,
//             selectedOption === "SignUp" && styles.activeButton,
//           ]}
//           onPress={() => setSelectedOption("SignUp")}
//         >
//           <Text
//             style={[
//               styles.toggleText,
//               selectedOption === "SignUp" && styles.activeText,
//             ]}
//           >
//             SignUp
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Dynamic Input Field based on selected option */}
//       <Text style={styles.inputLabel}>
//         {selectedOption === "Login" ? "Email" : "Phone No"}
//       </Text>
//       <TextInput
//         style={styles.inputField}
//         placeholder={
//           selectedOption === "Login"
//             ? "xxxxx@stringconsultants.com" // Placeholder for email
//             : "Enter your phone number" // Placeholder for phone number
//         }
//         keyboardType={selectedOption === "Login" ? "email-address" : "phone-pad"} // Set keyboard type dynamically
//         value={inputValue}
//         onChangeText={setInputValue} // Update input value
//       />

//       {/* OTP Button */}
//       <TouchableOpacity style={styles.otpButton} onPress={handleSendOtp}>
//         <Text style={styles.otpButtonText}>Send OTP</Text>
//       </TouchableOpacity>

//       {/* Footer with Links */}
//       <Text style={styles.footerText}>
//         By continuing you accept our{" "}
//         <TouchableOpacity
//           onPress={handleNavigateToTerms} // Navigate to Terms of Service
//           onPressIn={() => setHoveredLink("terms")} // Track hover effect
//           onPressOut={() => setHoveredLink(null)} // Reset hover effect
//         >
//           <Text
//             style={[
//               styles.linkText,
//               hoveredLink === "terms" && styles.hoverText, // Apply hover effect styling
//             ]}
//           >
//             Terms of Service
//           </Text>
//         </TouchableOpacity>{" "}
//         and{" "}
//         <TouchableOpacity
//           onPress={handleNavigateToPrivacy} // Navigate to Privacy Policy
//           onPressIn={() => setHoveredLink("privacy")} // Track hover effect
//           onPressOut={() => setHoveredLink(null)} // Reset hover effect
//         >
//           <Text
//             style={[
//               styles.linkText,
//               hoveredLink === "privacy" && styles.hoverText, // Apply hover effect styling
//             ]}
//           >
//             Privacy Policy
//           </Text>
//         </TouchableOpacity>{" "}
//         and{" "}
//         <TouchableOpacity
//           onPress={handleNavigateToCookies} // Navigate to Cookies Policy
//           onPressIn={() => setHoveredLink("cookies")} // Track hover effect
//           onPressOut={() => setHoveredLink(null)} // Reset hover effect
//         >
//           <Text
//             style={[
//               styles.linkText,
//               hoveredLink === "cookies" && styles.hoverText, // Apply hover effect styling
//             ]}
//           >
//             Cookies Policy
//           </Text>
//         </TouchableOpacity>
//         .
//       </Text>
//     </View>
//   );
// };

// // Styles for the component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginTop: 60,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#777",
//     marginTop: 5,
//   },
//   toggleContainer: {
//     flexDirection: "row",
//     marginTop: 100,
//     marginBottom: 20,
//   },
//   toggleButton: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#ddd",
//     alignItems: "center",
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   activeButton: {
//     backgroundColor: "#FF9800",
//   },
//   toggleText: {
//     fontSize: 16,
//     color: "#000",
//   },
//   activeText: {
//     color: "#fff",
//   },
//   inputLabel: {
//     fontSize: 16,
//     color: "#777",
//     alignSelf: "flex-start",
//     marginLeft: 20,
//     marginBottom: 5,
//   },
//   inputField: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   otpButton: {
//     width: "100%",
//     height: 52,
//     backgroundColor: "#FF9800",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 50,
//     marginTop: 10,
//   },
//   otpButtonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   footerText: {
//     fontSize: 14,
//     color: "#777",
//     marginTop: 20,
//     textAlign: "center",
//   },
//   linkText: {
//     color: "#007BFF",
//     textDecorationLine: "underline",
//   },
//   hoverText: {
//     color: "#0056b3",
//     textDecorationLine: "underline",
//   },
// });

// export default LoginSignup;