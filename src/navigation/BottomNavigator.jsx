import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  Image,
  Text,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient"; // For gradient background

// Import screens
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import YujaScanner from "../screens/YujaScanner";
import ProfileScreen from "../screens/ProfileScreen";
import HanumanChalisaScreen from "../screens/HanumanChalisaScreen";
import BajansScreen from "../screens/BajansScreen";
import JapaSection from "../screens/JapaSection";
import MantraSection from "../screens/MantraSection";
import TempleDetails from "../screens/TempleListScreen";
import LearnHanumanChalisa from "../screens/LearnHanumanChalisa";
import SelectDifficulty from "../screens/SelectDifficulty";
import Testimonials from "../screens/Testimonials";
import Kathas from "../screens/Kathas";
import NotificationScreen from "../screens/NotificationScreen";
import Gallery from "../screens/Gallery";
import MusicSection from "../screens/MusicSection";
import PodcastSection from "../screens/PodcastSection";
import DonationList from "../screens/DonationList";
import GalleryDetails from "../screens/GalleryDetails";
import SearchScreen from "../screens/SearchBarScreen/SearchScreen";
import YStoreScreen from "../screens/YStoreScreen";
import KathaDetailsScreen from "../screens/KathaDetailsScreen";
import TempleCityListScreen from "../screens/TempleCityListScreen";
import MusicPlayerScreen from "../screens/MusicPlayerScreen";
import TempleFifthScreen from "../screens/Temples/TempleFifthScreen";
import TempleFirstScreen from "../screens/Temples/TempleFirstScreen";
import TempleSecondScreen from "../screens/Temples/TempleSecondScreen";
import TempleThirdScreen from "../screens/Temples/TempleThirdScreen";
import TempleFourthScreen from "../screens/Temples/TempleFourthScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import CalAppScreen from "../screens/CalAppScreen";
import AllVideoPodcasts from "../screens/AllVideoPodcasts";
import AllAudioPodcasts from "../screens/AllAudioPodcasts";
import AudioPodcastPlayer from "../screens/AudioPodcastPlayer";
import VideoPodcastPlayer from "../screens/VideoPodcastPlayer";
import BhajanAudioPlayerScreen from "../screens/BhajanAudioPlayerScreen";
import BhajanVideoPlayerScreen from "../screens/BhajanVideoPlayerScreen";
import HanumanChalisaVideoScreen from "../screens/HanumanChalisaVideoScreen";
import EditProfile from "../screens/EditProfile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Animation configurations
const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};
const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

// Custom Tab Button Component
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const scale = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(7)).current;
  const textScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (focused) {
      Animated.parallel([
        Animated.spring(scale, { toValue: 1.2, useNativeDriver: true }),
        Animated.spring(translateY, { toValue: -24, useNativeDriver: true }),
        Animated.spring(textScale, { toValue: 1, useNativeDriver: true }),
      ]).start();
      // Set a timeout to return to normal state after 10 seconds
      const timer = setTimeout(() => {
        if (focused) {
          Animated.parallel([
            Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
            Animated.spring(translateY, { toValue: 7, useNativeDriver: true }),
            Animated.spring(textScale, { toValue: 0, useNativeDriver: true }),
          ]).start();
        }
      }, 1000);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    } else {
      Animated.parallel([
        Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
        Animated.spring(translateY, { toValue: 7, useNativeDriver: true }),
        Animated.spring(textScale, { toValue: 0, useNativeDriver: true }),
      ]).start();
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale }, { translateY }],
          },
        ]}
      >
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? "#FFD700" : "#C55A11" },
          ]}
        >
          <View
            style={[
              styles.circle,
              { backgroundColor: focused ? "#FFD700" : "#C55A11" },
            ]}
          />
          {item.icon}
        </View>
        <Animated.Text
          style={[styles.text, { transform: [{ scale: textScale }] }]}
        >
          {item.label}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

// Function to get the greeting based on the time of day
const getGreeting = () => {
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    return "Good Morning";
  } else if (currentTime < 16) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

// Custom Back Icon with Gradient
const CustomBackIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.backIconContainer}>
    <LinearGradient
      colors={["#C55A11", "#FF7043"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <Ionicons name="arrow-back" size={24} color="#FFF" />
    </LinearGradient>
  </TouchableOpacity>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.username}>Hii, Atharva</Text>
            <Text style={styles.greeting}>{getGreeting()}</Text>
          </View>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }} // Replace with actual profile picture URL
              style={styles.profileImage}
            />
          </View>
        ),
        headerStyle: styles.headerStyle,
      })}
    />
    <Stack.Screen
      name="HanumanChalisa"
      component={HanumanChalisaScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="Bajan"
      component={BajansScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Bajan</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="BhajanAudioPlayerScreen"
      component={BhajanAudioPlayerScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Audios</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="BhajanVideoPlayerScreen"
      component={BhajanVideoPlayerScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Videos</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Japa"
      component={JapaSection}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Japa</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="CalAppScreen"
      component={CalAppScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Mantra Calculator</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Mantra"
      component={MantraSection}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Mantras</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Story"
      component={Kathas}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Story</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Music"
      component={MusicSection}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Music</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),

      })}
    />
    <Stack.Screen
      name="Temples"
      component={TempleCityListScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Temples</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="TempleDetails"
      component={TempleDetails}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Details</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="LearnHanumanChalisa"
      component={LearnHanumanChalisa}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Hanuman Chalisa</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="SelectDifficulty"
      component={SelectDifficulty}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="Testimony"
      component={Testimonials}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Testimony</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen name="Notifications" component={NotificationScreen} />
    <Stack.Screen name="KathaDetails" component={KathaDetailsScreen} />
    <Stack.Screen
      name="Temple1"
      component={TempleFirstScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Temple Section</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Temple2"
      component={TempleSecondScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Surrounding Temples</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Temple3"
      component={TempleThirdScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Temple Info</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Temple4"
      component={TempleFourthScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Temple Location</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Temple5"
      component={TempleFifthScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Travel</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="HanumanChalisaVideoScreen"
      component={HanumanChalisaVideoScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Profile</Text>
          </View>
        ),
      })}
    />

    <Stack.Screen
      name="EditProfileScreen"
      component={EditProfile}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Edit Profile</Text>
          </View>
        ),
      })}
    />
  </Stack.Navigator >
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titlename}>Settings</Text>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="Podcast"
      component={PodcastSection}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="Music"
      component={MusicSection}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="ystore"
      component={YStoreScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="Gallery"
      component={Gallery}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="AllVideoPodcasts"
      component={AllVideoPodcasts}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="AllAudioPodcasts"
      component={AllAudioPodcasts}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="AudioPodcastPlayer"
      component={AudioPodcastPlayer}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="VideoPodcastPlayer"
      component={VideoPodcastPlayer}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="GalleryDetails"
      component={GalleryDetails}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="MusicPlayerScreen"
      component={MusicPlayerScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="favourites"
      component={FavoriteScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
    <Stack.Screen
      name="Donation"
      component={DonationList}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
  </Stack.Navigator>
);

const YujaScannerStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="YujaScanner"
      component={YujaScanner}
      options={({ navigation }) => ({
        headerLeft: () => (
          <CustomBackIcon onPress={() => navigation.goBack()} />
        ),
      })}
    />
  </Stack.Navigator>
);

const BottomNavigator = () => {
  const hasNotifications = true; // Replace with your logic for notifications

  const TabArr = [
    {
      route: "Home",
      label: "Home",
      icon: <Ionicons name="home" size={24} color="#1C1C1E" />,
      component: HomeStack,
    },
    {
      route: "Profile",
      label: "Profile",
      icon: <Ionicons name="person" size={24} color="#1C1C1E" />,
      component: ProfileStack,
    },
    {
      route: "Scanner",
      label: "Scanner",
      icon: <MaterialIcons name="qr-code-scanner" size={24} color="#1C1C1E" />,
      component: YujaScannerStack,
    },
    {
      route: "Settings",
      label: "Settings",
      icon: <Ionicons name="settings" size={24} color="#1C1C1E" />,
      component: SettingsStack,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  tabBar: {
    height: 70,
    position: "absolute",
    margin: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.57)",
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 1000,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#C55A11",
    backgroundColor: "#C55A11",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#1C1C1E",
  },
  headerTitleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 16,
  },
  greeting: {
    fontSize: 14,
    color: "#666",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  titlename: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  backIconContainer: {
    marginLeft: 16,
  },
  gradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRight: {
    marginRight: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});

export default BottomNavigator;
