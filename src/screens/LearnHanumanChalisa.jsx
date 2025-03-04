import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import * as Progress from "react-native-progress";

const LearnHanumanChalisa = ({ navigation }) => {
  const [progress, setProgress] = useState(0.76); // 76% completed

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <Progress.Bar progress={progress} width={300} color="#FFA500" />
        <Text style={styles.progressText}>{Math.floor(progress * 100)}% completed</Text>
      </View>
      <TouchableOpacity
        style={styles.sayButton}
        onPress={() => navigation.navigate("SelectDifficulty")}
      >
        <Text style={styles.sayText}>GO TO DIFFICULTY SELECTION</Text>
      </TouchableOpacity>
      <Text style={styles.chalisaText}>
        श्रीगुरु चरण सरोज रज निज मनु मुकुरु सुधारि | {"\n"}
        बरनऊं रघुबर बिमल जसु जो दायकु फल चारि ॥
      </Text>
      <View style={styles.audioControls}>
        <TouchableOpacity>
          <Text style={styles.audioControlText}>⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.audioControlText}>⏯</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.audioControlText}>⏭</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here (same as the styles in the original file for LearnHanumanChalisa)
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
  progressContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  sayButton: {
    backgroundColor: "#FFA500",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  sayText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  chalisaText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
    lineHeight: 25,
  },
  audioControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  audioControlText: {
    fontSize: 30,
    color: "#FFA500",
    fontWeight: "bold",
  },
});

export default LearnHanumanChalisa;
