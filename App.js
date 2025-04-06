import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from './components/index';
import Register from './components/Register';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="index">
                <Stack.Screen
                    name="index"
                    component={index}
                    options={{
                        headerShown: true,
                        title: 'Home', // ชื่อที่แสดงใน Header
                        headerStyle: {
                            backgroundColor: '#5e3586', // สีพื้นหลังของ Header
                        },
                        headerTintColor: '#fff', // สีของข้อความใน Header
                        headerTitleStyle: {
                            fontWeight: 'bold', // สไตล์ของชื่อ
                        },
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: true, title: 'Login', headerStyle: { backgroundColor: '#5e3586' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}
                />

                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard} 
                    options={{headerShown: false, title: 'Dashboard', headerStyle: { backgroundColor: '#5e3586' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}
                    />

                <Stack.Screen
                    name="Register"
                    component={Register} />

                <Stack.Screen
                    name="Detail"
                    component={Detail} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;