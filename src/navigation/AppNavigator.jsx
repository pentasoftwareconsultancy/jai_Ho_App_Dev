import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginSignup from "../screens/LoginSignup";
import OtpVerification from "../screens/OtpVerification";
import ReadyToExplore from "../screens/ReadyToExplore";
import PhoneOtpVerification from "../screens/PhoneOtpVerification";
import BottomNavigator from "./BottomNavigator";
import TermsOfServiceScreen from "../screens/TermsOfServiceScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import CookiesPolicyScreen from "../screens/CookiesPolicyScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginSignup">
      <Stack.Screen
        name="LoginSignup"
        component={LoginSignup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfServiceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CookiesPolicies"
        component={CookiesPolicyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhoneOtpVerification"
        component={PhoneOtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReadyToExplore"
        component={ReadyToExplore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
