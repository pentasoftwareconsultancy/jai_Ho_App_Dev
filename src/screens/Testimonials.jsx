import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For the play button and star icons

const videoTestimonials = [
  {
    id: '1',
    name: 'Rocks Velkeinjen',
    video: true,
    description: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax.',
    date: '10 Feb',
    rating: '4.8', // Added rating for video testimonials
    avatar: require('../../assets/images/testimonialimage.png'), // Assuming this is the image for the video testimonial
  },
  {
    id: '2',
    name: 'John Doe',
    video: true,
    description: 'Great experience watching movies in Gold Class.',
    date: '15 Feb',
    rating: '5.0', // Added rating for video testimonials
    avatar: require('../../assets/images/testimonialimage.png'), // Add more images as needed
  },
  {
    id: '3',
    name: 'Jane Smith',
    video: true,
    description: 'Vmax is the best way to watch movies!',
    date: '20 Feb',
    rating: '4.9', // Added rating for video testimonials
    avatar: require('../../assets/images/testimonialimage.png'), // Add more images as needed
  },
  // Add more video testimonials as needed
];

const additionalTestimonials = [
  {
    id: '1',
    name: 'Angelina Zolly',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '4.9',
    duration: '6h 30min',
    date: '25 Feb',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '2',
    name: 'Michael Scott',
    description: 'Amazing experience with Gold Class seating.',
    rating: '5.0',
    duration: '5h 45min',
    date: '28 Feb',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '3',
    name: 'Emily Johnson',
    description: 'The sound quality in Vmax is absolutely incredible!',
    rating: '4.8',
    duration: '7h 15min',
    date: '1 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '4',
    name: 'David Brown',
    description: 'Gold Class seating is worth every penny. Highly recommended!',
    rating: '4.7',
    duration: '6h 50min',
    date: '3 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '5',
    name: 'Sophia Lee',
    description: 'I love the cozy atmosphere and the premium service.',
    rating: '4.9',
    duration: '5h 55min',
    date: '5 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '6',
    name: 'James Wilson',
    description: 'The best cinema experience I’ve ever had. Will come back again!',
    rating: '5.0',
    duration: '6h 10min',
    date: '7 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '7',
    name: 'Olivia Martinez',
    description: 'The seats are so comfortable, and the screen is massive!',
    rating: '4.8',
    duration: '6h 20min',
    date: '9 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '8',
    name: 'Daniel Anderson',
    description: 'Great place to watch the latest blockbusters in style.',
    rating: '4.9',
    duration: '6h 40min',
    date: '11 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '9',
    name: 'Emma Taylor',
    description: 'The food and drinks service is top-notch. Loved it!',
    rating: '4.7',
    duration: '5h 45min',
    date: '13 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  {
    id: '10',
    name: 'William Thomas',
    description: 'Perfect for a date night or a family outing. Highly recommended!',
    rating: '4.9',
    duration: '6h 25min',
    date: '15 Mar',
    avatar: require('../../assets/images/testimonialimage.png'), // Add image for the testimonial
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const navigation = useNavigation();

  const handleVideoPlay = (videoUrl) => {
    // Navigate to a video player screen or play the video in a modal
    navigation.navigate('VideoPlayer', { videoUrl });
  };

  const renderVideoTestimonial = ({ item }) => (
    <View style={styles.videoItem}>
      <TouchableOpacity onPress={() => handleVideoPlay(item.videoUrl)} style={styles.imageContainer}>
        <Image source={item.avatar} style={styles.thumbnail} />
        <View style={styles.playIconContainer}>
          <Icon name="play-circle" size={50} color="#fff" />
        </View>
      </TouchableOpacity>
      <View style={styles.videoContent}>
        <View style={styles.testimonialHeader}>
          <Text style={styles.testimonialName}>{item.name}</Text>
          <Text style={styles.testimonialDate}>{item.date}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <Text style={styles.testimonialDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const renderAdditionalTestimonial = ({ item }) => (
    <View style={styles.additionalTestimonialItem}>
      <View style={styles.testimonialContent}>
        <Image source={item.avatar} style={styles.testimonialImage} />
        <View style={styles.testimonialDetails}>
          <View style={styles.testimonialHeader}>
            <Text style={styles.testimonialName}>{item.name}</Text>
            <Text style={styles.testimonialDate}>{item.date}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <Text style={styles.testimonialDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {/* Header with Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        {/* Video Testimonial Section */}
        <View style={styles.videoTestimonialContainer}>
          <Text style={styles.sectionTitle}>Video Testimonials</Text>
          <FlatList
            data={videoTestimonials}
            renderItem={renderVideoTestimonial}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Additional Testimonials Section */}
        <View style={styles.additionalTestimonialsContainer}>
          <Text style={styles.sectionTitle}>Testimonials</Text>
          <FlatList
            data={additionalTestimonials}
            renderItem={renderAdditionalTestimonial}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
      
  },
  backButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  videoTestimonialContainer: {
    padding: 20,
    

  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    
  },
  videoItem: {
    marginRight: 15,
    width: 300, // Increased width for each video item
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: '100%',
    height: 200, // Adjusted height to maintain aspect ratio
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  playIconContainer: {
    position: 'absolute',
  },
  videoContent: {
    padding: 15,
    
  },
  testimonialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  testimonialDate: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  testimonialDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'left',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  starIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#FFD700', // Gold color for rating
  },
  additionalTestimonialsContainer: {
    padding: 20,
  },
  additionalTestimonialItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  testimonialContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testimonialImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  testimonialDetails: {
    flex: 1,
  },
});

export default Testimonials;