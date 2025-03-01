import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Location from "expo-location";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const fetchCurrentLocation = async () => {
    if (!hasPermission) return;
    setLoading(true);
    try {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const geocode = await Location.reverseGeocodeAsync(coords);
      setCity(geocode[0]?.city || "Unknown");
    } catch {
      setCity("Error fetching location");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (hasPermission) fetchCurrentLocation();
  }, [hasPermission]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F7" }}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <View style={styles.profile}>
            <Image
              alt=""
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }}
              style={styles.profileAvatar}
            />

            <Text style={styles.profileName}>John Doe</Text>

            <Text style={styles.profileEmail}>john.doe@mail.com</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Edit Profile</Text>

                <FeatherIcon color="#fff" name="edit" size={16} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#fe9400" }]}
                  >
                    <FeatherIcon color="#fff" name="globe" size={20} />
                  </View>

                  <Text style={styles.rowLabel}>Language</Text>

                  <View style={styles.rowSpacer} />

                  <Text style={styles.rowValue}>English</Text>

                  <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#007AFF" }]}
                  >
                    <FeatherIcon color="#fff" name="moon" size={20} />
                  </View>

                  <Text style={styles.rowLabel}>Dark Mode</Text>

                  <View style={styles.rowSpacer} />

                  <Switch
                    onValueChange={(darkMode) => setForm({ ...form, darkMode })}
                    value={form.darkMode}
                  />
                </View>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={fetchCurrentLocation}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#32c759" }]}
                  >
                    <FeatherIcon color="#fff" name="navigation" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Location</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>
                    {loading ? "Loading..." : city || "Unknown"}
                  </Text>
                  <Feather name="refresh-cw" size={20} color="#888" />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                    navigation.navigate("Podcast");
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#32c759" }]}
                  >
                    <Fontisto color="#fff" name="applemusic" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Podcasts</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Podcasts</Text>
                  <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <View style={styles.sectionBody}>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                    navigation.navigate("Music");
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#FE3C30" }]}
                  >
                    <FeatherIcon color="#fff" name="music" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Music</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Songs</Text>
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle gallery navigation or action
                    navigation.navigate("Gallery");
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#FFA500" }]} // Change background color for gallery theme
                  >
                    <FeatherIcon
                      color="#fff"
                      name="image" // Use the gallery icon name from Feather Icons
                      size={20}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Photo Gallery</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>My Albums</Text>{" "}
                  {/* Optional, update as needed */}
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle gallery navigation or action
                    navigation.navigate("Donation");
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#FFA500" }]} // Change background color for gallery theme
                  >
                    <MaterialIcons
                      color="#fff"
                      name="attach-money" // Use the gallery icon name from Feather Icons
                      size={20}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Donation</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>donation</Text>{" "}
                  {/* Optional, update as needed */}
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle gallery navigation or action
                    navigation.navigate("ystore");
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#FFA500" }]} // Change background color for gallery theme
                  >
                    <MaterialIcons
                      color="#fff"
                      name="attach-money" // Use the gallery icon name from Feather Icons
                      size={20}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Y-Store</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Y-Store</Text>{" "}
                  {/* Optional, update as needed */}
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle gallery navigation or action
                    navigation.navigate("favourites");
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#FFA500" }]} // Change background color for gallery theme
                  >
                    <MaterialIcons
                      color="#fff"
                      name="image" // Use the gallery icon name from Feather Icons
                      size={20}
                    />
                  </View>
                  <Text style={styles.rowLabel}>My Yuja Library</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>My Yuja Library</Text>{" "}
                  {/* Optional, update as needed */}
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    marginTop: 6,
  },
  /** Profile */
  profile: {
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "600",
    color: "#090909",
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#848484",
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  /** Section */
  section: {
    paddingTop: 12,
  },
  sectionTitle: {
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  sectionBody: {
    paddingLeft: 24,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  /** Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 16,
    height: 50,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: "500",
    color: "#8B8B8B",
    marginRight: 4,
  },
});