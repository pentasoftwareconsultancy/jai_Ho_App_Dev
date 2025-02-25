import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  LinearGradient,
} from "react-native";
import { Camera } from "expo-camera";
import QRCode from "react-native-qrcode-svg";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

export default function YujaScanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
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

  const Logo = () => (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>☁️</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PSS test</Text>
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
          <ExpoLinearGradient
            colors={['#00F5A0', '#00D9F5', '#FF47ED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientContainer}
          >
            <View style={styles.qrCodeContainer}>
              <QRCode
                value="https://www.nexusctc.com/"
                size={200}
                logo={Logo}
                logoSize={30}
                logoBackgroundColor="white"
                backgroundColor="white"
                color="black"
              />
            </View>
          </ExpoLinearGradient>
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
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  gradientContainer: {
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  qrCodeContainer: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    elevation: 2,
  },
  logoContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logoText: {
    fontSize: 20,
  },
  scanButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#6ec1e4",
    borderRadius: 8,
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