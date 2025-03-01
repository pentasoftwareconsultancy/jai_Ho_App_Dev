import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, Image, Easing, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Vibration } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const numbers = [1, 11, 21, 51, 101, 108];

const JapaSection = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [enableSound, setEnableSound] = useState(true);
  const [enableVibration, setEnableVibration] = useState(true);
  const [sound, setSound] = useState(null);
  const angleAnim = useRef(new Animated.Value(0)).current; // For small circle animation

  useEffect(() => {
    Animated.loop(
      Animated.timing(angleAnim, {
        toValue: 1, // From 0 to 1 (used for interpolation)
        duration: 8000, // 8 seconds per full rotation
        easing: Easing.linear, // Use easing from react-native
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const radius = 80; // Radius of circular motion

  // Interpolating rotation angle
  const rotateInterpolation = angleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Full rotation in degrees
  });

  // Define the animated style for the moving circle
  const animatedStyle = {
    transform: [
      { rotate: rotateInterpolation }, // Rotating around the center
      { translateX: radius }, // Shifting to circular path
    ],
  };

  const renderItem = ({ item, index }) => {
    const inputRange = [(index - 1) * 100, index * 100, (index + 1) * 100];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1.5, 0.8],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.numberContainer}>
        <Animated.Text
          style={{
            ...styles.numberText,
            fontSize: scale.interpolate({
              inputRange: [0.8, 1.5],
              outputRange: [14, 28],
              extrapolate: 'clamp',
            }),
            opacity,
            transform: [{ scale }],
          }}
        >
          {item}
        </Animated.Text>
      </View>
    );
  };

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / 100);
    setSelectedNumber(numbers[index]);
  };

  const navigateToNextPage = () => {
    navigation.navigate('CalAppScreen', { selectedNumber, enableSound, enableVibration });
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom:120, paddingTop:30}}>
        <LinearGradient colors={['#F5F5F7', '#F5F5F7', '#F5F5F7']} style={styles.container}>
      {/* Circular Image with Moving Small Circle */}
      <View style={styles.circleImageContainer}>
        {/* Main Circle Image */}
        <Image source={require('../../assets/images/hanuman.jpg')} style={styles.circleImage} />

        {/* Circular Path Line */}
        <View style={styles.circularPath} />

        {/* Small Moving Circle */}
        <Animated.View style={[styles.smallCircle, animatedStyle]} />
        
      </View>

      {/* Question Text */}
      <Animatable.Text animation="fadeIn" style={styles.questionText}>
        How many times do you want to chant?
      </Animatable.Text>

      {/* Ruler Container */}
      <View style={styles.rulerContainer}>
        <View style={styles.fixedLinesContainer}>
          <View style={styles.line} />
          <View style={styles.spacer} />
          <View style={styles.line} />
        </View>

        <AnimatedFlatList
          data={numbers}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={100}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false, listener: handleScroll }
          )}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingHorizontal: width / 2 - 50 }}
        />
      </View>

      {/* Selected Number */}
      <Animatable.Text animation="pulse" iterationCount="infinite" style={styles.selectedNumber}>
        Selected No of Mantras to Chant: {selectedNumber}
      </Animatable.Text>

      {/* Sound and Vibration Radio Buttons */}
      <Animatable.View animation="fadeInUp" style={styles.radioButtonContainer}>
        <LinearGradient
          colors={['#FFFAFA', '#F8F8FF']}
          style={styles.radioButtonGradient}
        >
          <MaterialIcons name="volume-up" size={24} color="#C55A11" />
          <Text style={styles.radioButtonText}>Enable Sound</Text>
          <RadioButton
            selectedValue={enableSound}
            onValueChange={(value) => {
              setEnableSound(value);
              if (!value && sound) {
                sound.stopAsync();
              }
            }}
          />
        </LinearGradient>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={200} style={styles.radioButtonContainer}>
        <LinearGradient
          colors={['#FFFAFA', '#F8F8FF']}
          style={styles.radioButtonGradient}
        >
          <MaterialIcons name="vibration" size={24} color="#C55A11" />
          <Text style={styles.radioButtonText}>Enable Vibration</Text>
          <RadioButton
            selectedValue={enableVibration}
            onValueChange={(value) => {
              setEnableVibration(value);
              if (!value) {
                Vibration.cancel();
              }
            }}
          />
        </LinearGradient>
      </Animatable.View>

      {/* Start Button */}
      <TouchableOpacity style={styles.button} onPress={navigateToNextPage}>
        <LinearGradient colors={['#FF7043', '#FFA500']} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Start</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
    </ScrollView>
    
  );
};

const RadioButton = ({ selectedValue, onValueChange }) => {
  return (
    <TouchableOpacity
      style={radioStyles.optionContainer}
      onPress={() => onValueChange(!selectedValue)}
    >
      <MaterialIcons
        name={selectedValue ? 'radio-button-checked' : 'radio-button-unchecked'}
        size={22}
        color="#FF7043"
      />
      <Text style={radioStyles.optionLabel}>{selectedValue ? 'On' : 'Off'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImageContainer: {
    position: 'relative',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#FF7043',
    zIndex: 1,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
  circularPath: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#FF7043',
    borderStyle: 'solid',
  },
  smallCircle: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FF7043', 
    zIndex: 2,
  },
  rulerContainer: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  numberContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontWeight: 'bold',
    color: '#FF7043',
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  fixedLinesContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -1 }, { translateY: -54 }],
    zIndex: 1,
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: '#FF7043',
  },
  spacer: {
    height: 60,
  },
  selectedNumber: {
    fontSize: 18,
    color: '#FF7043',
    marginVertical: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  radioButtonContainer: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  radioButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  radioButtonText: {
    fontSize: 16,
    color: '#FF7043',
    fontFamily: 'serif',
    marginLeft: 10,
  },
  button: {
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },
  buttonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#1C1C2B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7043',
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    fontFamily: 'serif',
    marginBottom: 20,
  },
});

const radioStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  optionLabel: {
    fontSize: 16,
    color: '#C55A11',
    marginLeft: 5,
  },
});

export default JapaSection;