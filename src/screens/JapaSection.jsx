import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert,
} from "react-native";

const JapaSection = () => {
  const [chantCount, setChantCount] = useState(11);
  const [currentCount, setCurrentCount] = useState(0);
  const [mode, setMode] = useState("Sound"); // Options: Sound, Vibrate, Both
  const [isJapaActive, setIsJapaActive] = useState(false);

  const mantras = [
    {
      id: "1",
      name: "Om Hanumate Namah",
      description: "Lorem ipsum dolor sit amet",
      image: "https://via.placeholder.com/80",
      rating: 4.9,
      duration: "6h 30min",
      favorite: false,
    },
    {
      id: "2",
      name: "Om Shri Ram Jai Ram Jai Jai Ram",
      description: "Lorem ipsum dolor sit amet",
      image: "https://via.placeholder.com/80",
      rating: 4.8,
      duration: "4h 15min",
      favorite: true,
    },
    // Add more mantras here
  ];

  const startJapa = () => {
    if (!chantCount) {
      Alert.alert("Select a chant count");
      return;
    }
    setCurrentCount(0);
    setIsJapaActive(true);
  };

  const stopJapa = () => {
    setIsJapaActive(false);
  };

  const toggleFavorite = (id) => {
    const updatedMantras = mantras.map((mantra) =>
      mantra.id === id ? { ...mantra, favorite: !mantra.favorite } : mantra
    );
    console.log(updatedMantras);
  };

  const handleChant = () => {
    if (currentCount < chantCount) {
      setCurrentCount(currentCount + 1);
    } else {
      Alert.alert("Japa Complete!", "You have completed the selected chants.");
      setIsJapaActive(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Om Hanumate Namah</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150",
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.subHeading}>How many times do you want to chant?</Text>
      <View style={styles.counterContainer}>
        {[11, 21, 54, 108].map((count) => (
          <TouchableOpacity
            key={count}
            style={[
              styles.countButton,
              chantCount === count && styles.activeCountButton,
            ]}
            onPress={() => setChantCount(count)}
          >
            <Text
              style={[
                styles.countButtonText,
                chantCount === count && styles.activeCountButtonText,
              ]}
            >
              {count}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.modeContainer}>
        {["Sound", "Vibrate", "Both"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.modeButton,
              mode === item && styles.activeModeButton,
            ]}
            onPress={() => setMode(item)}
          >
            <Text
              style={[
                styles.modeButtonText,
                mode === item && styles.activeModeButtonText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={isJapaActive ? stopJapa : startJapa}
      >
        <Text style={styles.startButtonText}>
          {isJapaActive ? "Stop Japa" : "Start Japa"}
        </Text>
      </TouchableOpacity>
      {isJapaActive && (
        <TouchableOpacity
          style={styles.chantButton}
          onPress={handleChant}
        >
          <Text style={styles.chantButtonText}>
            Chant Count: {currentCount}/{chantCount}
          </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.listHeading}>Available Mantras</Text>
      <FlatList
        data={mantras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.mantraItem}>
            <Image source={{ uri: item.image }} style={styles.mantraImage} />
            <View style={styles.mantraInfo}>
              <Text style={styles.mantraName}>{item.name}</Text>
              <Text style={styles.mantraDescription}>{item.description}</Text>
              <Text style={styles.mantraRating}>⭐ {item.rating}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Text style={styles.favorite}> {item.favorite ? "❤️" : "🤍"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default JapaSection;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  subHeading: { fontSize: 18, marginVertical: 10, textAlign: "center" },
  imageContainer: { alignItems: "center", marginVertical: 20 },
  image: { width: 150, height: 150, borderRadius: 75 },
  counterContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  countButton: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  activeCountButton: { backgroundColor: "#ff9800", borderColor: "#ff9800" },
  countButtonText: { fontSize: 16, color: "#333" },
  activeCountButtonText: { color: "#fff" },
  modeContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 20 },
  modeButton: {
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  activeModeButton: { backgroundColor: "#ff9800", borderColor: "#ff9800" },
  modeButtonText: { fontSize: 16, color: "#333" },
  activeModeButtonText: { color: "#fff" },
  startButton: {
    backgroundColor: "#ff9800",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  startButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  chantButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  chantButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  listHeading: { fontSize: 20, fontWeight: "bold", marginTop: 20 },
  mantraItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  mantraImage: { width: 80, height: 80, borderRadius: 5, marginRight: 10 },
  mantraInfo: { flex: 1 },
  mantraName: { fontSize: 16, fontWeight: "bold" },
  mantraDescription: { fontSize: 14, color: "#777" },
  mantraRating: { fontSize: 14, color: "#ff9800" },
  favorite: { fontSize: 18, marginHorizontal: 10 },
});