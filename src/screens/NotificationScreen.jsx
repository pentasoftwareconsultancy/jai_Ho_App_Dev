import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const notifications = [
  {
    id: "1",
    section: "Today",
    notifications: [
      {
        id: "1-1",
        avatar: "https://via.placeholder.com/50",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "9:01am",
      },
      {
        id: "1-2",
        avatar: "https://via.placeholder.com/50",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "9:01am",
      },
      {
        id: "1-3",
        avatar: "https://via.placeholder.com/50",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "9:01am",
      },
    ],
  },
  {
    id: "2",
    section: "Yesterday",
    notifications: [
      {
        id: "2-1",
        avatar: "https://via.placeholder.com/50",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "9:01am",
      },
      {
        id: "2-2",
        avatar: "https://via.placeholder.com/50",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "9:01am",
      },
    ],
  },
  {
    id: "3",
    section: "This Week",
    notifications: [
      {
        id: "3-1",
        avatar: "https://via.placeholder.com/50",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "9:01am",
      },
    ],
  },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi Dhiraj!</Text>
      <Text style={styles.subHeader}>Good Morning!</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionHeader}>{item.section}</Text>
            {item.notifications.map((notification) => (
              <View key={notification.id} style={styles.notificationCard}>
                <Image
                  source={{ uri: notification.avatar }}
                  style={styles.avatar}
                />
                <View style={styles.notificationText}>
                  <Text style={styles.message}>{notification.message}</Text>
                  <Text style={styles.time}>{notification.time}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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