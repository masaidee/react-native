import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail = ({ route }) => {
    // const { title, description } = route.params; // รับข้อมูลจาก route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail</Text>
            <Text style={styles.description}>name</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#555",
    },
});

export default Detail;