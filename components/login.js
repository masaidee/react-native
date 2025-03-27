import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    // สร้าง ref สำหรับช่อง Password
    const passwordInputRef = useRef(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password,
            });
            if (response.data.success) {
                console.log('Login successful:', response.data.message);
                navigation.navigate('Dashboard', { username });
            } else {
                console.log('Login failed:', response.data.message);
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
                <Text style={{ color: '#5e3586', fontSize: 16 }}>Go Back</Text>
            </TouchableOpacity> */}
                <View style={styles.content}>
                    <Image
                        source={require('../assets/3d.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <Image
                        source={require('../assets/use.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.inputWithIcon}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        returnKeyType="next" // ตั้งค่าให้ปุ่ม Enter เป็น Next
                        onSubmitEditing={() => passwordInputRef.current.focus()} // ย้ายโฟกัสไปที่ช่อง Password
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Image source={require('../assets/pass.png')} style={styles.icon} />
                    <TextInput
                        ref={passwordInputRef} // ผูก ref กับช่อง Password
                        style={styles.inputWithIcon}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={hidePassword}
                        returnKeyType="done" // ตั้งค่าให้ปุ่ม Enter เป็น Done
                        onSubmitEditing={handleLogin} // เรียก handleLogin เมื่อกด Enter

                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Image
                            source={
                                hidePassword
                                    ? require('../assets/hidepass.png')
                                    : require('../assets/hide.png')
                            }
                            style={styles.hide}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.signUp}>
                            Don't have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonL}>
                    <TouchableOpacity onPress={handleLogin} >
                        <Text style={styles.Login}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    content: {
        marginBottom: 20,
        alignItems: 'center',

    },
    title: {
        color: '#5e3586',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 40,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    hide: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
        borderBlockColor: '#000000',
        borderRadius: 100,
        margin: 10,
        borderWidth: 2,
    },
    inputWithIcon: {
        flex: 1,
        padding: 10,
        borderWidth: 0,
    },
    signUp: {
        color: '#5e3586',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    Login: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    buttonL: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e3586',
        width: '100%',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#5e3586',
    },
});

export default Login;



