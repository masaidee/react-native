import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native';


const HomeScreen = ({ route }) => {
    const username = route?.params?.username || 'Guest'; // รับ username หรือใช้ค่าเริ่มต้น



    return (
        <View style={styles.container}>
            
            <View style={styles.title}>
                <Text style={styles.Text}>Hello, {username}!</Text>
                <Text style={styles.titleText}>Welcome to Hostipal!</Text>
            </View>
            <View style={styles.containerSearch}>
                <Image
                    source={require('../assets/search.png')}
                    style={styles.iconSeach}
                />
                <TextInput
                    style={styles.Text}
                    placeholder="Username"
                    value='search'
                    returnKeyType="next" // ตั้งค่าให้ปุ่ม Enter เป็น Next
                />
            </View>
            <View style={styles.con}>
                <View style={styles.comtent}>
                    <Text >Category</Text>
                    <Text >See all</Text>
                </View>
                <View>
                    <ScrollView horizontal style={styles.ScrollView}>
                        <View style={styles.box}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.img}
                            />
                            <Text style={styles.inputWithIcon}>Dental</Text>
                        </View>
                        <View style={styles.box}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.img}
                            />
                            <Text style={styles.inputWithIcon}>Heart</Text>
                        </View>
                        <View style={styles.box}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.img}
                            />
                            <Text style={styles.inputWithIcon}>Eyes</Text>
                        </View>
                        <View style={styles.box}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.img}
                            />
                            <Text style={styles.inputWithIcon}>Health</Text>
                        </View>

                    </ScrollView>
                </View>

            </View>
            <View>
                <View>
                    <Text style={styles.textTop}>TOP DOCKTERS</Text>
                </View>
                <View>
                    <View style={styles.boxTop}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.img}
                        />
                        <Text style={styles.inputWithIcon}>Dental</Text>
                    </View>
                    <View style={styles.boxTop}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.img}
                        />
                        <Text style={styles.inputWithIcon}>Heart</Text>
                    </View>
                    <View style={styles.boxTop}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.img}
                        />
                        <Text style={styles.inputWithIcon}>Eyes</Text>
                    </View>
                    <View style={styles.boxTop}>
                        <Image
                            source={require('../assets/logo.png')}
                            style={styles.img}
                        />
                        <Text style={styles.inputWithIcon}>Health</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 20,
        alignItems: 'center',

    },
    title: {
        marginBottom: 20,
        alignItems: 'start',
        justifyContent: 'center',
        width: '100%',
    },
    Text: {
        fontSize: 18,
        width: '100%',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    containerSearch: {
        flexDirection: 'row',
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingHorizontal: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#fff',
    },
    iconSeach: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    comtent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    ScrollView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#5c1085',
        marginRight: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    img: {
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
        margin: 10,

    },
    inputWithIcon: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 5
    },
    con: {
        width: '100%',
        height: 200,
    },
    textTop:{
        fontSize: 18,
        width: '100%',
        margin: 10,
        fontWeight: 'bold',
    },
    boxTop: {
        width: 300,
        height: 100,
        backgroundColor: '#5c1085',
        // marginRight: 10,
        borderRadius: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
    },


});
export default HomeScreen;