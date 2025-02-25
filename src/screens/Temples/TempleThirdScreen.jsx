import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

const { width: viewportWidth } = Dimensions.get('window');

const TempleThirdScreen = ({ route, navigation }) => {
    const { temple } = route.params; // Get the temple data from params
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const templeImages = [
        { id: "1", image: temple.image }, // Use the temple image
        { id: "2", image: require("../../../assets/images/hanuman.jpg") }, // Add more images as needed
        { id: "3", image: require("../../../assets/images/hanuman.jpg") },
    ];

    const renderCarouselItem = ({ item }) => (
        <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
    );

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{temple.name}</Text>
            </View>

            {/* Temple Image Carousel */}
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={carouselRef}
                    data={templeImages}
                    renderItem={renderCarouselItem}
                    width={viewportWidth - 40} // Adjust width as needed
                    height={200}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    loop={false}
                />
            </View>

            {/* Thumbnail Image Indicators */}
            <View style={styles.thumbnailContainer}>
                {templeImages.map((item, index) => (
                    <TouchableOpacity key={item.id} onPress={() => carouselRef.current?.scrollTo({ index })}>
                        <Image source={item.image} style={[styles.thumbnail, activeIndex === index && styles.activeThumbnail]} />
                    </TouchableOpacity>
                ))}
                <View style={styles.moreImages}>
                    <Text style={styles.moreText}>+ 8</Text>
                </View>
            </View>

            {/* Temple Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.templeTitle}>{temple.name}</Text>
                <View style={styles.infoRow}>
                    <MaterialIcons name="location-on" size={16} color="gray" />
                    <Text style={styles.location}>{temple.location}</Text>
                    <FontAwesome name="star" size={16} color="gold" />
                    <Text style={styles.rating}>{temple.rating}</Text>
                </View>
                <Text style={styles.description}>
                    Shri Hanuman and Shani Temple is a place of spiritual significance, known for its divine atmosphere and
                    beautiful architecture. Devotees from all around visit to seek blessings and participate in the temple’s rituals.
                </Text>
            </View>

            {/* Explore Button */}
            <TouchableOpacity 
                style={styles.exploreButton} 
                onPress={() => navigation.navigate("Temple4", { temple, firstImage: templeImages[0].image })} // Pass the first image
            >
                <Text style={styles.exploreText}>Explore</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F8F8F8" },
    header: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFA500", paddingVertical: 15, paddingHorizontal: 20 },
    headerTitle: { fontSize: 18, fontWeight: "bold", color: "white", marginLeft: 10 },
    carouselContainer: { alignItems: "center", marginTop: 10 },
    carouselImage: { width: '100%', height: 200, borderRadius: 10 },
    thumbnailContainer: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
    thumbnail: { width: 50, height: 50, marginHorizontal: 5, borderRadius: 5, opacity: 0.5 },
    activeThumbnail: { opacity: 1, borderWidth: 2, borderColor: "#FFA500" },
    moreImages: { width: 50, height: 50, backgroundColor: "#FFA500", justifyContent: "center", alignItems: "center", borderRadius: 5 },
    moreText: { color: "white", fontSize: 14, fontWeight: "bold" },
    detailsContainer: { padding: 20 },
    templeTitle: { fontSize: 24, fontWeight: "bold" },
    infoRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
    location: { fontSize: 16, color: "gray", marginLeft: 5, marginRight: 10 },
    rating: { fontSize: 16, marginLeft: 5 },
    description: { fontSize: 14, color: "#555", marginTop: 10, lineHeight: 20 },
    exploreButton: { backgroundColor: "#FFA500", borderRadius: 10, margin: 20, paddingVertical: 12, alignItems: "center" },
    exploreText: { fontSize: 18, color: "white", fontWeight: "bold" },
});

export default TempleThirdScreen;