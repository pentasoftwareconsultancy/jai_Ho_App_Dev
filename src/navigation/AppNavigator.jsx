// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import HanumanChalisaScreen from "../screens/HanumanChalisaScreen"; // Replace with your actual screen components
import LoginSignup from "../screens/LoginSignup";
import OtpVerification from "../screens/OtpVerification";
import ReadyToExplore from "../screens/ReadyToExplore";
import BajansScreen from "../screens/BajansScreen";
import JapaSection from "../screens/JapaSection";
import MantraSection from "../screens/MantraSection";
import TempleListScreen from "../screens/TempleListScreen";
import TempleDetails from "../screens/TempleDetailsScreen"
import LearnHanumanChalisa from "../screens/LearnHanumanChalisa";
import SelectDifficulty from "../screens/SelectDifficulty";
import Testimonials from "../screens/Testimonials";
import Kathas from "../screens/Kathas";
import AudioPlayerScreen from "../screens/AudioPlayerScreen";
import BottomNavigator from "./BottomNavigator";
import NotificationScreen from "../screens/NotificationScreen";
import Gallery from "../screens/Gallery";
import MusicSection from "../screens/MusicSection";
import PodcastSection from "../screens/PodcastSection";
import DonationList from "../screens/DonationList";
import PhoneOtpVerification from "../screens/PhoneOtpVerification";
import TermsOfServiceScreen from "../screens/TermsOfServiceScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import CookiesPolicyScreen from "../screens/CookiesPolicyScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import GalleryDetails from "../screens/GalleryDetails";
import SearchScreen from "../screens/SearchBarScreen/SearchScreen";
import HanumanChalisaVideoScreen from "../screens/HanumanChalisaVideoScreen";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginSignup">
      {/* HomeScreen Screen */}
      <Stack.Screen
        name="Home"
        component={BottomNavigator}
        options={{ headerShown: false }} // Hide header
      />
      {/* LoginSignup Screen */}
      <Stack.Screen
        name="LoginSignup"
        component={LoginSignup}
        options={{ headerShown: false }} // Hide header
      />

      {/* Search Screen */}
      <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }} // Hide header
      />

      {/* Forgot Password Screen */}
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />

      {/* Change Password Screen */}
      <Stack.Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
      options={{headerShown: false}} />

      {/* Hanuman Chalisa video Screen */}
      <Stack.Screen
      name="HanumanChalisaVideoScreen"
      component={HanumanChalisaVideoScreen}
      options={{headerShown: false}} />


      {/* OtpVerification Screen */}
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{ headerShown: false }} // Hide header
      />
      {/* PhoneOtpVerification Page */}
      <Stack.Screen
        name="PhoneOtpVerification"
        component={PhoneOtpVerification}
        options={{ headerShown: false }} />

      {/* Terms Of Service Screen */}
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfServiceScreen}
        options={{ headerShown: false }} />

      {/* Privacy Policy Screen */}
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{ headerShown: false }} />

      {/* Cookies Policies Screen */}
      <Stack.Screen
        name="CookiesPolicies"
        component={CookiesPolicyScreen}
        options={{ headerShown: false }} />


      {/* ReadyToExplore Screen */}
      <Stack.Screen
        name="ReadyToExplore"
        component={ReadyToExplore}
        options={{ headerShown: false }} // Hide header
      />

      {/* HanumanChalisa Screen */}
      <Stack.Screen
        name="HanumanChalisa"
        component={HanumanChalisaScreen}
        options={{ headerShown: false }} // Hide header
      />

      <Stack.Screen
        name="Bajan"
        component={BajansScreen}
        options={{ headerShown: false }} />
      {/* Add other screens here */}

      <Stack.Screen name="Japa"
        component={JapaSection}
        options={{ headerShown: false }} />

      <Stack.Screen name="Mantra"
        component={MantraSection}
        options={{ headerShown: false }} />

      <Stack.Screen name="Story"
        component={Kathas}
        options={{ headerShown: false }} />

      {/* <Stack.Screen
        name="LiveArti"
        component={AudioPlayerScreen}
        options={{ headerShown: false }} /> */}

      {/* Temple List Screen  */}
      <Stack.Screen
        name="Temples"
        component={TempleListScreen}
        options={{ headerShown: false }} />

      {/* TempleDetails Screen */}
      <Stack.Screen
        name="TempleDetails"
        component={TempleDetails}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="LearnHanumanChalisa"
        component={LearnHanumanChalisa}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="SelectDifficulty"
        component={SelectDifficulty}
        options={{ headerShown: false }} />

      {/* <Stack.Screen
        name="LearnHanumanChalisa"
        component={LearnHanumanChalisa}
        options={{ headerShown: false }} /> */}

      <Stack.Screen
        name="Testimony"
        component={Testimonials}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Notifications"
        component={NotificationScreen} />

      <Stack.Screen
        name="Gallery"
        component={Gallery} />

        {/* Gallery Details Screen */}
        <Stack.Screen
        name="GalleryDetails"
        component={GalleryDetails}
        options={{ headerShown: false }} />


      <Stack.Screen
        name="Music"
        component={MusicSection} />

      <Stack.Screen
        name="Proadcast"
        component={PodcastSection} />

      <Stack.Screen
        name="Donation"
        component={DonationList} />




    </Stack.Navigator>
  );
};

export default AppNavigator;
