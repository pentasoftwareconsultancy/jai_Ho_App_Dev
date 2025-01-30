import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen"; // Add your settings screen
import YujaScanner from "../screens/YujaScanner";
import ProfileScreen from "../screens/ProfileScreen";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

  const navigation = useNavigation();
  const hasNotifications = true; // Replace with your logic for notifications

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Scanner") {
            iconName = focused ? "scanner" : "qr-code-scanner";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        headerRight: () =>
          route.name === "Home" ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              // onPress={() => Alert.alert("Notifications", "You have new notifications!")}
              style={styles.notificationIconContainer}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
              {hasNotifications && <View style={styles.redDot} />}
            </TouchableOpacity>
          ) : null,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Scanner" component={YujaScanner} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#fff",
    borderTopWidth: 2,
    borderTopColor: "#ccc",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  tabBarIconStyle: {
    padding: 5,
  },
  notificationIconContainer: {
    marginRight: 20, // Spacing from the right edge
    position: "relative", // Allows positioning of the red dot
  },
  redDot: {
    position: "absolute",
    top: -2, // Adjust position above the icon
    right: 1, // Adjust position to the right of the icon
    width: 10, // Diameter of the dot
    height: 10, // Diameter of the dot
    borderRadius: 5, // Make it a circle
    backgroundColor: "red", // Red color for the dot
  },
});

export default BottomNavigator;
