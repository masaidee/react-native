import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Dashboard = ({ route, navigation }) => {
    const { username } = route.params; // รับ username จาก route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Dashboard!</Text>
            <Text style={styles.username}>Hello, {username}!</Text> {/* แสดง username */}
            <Button
                title="Logout"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
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
        marginBottom: 20,
    },
});

export default Dashboard;