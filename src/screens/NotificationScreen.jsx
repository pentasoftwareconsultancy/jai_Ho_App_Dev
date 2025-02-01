import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const localAvatar = require('../../assets/images/testimonialimage.png');

const notifications = [
  {
    id: "1",
    section: "Today, September",
    notifications: [
      { id: "1-1", avatar: localAvatar, message: "You have a new message from John.", time: "9:01am" },
      { id: "1-2", avatar: localAvatar, message: "Your order has been shipped.", time: "10:15am" },
      { id: "1-3", avatar: localAvatar, message: "Reminder: Meeting at 2:00 PM.", time: "11:30am" },
      { id: "1-4", avatar: localAvatar, message: "Your payment was successful.", time: "1:45pm" },
    ],
  },
  {
    id: "2",
    section: "Yesterday, September",
    notifications: [
      { id: "2-1", avatar: localAvatar, message: "You received a new follower.", time: "8:00am" },
      { id: "2-2", avatar: localAvatar, message: "Your post got 10 likes.", time: "12:00pm" },
      { id: "2-3", avatar: localAvatar, message: "Reminder: Call Sarah at 5:00 PM.", time: "4:30pm" },
    ],
  },
  {
    id: "3",
    section: "This Week, September",
    notifications: [
      { id: "3-1", avatar: localAvatar, message: "Your subscription is about to expire.", time: "9:00am" },
      { id: "3-2", avatar: localAvatar, message: "You have a new friend request.", time: "3:00pm" },
      { id: "3-3", avatar: localAvatar, message: "Your review has been published.", time: "6:00pm" },
    ],
  },
  {
    id: "4",
    section: "Last Week, August",
    notifications: [
      { id: "4-1", avatar: localAvatar, message: "Your account has been verified.", time: "10:00am" },
      { id: "4-2", avatar: localAvatar, message: "You earned a new badge.", time: "2:00pm" },
      { id: "4-3", avatar: localAvatar, message: "Your feedback has been received.", time: "5:00pm" },
    ],
  },
];

export default function NotificationScreen() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi Ankit!</Text>
      <Text style={styles.subHeader}>Good Morning!</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>{item.section}</Text>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity onPress={() => toggleSection(item.id)}>
                  <Text style={styles.seeAllText}>{expandedSections[item.id] ? "See Less" : "See All"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleSection(item.id)}>
                  <Icon name={expandedSections[item.id] ? "expand-less" : "chevron-right"} size={24} color="#333" />
                </TouchableOpacity>
              </View>
            </View>
            {(expandedSections[item.id] ? item.notifications : item.notifications.slice(0, 2)).map((notification) => (
              <View key={notification.id} style={styles.notificationCard}>
                <Image source={notification.avatar} style={styles.avatar} />
                <View style={styles.notificationText}>
                  <Text style={styles.message}>{notification.message}</Text>
                  <Text style={styles.time}>{notification.time}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 16,
    color: "#555",
    marginRight: 10,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  notificationText: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#888",
  },
});
