// SelectDifficulty.js
import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

const SelectDifficulty = ({ navigation }) => {
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{"< Back"}</Text>
      </TouchableOpacity>
      <Text style={styles.greeting}>Hi Dhiraj!</Text>
      <Text style={styles.subText}>Good Morning!</Text>
      <Text style={styles.title}>Select Your {"\n"}Level of Difficulty</Text>
      <View style={styles.levelContainer}>
        {levels.map((level, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.levelButton, index === 2 && styles.levelButtonActive]}
            onPress={() => navigation.navigate("LearnHanumanChalisa")}
          >
            <Text style={styles.levelText}>{level}</Text>
            <Text style={styles.levelDescription}>
              {index === 0
                ? "Don’t know Hanuman Chalisa or any other scriptures."
                : index === 1
                ? "Know some verses of Hanuman Chalisa or other scriptures."
                : "Know many verses of Hanuman Chalisa but not fully."}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.beginButton}>
        <Text style={styles.beginButtonText}>BEGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here (same as the styles in the original file for SelectDifficulty)
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  backText: {
    fontSize: 16,
    color: "#FFA500",
    fontWeight: "bold",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subText: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  levelContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  levelButton: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  levelButtonActive: {
    borderColor: "#FFA500",
    borderWidth: 2,
    shadowOpacity: 0.2,
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  levelDescription: {
    fontSize: 14,
    color: "#555",
  },
  beginButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  beginButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default SelectDifficulty;
