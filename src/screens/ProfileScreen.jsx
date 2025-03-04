// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons"; // Import icon
// import UserProfile from "../../assets/images/hanuman.jpg"; // Ensure the image exists
// import { useNavigation } from "@react-navigation/native";

// const ProfileScreen = () => {
//   const [profile, setProfile] = useState({
//     image: UserProfile,
//   });

//     const navigation = useNavigation();
  

//   const MenuItem = ({ title, onPress }) => (
//     <TouchableOpacity style={styles.menuItem} onPress={onPress}>
//       <Text style={styles.menuText}>{title}</Text>
//       <Icon name="chevron-right" size={24} color="#777" /> {/* Arrow Icon */}
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Profile Image */}
//         <View style={styles.profileSection}>
//           <Image source={profile.image} style={styles.profileImage} />
//           <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("EditProfileScreen") }>
//             <Text style={styles.editButtonText}>Edit Profile</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Menu Items with Arrows */}
//         <MenuItem title="Settings" onPress={() => {}} />
//         <MenuItem title="Billing Address" onPress={() => {}} />
//         <MenuItem title="User Management" onPress={() => {}} />
//         <MenuItem title="Information" onPress={() => {}} />
//         <MenuItem title="Logout" onPress={() => {}} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//   },
//   scrollContainer: {
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   profileSection: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 10,
//   },
//   editButton: {
//     backgroundColor: "#FFA500",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   editButtonText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   menuItem: {
//     width: "100%",
//     flexDirection: "row", // Align text & arrow
//     justifyContent: "space-between", // Space between text & icon
//     alignItems: "center",
//     backgroundColor: "#F3F3F3",
//     padding: 15,
//     borderRadius: 8,
//     marginVertical: 8,
//   },
//   menuText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default ProfileScreen;


import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import UserProfile from "../../assets/images/hanuman.jpg"; // Your local image

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [profile, setProfile] = useState({
    image: UserProfile,
    name: "Ankit Lal Sinha",
    email: "ankitsinha25061909@gmail.com",
    password: "password123",
    dob: "1999-06-25",
    address: "Patna, Bihar, India",
  });

  const MenuItem = ({ title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
      <Icon name="chevron-right" size={24} color="#777" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Image */}
        <View style={styles.profileSection}>
          <Image source={profile.image} style={styles.profileImage} />

          {/* Display Name and Email */}
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfileScreen", { profile })}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <MenuItem title="Settings" onPress={() => {}} />
        <MenuItem title="Billing Address" onPress={() => {}} />
        <MenuItem title="User Management" onPress={() => {}} />
        <MenuItem title="Information" onPress={() => {}} />
        <MenuItem title="Logout" onPress={() => {}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  menuItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
