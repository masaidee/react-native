import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Index = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/rocket.png')}
                style={styles.logo}
            />
            <Text style={styles.Head}>Instamobile</Text>
            <Text style={styles.p}>
                Use this codebase to start a new Firebase.{"\n"} mobile app in minutes.
            </Text>
            <TouchableOpacity style={styles.buttonL} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonTextL}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonS} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonTextS}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 55,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 200,
        height: 200,
        margin: 10,
    },
    Head: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#5e3586',
    },
    p: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#ffffff',
    },
    buttonL: {
        backgroundColor: '#5e3586',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10,
    },
    buttonS: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5e3586',
        borderWidth: 2,
        borderRadius: 50,
        marginBottom: 10,
    },
    buttonTextL: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextS: {
        color: '#5e3586',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Index;