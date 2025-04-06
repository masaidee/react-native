import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from './Detail'; // นำเข้า Detail component
import HomeScreen from './Home';
const Tab = createBottomTabNavigator();





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
                        title: 'Home', 
                        headerStyle: { backgroundColor: '#5e3586' }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: { fontWeight: 'bold' } ,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Text style={{ color }}>🏠</Text>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        headerShown: true,
                        title: 'Detail', 
                        headerStyle: { backgroundColor: '#5e3586' }, 
                        headerTintColor: '#fff', 
                        headerTitleStyle: { fontWeight: 'bold' } ,
                        tabBarLabel: 'Health',
                        tabBarIcon: ({ color }) => (
                            <Text style={{ color }}>👨‍⚕️</Text>
                        ),

                    }}
                />
            </Tab.Navigator>

    );
};



export default Dashboard;