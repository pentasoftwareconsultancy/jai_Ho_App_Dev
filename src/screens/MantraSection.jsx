import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const mantraData = [
  {
    id: "1",
    title: "Om Hanumate Namah",
    views: "125,908 views",
    days: "2 days ago",
    image: "https://linktoimage1.com", // Replace with your image URL
    type: "audio",
  },
  {
    id: "2",
    title: "Hanuman Chalisa",
    views: "98,102 views",
    days: "3 days ago",
    image: "https://linktoimage2.com", // Replace with your image URL
    type: "video",
  },
];

export default function MantraSection() {
  const [selectedMantra, setSelectedMantra] = useState(null);

  const renderMantra = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedMantra(item)}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDetails}>{item.views}</Text>
        <Text style={styles.cardDetails}>{item.days}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedMantra ? (
        <View style={styles.playerContainer}>
          {selectedMantra.type === "video" ? (
            <Video
              source={{ uri: "https://linktovideo.com" }} // Replace with video URL
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              style={styles.videoPlayer}
            />
          ) : (
            <View style={styles.audioPlayer}>
              <AntDesign name="playcircleo" size={50} color="orange" />
              <Text style={styles.audioText}>{selectedMantra.title}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedMantra(null)}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={mantraData}
          renderItem={renderMantra}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    padding: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: "#666",
  },
  playerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoPlayer: {
    width: "100%",
    height: 200,
  },
  audioPlayer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  audioText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});