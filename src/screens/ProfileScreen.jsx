import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const ProfileDetails = () => (
    <View style={styles.profileDetails}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value="Ram Sharma" editable={false} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value="Ramsharma@gmail.com"
        editable={false}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value="********"
        secureTextEntry={true}
        editable={false}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.input} value="23/05/2000" editable={false} />

      <Text style={styles.label}>Country/Region</Text>
      <TextInput style={styles.input} value="Pune" editable={false} />
    </View>
  );

  const PackageDetails = () => (
    <View style={styles.packageDetails}>
      <Text style={styles.sectionTitle}>Package Types</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.packageCard}>
          <Text style={styles.packageTitle}>Gold</Text>
          <Text style={styles.packageCount}>24</Text>
        </View>
        <View style={styles.packageCard}>
          <Text style={styles.packageTitle}>Silver</Text>
          <Text style={styles.packageCount}>18</Text>
        </View>
        <View style={styles.packageCard}>
          <Text style={styles.packageTitle}>Bronze</Text>
          <Text style={styles.packageCount}>11</Text>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Facilities</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.facilityCard}>
          <Text style={styles.facilityTitle}>Food Safety Protocols</Text>
          <Text style={styles.facilityStatus}>Bronze Certified</Text>
        </View>
        <View style={styles.facilityCard}>
          <Text style={styles.facilityTitle}>Facilities & Maintenance</Text>
          <Text style={styles.facilityStatus}>Silver Certified</Text>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hi Ram Sharma!</Text>
        <Image
          source={{
            uri: "https://via.placeholder.com/50",
          }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Profile" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Profile")}
        >
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Package" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Package")}
        >
          <Text style={styles.tabText}>Package</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {activeTab === "Profile" ? <ProfileDetails /> : <PackageDetails />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 20,
    color: "#FFA500",
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#FFA500",
  },
  tabText: {
    fontSize: 16,
  },
  profileDetails: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F3F3F3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  packageDetails: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  packageCard: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  packageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  packageCount: {
    fontSize: 14,
    color: "#fff",
  },
  facilityCard: {
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  facilityTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  facilityStatus: {
    fontSize: 12,
    color: "#FFA500",
  },
});

export default ProfileScreen;