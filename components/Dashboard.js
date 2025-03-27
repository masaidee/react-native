import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from './Detail'; // นำเข้า Detail component
const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
    const username = route?.params?.username || 'Guest'; // รับ username หรือใช้ค่าเริ่มต้น
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Dashboard!</Text>
            <Text style={styles.username}>Hello, {username}!</Text>
        </View>
    );
};



const Dashboard = ({ route }) => {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#5e3586' },
                    tabBarActiveTintColor: '#ffffff',
                    tabBarInactiveTintColor: '#ccc',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    initialParams={route.params}
                    options={{
                        headerShown: true,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Text style={{ color }}>🏠</Text>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Detail"
                    component={Detail}
                />
            </Tab.Navigator>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    username: {
        fontSize: 18,
    },
});

export default Dashboard;