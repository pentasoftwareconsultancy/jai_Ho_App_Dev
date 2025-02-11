import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Import your local images
const templeImages = {
  premalHanuman: require('../../assets/images/premal-hanuman.jpg'),
  shaniTemple: require('../../assets/images/shani-temple.jpg'),
  dagdusheth: require('../../assets/images/dagdusheth.jpg'),
  iskcon: require('../../assets/images/iskcon.jpg'),
  parvati: require('../../assets/images/parvati.jpg'),
  siddhivinayak: require('../../assets/images/siddhivinayak.jpg'),
  mahalaxmi: require('../../assets/images/mahalaxmi.jpg'),
  shirdi: require('../../assets/images/shirdi.jpg'),
  trimbakeshwar: require('../../assets/images/trimbakeshwar.jpg'),
  bhimashankar: require('../../assets/images/bhimashankar.jpg'),
  tuljapur: require('../../assets/images/tuljapur.jpg'),
  grishneshwar: require('../../assets/images/grishneshwar.jpg'),
  morgaon: require('../../assets/images/morgaon.jpg'),
  vitthal: require('../../assets/images/vitthal.jpg'),
  babajan: require('../../assets/images/babajan.jpg'),
};

const temples = [
  {
    id: "1",
    name: "Premal Hanuman Temple",
    location: "Pune, Maharashtra",
    rating: 4.5,
    distance: "2.5 km",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    speciality: "Morning Aarti",
    image: templeImages.premalHanuman,
  },
  {
    id: "2",
    name: "Shri Hanuman and Shani Temple",
    location: "Pune, Maharashtra",
    rating: 4.8,
    distance: "3.2 km",
    openTime: "6:00 AM",
    closeTime: "8:30 PM",
    speciality: "Saturday Puja",
    image: templeImages.shaniTemple,
  },
  {
    id: "3",
    name: "Shreemant Dagdusheth Halwai Ganpati Temple",
    location: "Pune, Maharashtra",
    rating: 5.0,
    distance: "4.0 km",
    openTime: "6:00 AM",
    closeTime: "10:00 PM",
    speciality: "Ganesh Chaturthi Festival",
    image: templeImages.dagdusheth,
  },
  {
    id: "4",
    name: "ISKCON NVCC Temple",
    location: "Pune, Maharashtra",
    rating: 4.9,
    distance: "5.5 km",
    openTime: "4:30 AM",
    closeTime: "8:30 PM",
    speciality: "Krishna Janmashtami Festival",
    image: templeImages.iskcon,
  },
  {
    id: "5",
    name: "Parvati Temple",
    location: "Pune, Maharashtra",
    rating: 4.7,
    distance: "6.0 km",
    openTime: "5:00 AM",
    closeTime: "8:00 PM",
    speciality: "Hilltop View",
    image: templeImages.parvati,
  },
  {
    id: "6",
    name: "Siddhivinayak Temple",
    location: "Mumbai, Maharashtra",
    rating: 5.0,
    distance: "150 km",
    openTime: "5:30 AM",
    closeTime: "9:50 PM",
    speciality: "Ganesh Chaturthi Festival",
    image: templeImages.siddhivinayak,
  },
  {
    id: "7",
    name: "Mahalaxmi Temple",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    distance: "155 km",
    openTime: "6:00 AM",
    closeTime: "10:00 PM",
    speciality: "Navratri Festival",
    image: templeImages.mahalaxmi,
  },
  {
    id: "8",
    name: "Shirdi Sai Baba Temple",
    location: "Shirdi, Maharashtra",
    rating: 5.0,
    distance: "185 km",
    openTime: "4:00 AM",
    closeTime: "11:30 PM",
    speciality: "Sai Baba Samadhi Mandir",
    image: templeImages.shirdi,
  },
  {
    id: "9",
    name: "Trimbakeshwar Temple",
    location: "Nashik, Maharashtra",
    rating: 4.9,
    distance: "210 km",
    openTime: "5:30 AM",
    closeTime: "9:00 PM",
    speciality: "Jyotirlinga",
    image: templeImages.trimbakeshwar,
  },
  {
    id: "10",
    name: "Bhimashankar Temple",
    location: "Pune, Maharashtra",
    rating: 4.8,
    distance: "110 km",
    openTime: "5:00 AM",
    closeTime: "9:00 PM",
    speciality: "Jyotirlinga",
    image: templeImages.bhimashankar,
  },
  {
    id: "11",
    name: "Tuljapur Bhavani Temple",
    location: "Tuljapur, Maharashtra",
    rating: 4.8,
    distance: "300 km",
    openTime: "4:00 AM",
    closeTime: "10:00 PM",
    speciality: "Navratri Festival",
    image: templeImages.tuljapur,
  },
  {
    id: "12",
    name: "Grishneshwar Temple",
    location: "Aurangabad, Maharashtra",
    rating: 4.9,
    distance: "260 km",
    openTime: "5:30 AM",
    closeTime: "9:30 PM",
    speciality: "Jyotirlinga",
    image: templeImages.grishneshwar,
  },
  {
    id: "13",
    name: "Morgaon Ganpati Temple",
    location: "Morgaon, Maharashtra",
    rating: 4.7,
    distance: "70 km",
    openTime: "5:00 AM",
    closeTime: "8:00 PM",
    speciality: "Ashtavinayak",
    image: templeImages.morgaon,
  },
  {
    id: "14",
    name: "Vitthal Rukmini Temple",
    location: "Pandharpur, Maharashtra",
    rating: 4.8,
    distance: "210 km",
    openTime: "4:00 AM",
    closeTime: "11:30 PM",
    speciality: "Ashadhi Ekadashi",
    image: templeImages.vitthal,
  },
  {
    id: "15",
    name: "Hazrat Babajan Dargah",
    location: "Pune, Maharashtra",
    rating: 4.5,
    distance: "2.0 km",
    openTime: "24 hours",
    closeTime: "24 hours",
    speciality: "Sufi Shrine",
    image: templeImages.babajan,
  },
];
const TempleListScreen = ({ navigation, route }) => {
  const { city = "" } = route.params || {};


  // Filter the temples based on the selected city
  const cityTemples = temples.filter((temple) => {
    if (city.trim() === "") {
      // If no city is specified, maybe show all temples or handle accordingly
      return true;
    }
    return temple.location.toLowerCase().includes(city.toLowerCase().trim());
  });
  

  const renderTemple = ({ item }) => (
    <TouchableOpacity
      style={styles.templeCard}
      onPress={() => navigation.navigate("TempleDetails", { temple: item })}
    >
      <View style={styles.templeImageContainer}>
        <Image
          source={item.image}
          style={styles.templeImage}
          resizeMode="cover"
        />
        <View style={styles.distanceBadge}>
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
      </View>
      <View style={styles.templeInfo}>
        <Text style={styles.templeName}>{item.name}</Text>
        <Text style={styles.templeLocation}>{item.location}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.templeRating}>⭐ {item.rating}</Text>
        </View>
        <View style={styles.timingContainer}>
          <Text style={styles.timingText}>
            {item.openTime} - {item.closeTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Temples in {city}</Text>
      <Text style={styles.subHeaderText}>
        Find peace and spirituality in {city.split(",")[0]}
      </Text>
    </View>
  );

  if (cityTemples.length === 0) {
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No temples found in {city}.</Text>
        <Text style={styles.suggestionText}>
          Perhaps explore temples in nearby cities?
        </Text>
      </View>
    </View>
  );
}


  return (
    <View style={styles.container}>
      <FlatList
        data={cityTemples}
        renderItem={renderTemple}
        // keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  listContent: {
    padding: 16,
  },
  templeCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  templeImageContainer: {
    position: "relative",
  },
  templeImage: {
    width: 150,
    height: 150,
  },
  distanceBadge: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  distanceText: {
    color: "#fff",
    fontSize: 12,
  },
  templeInfo: {
    flex: 1,
    padding: 12,
  },
  templeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  templeLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  templeRating: {
    fontSize: 14,
    color: "#FFA726",
    fontWeight: "bold",
  },
  timingContainer: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  timingText: {
    fontSize: 12,
    color: "#666",
  },
});

export default TempleListScreen;
