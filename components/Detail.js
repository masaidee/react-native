import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail = ({ route }) => {
    // const { title, description } = route.params; // รับข้อมูลจาก route.params

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                    Health Information
                </Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18 }}>
                    This is the detail screen for health information.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    You can add more details about health here.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    This is a placeholder for the health information details.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    You can customize this screen as needed.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    This is a placeholder for the health information details.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    You can customize this screen as needed.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    This is a placeholder for the health information details.
                </Text>
                <Text style={{ fontSize: 18 }}>
                    You can customize this screen as needed.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
});

export default Detail;