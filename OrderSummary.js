import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OrderSummary = ({ totalCount }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Total Item yang Dipesan: {totalCount}</Text> 
            {totalCount >= 5 && (
                <Text style={styles.promoText}>Selamat! Anda Mendapatkan Diskon 10%</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        padding: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    promoText: {
        fontSize: 14,
        color: "#00ff00",
        marginTop: 5,
        fontWeight: "bold",
    },
});

export default OrderSummary;