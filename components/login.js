import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
                <Text style={{ color: '#5e3586', fontSize: 16 }}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Image
                    source={require('../assets/logo.png')}
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
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddfe5',
        padding: 20,
    },
    content: {
        marginTop: 70,
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        color: '#4466cf',
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
        width: 200,
        height: 200,
    },
    inputWithIcon: {
        flex: 1,
        padding: 10,
        borderWidth: 0,
    },
});

export default Login;



