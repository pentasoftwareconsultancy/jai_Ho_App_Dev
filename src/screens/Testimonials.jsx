import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const videoTestimonials = [
  {
    id: '1',
    name: 'Rocks Velkeinjen',
    video: true,
    description: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax.',
    date: '10 Feb',
    avatar: require('../../assets/images/testimonialimage.png'),
  },
  {
    id: '2',
    name: 'John Doe',
    video: true,
    description: 'Great experience watching movies in Gold Class.',
    date: '15 Feb',
    avatar: require('../../assets/images/testimonialimage.png'),
  },
  {
    id: '3',
    name: 'Jane Smith',
    video: true,
    description: 'Vmax is the best way to watch movies!',
    date: '20 Feb',
    avatar: require('../../assets/images/testimonialimage.png'),
  },
];

const additionalTestimonials = [
  {
    id: '1',
    name: 'Angelina Zolly',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: '4.9',
    duration: '6h 30min',
  },
];

const Testimonials = () => {
  const navigation = useNavigation();

  const handleVideoPlay = (videoUrl) => {
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
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

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

        <View style={styles.additionalTestimonialsContainer}>
          <Text style={styles.sectionTitle}>Testimonials</Text>
          {additionalTestimonials.map((item) => (
            <View key={item.id} style={styles.testimonialItem}>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    alignItems: 'center',
    width: 300,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  playIconContainer: {
    position: 'absolute',
  },
  additionalTestimonialsContainer: {
    padding: 20,
  },
  testimonialItem: {
    marginBottom: 20,
  },
});

export default Testimonials;











// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // For the play button icon

// const videoTestimonials = [
//   {
//     id: '1',
//     name: 'Rocks Velkeinjen',
//     video: true,
//     description: 'Cinemas is the ultimate experience to see new movies in Gold Class or Vmax.',
//     date: '10 Feb',
//     avatar: require('../../assets/images/testimonialimage.png'), // Assuming this is the image for the video testimonial
//   },
//   {
//     id: '2',
//     name: 'John Doe',
//     video: true,
//     description: 'Great experience watching movies in Gold Class.',
//     date: '15 Feb',
//     avatar: require('../../assets/images/testimonialimage.png'), // Add more images as needed
//   },
//   {
//     id: '3',
//     name: 'Jane Smith',
//     video: true,
//     description: 'Vmax is the best way to watch movies!',
//     date: '20 Feb',
//     avatar: require('../../assets/images/testimonialimage.png'), // Add more images as needed
//   },
//   // Add more video testimonials as needed
// ];

// const additionalTestimonials = [
//   {
//     id: '1',
//     name: 'Angelina Zolly',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     rating: '4.9',
//     duration: '6h 30min',
//   },
//   // Add more testimonials as needed
// ];

// const Testimonials = () => {
//   const navigation = useNavigation();

//   const handleVideoPlay = (videoUrl) => {
//     // Navigate to a video player screen or play the video in a modal
//     navigation.navigate('VideoPlayer', { videoUrl });
//   };

//   const renderVideoTestimonial = ({ item }) => (
//     <View style={styles.videoItem}>
//       <TouchableOpacity onPress={() => handleVideoPlay(item.videoUrl)} style={styles.imageContainer}>
//         <Image source={item.avatar} style={styles.thumbnail} />
//         <View style={styles.playIconContainer}>
//           <Icon name="play-circle" size={50} color="#fff" />
//         </View>
//       </TouchableOpacity>
//       {/* <Text style={styles.testimonialName}>{item.name}</Text>
//       <Text style={styles.testimonialDate}>{item.date}</Text>
//       <Text style={styles.testimonialDescription}>{item.description}</Text> */}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.mainContainer}>
//       <ScrollView>
//         {/* Header with Back Button */}
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Text style={styles.backButtonText}>← Back</Text>
//         </TouchableOpacity>

//         {/* Video Testimonial Section */}
//         <View style={styles.videoTestimonialContainer}>
//           <Text style={styles.sectionTitle}>Video Testimonials</Text>
//           <FlatList
//             data={videoTestimonials}
//             renderItem={renderVideoTestimonial}
//             keyExtractor={(item) => item.id}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//           />
//           {/* <TouchableOpacity style={styles.findCinemaButton}>
//             <Text style={styles.findCinemaButtonText}>Find a cinema near you</Text>
//           </TouchableOpacity> */}
//         </View>

//         {/* Additional Testimonials Section */}
//         <View style={styles.additionalTestimonialsContainer}>
//           <Text style={styles.sectionTitle}>Testimonials</Text>
//           {additionalTestimonials.map((item) => (
//             <View key={item.id} style={styles.testimonialItem}>
//               {/* <Text style={styles.testimonialName}>{item.name}</Text> */}
//               {/* <Text style={styles.testimonialDescription}>{item.description}</Text> */}
//               {/* <Text style={styles.testimonialRating}>
//                 {item.rating} - {item.duration}
//               </Text> */}
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   backButton: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   backButtonText: {
//     fontSize: 16,
//     color: '#007BFF',
//   },
//   videoTestimonialContainer: {
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'left',
//   },
//   videoItem: {
//     marginRight: 15,
//     alignItems: 'center',
//     width: 300, // Increased width for each video item
//   },
//   imageContainer: {
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   thumbnail: {
//     width: 300, // Increased width for the thumbnail
//     height: 200, // Adjusted height to maintain aspect ratio
//     borderRadius: 10,
//   },
//   playIconContainer: {
//     position: 'absolute',
//   },
//   testimonialName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   testimonialDate: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//     textAlign: 'center',
//   },
//   testimonialDescription: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   findCinemaButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
//   findCinemaButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   additionalTestimonialsContainer: {
//     padding: 20,
//   },
//   testimonialItem: {
//     marginBottom: 20,
//   },
//   testimonialRating: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//     textAlign: 'center',
//   },
// });

// export default Testimonials;