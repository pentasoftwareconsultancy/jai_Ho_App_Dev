import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import QRCode from "react-native-qrcode-svg";

export default function YujaScanner() {
  const [hasPermission, setHasPermission] = useState(false);  // Default to false
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
    // Request camera permission when component is mounted
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
    } else {
      setHasPermission(false);
      Alert.alert("Permission Denied", "Camera permission is required to scan QR codes.");
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setIsCameraActive(false);
    Alert.alert("QR Code Scanned!", `Data: ${data}`);
  };

  const handleScanCode = async () => {
    if (hasPermission) {
      setIsCameraActive(true);
    } else {
      Alert.alert("Permission Required", "Please allow camera access to scan codes.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Yuja Scan</Text>
      {isCameraActive && hasPermission ? (
        <Camera
          style={styles.camera}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        >
          <TouchableOpacity
            style={styles.closeCamera}
            onPress={() => setIsCameraActive(false)}
          >
            <Text style={styles.closeCameraText}>Close</Text>
          </TouchableOpacity>
        </Camera>
      ) : (
        <>
          <View style={styles.qrCodeContainer}>
            <Text style={styles.userName}>Y</Text>
            <QRCode value="https://your-app-link.com" size={150} />
          </View>
          <TouchableOpacity style={styles.scanButton} onPress={handleScanCode}>
            <Text style={styles.scanButtonText}>SCAN CODE</Text>
          </TouchableOpacity>
          {!hasPermission && (
            <Text style={styles.permissionText}>Please grant camera permission to scan codes.</Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrCodeContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  userName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
  },
  scanButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#6ec1e4",
    borderRadius: 5,
    alignItems: "center",
  },
  scanButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  camera: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  closeCamera: {
    backgroundColor: "#f05a28",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  closeCameraText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  permissionText: {
    marginTop: 20,
    color: "#ff0000",
    fontSize: 14,
    textAlign: "center",
  },
});
