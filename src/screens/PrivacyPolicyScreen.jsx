import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
    const navigation = useNavigation();

    // Handle Back Button Press
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Privacy Policy</Text>
                <Text style={styles.text}>
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app.
                </Text>
                <Text style={styles.sectionTitle}>1. Information We Collect</Text>
                <Text style={styles.text}>
                    We may collect personal information such as your name, email address, and phone number when you register for an account or use our services.
                </Text>
                <Text style={styles.text}>
                    We also collect non-personal information such as device information, IP addresses, and usage data to improve our app.
                </Text>
                <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
                <Text style={styles.text}>
                    We use your information to provide and improve our services, communicate with you, and personalize your experience.
                </Text>
                <Text style={styles.text}>
                    We may also use your information for analytics, marketing, and security purposes.
                </Text>
                <Text style={styles.sectionTitle}>3. Sharing Your Information</Text>
                <Text style={styles.text}>
                    We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in operating our app.
                </Text>
                <Text style={styles.text}>
                    We may also disclose your information if required by law or to protect our rights and property.
                </Text>
                <Text style={styles.sectionTitle}>4. Security</Text>
                <Text style={styles.text}>
                    We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
                </Text>
                <Text style={styles.sectionTitle}>5. Changes to This Policy</Text>
                <Text style={styles.text}>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </Text>
            </ScrollView>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>OK</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9', // Light background color
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333', // Darker text color
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#007BFF', // Blue color for section titles
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
        lineHeight: 24,
        color: '#555', // Slightly darker text color
    },
    backButton: {
        padding: 15,
        backgroundColor: '#007BFF', // Blue background color
        alignItems: 'center',
        borderRadius: 50, // Rounded corners for the button
        marginHorizontal: 20, // Add horizontal margin
        marginBottom: 20, // Add bottom margin
        shadowColor: '#000', // Shadow for the button
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Elevation for Android
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PrivacyPolicyScreen;