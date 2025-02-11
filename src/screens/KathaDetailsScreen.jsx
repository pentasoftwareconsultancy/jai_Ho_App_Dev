import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const KathaDetailsScreen = ({ route }) => {
    const { katha } = route.params;
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Kathas');

    const stats = [
        { label: 'Released', value: '2021' },
        { label: 'Part', value: '16' },
        { label: 'Pages', value: '340' }
    ];

    // Function to render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'Kathas':
                return <Text>Kathas Content</Text>;
            case 'Details':
                return <Text>Details Content</Text>;
            case 'Author':
                return <Text>Author Content</Text>;
            case 'Review':
                return <Text>Review Content</Text>;
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header with Back Button */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="left" size={24} color="#FF8C00" />
                </TouchableOpacity>

                {/* Katha Image */}
                <Image source={katha.image} style={styles.kathaImage} />

                {/* Title Section */}
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{katha.title}</Text>
                    <Text style={styles.author}>By {katha.author}</Text>

                    {/* Stats Section */}
                    <View style={styles.statsContainer}>
                        {stats.map((stat, index) => (
                            <View key={index} style={styles.statItem}>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                                <Text style={styles.statValue}>{stat.value}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Tabs */}
                    <View style={styles.tabsContainer}>
                        {['Kathas', 'Details', 'Author', 'Review'].map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tab, activeTab === tab && styles.activeTab]}
                                onPress={() => setActiveTab(tab)}
                            >
                                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Description */}
                    <Text style={styles.description}>
                        With fair-tressed Demeter, the sacred goddess, my song begins. With herself and her slim-ankled daughter, whom Aidoneus once Abducted... Most people are familiar, at least by repute, with the two great epics of Homer, the Iliad and the Odyssey, but few are aware that other poems survive that were attributed to Homer in ancient times.
                    </Text>

                    {/* Tab Content */}
                    {renderContent()}
                </View>
            </ScrollView>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.startReadingButton}>
                    <AntDesign name="book" size={24} color="#FFF" />
                    <Text style={styles.buttonText}>Start Reading</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.playAudioButton}>
                    <AntDesign name="playcircleo" size={24} color="#FFF" />
                    <Text style={styles.buttonText}>Play Audio</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 8,
    },
    kathaImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    author: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingHorizontal: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    tabsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#FF8C00',
    },
    tabText: {
        fontSize: 14,
        color: '#666',
    },
    activeTabText: {
        color: '#FF8C00',
        fontWeight: '600',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 5,
        // Moved buttonContainer from within ScrollView to outside for better layout control
    },
    startReadingButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF8C00',
        padding: 12,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    playAudioButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#333',
        padding: 12,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default KathaDetailsScreen;