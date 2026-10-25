import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const MenuItem = ({ nama, harga, onTambahPesanan}) => {
    const [qty, setQty] = useState(0);

    const handleTambah = () => {
        setQty(qty + 1);
        onTambahPesanan();
    };

    return (
        <View style={styles.card}>
            <Text style={styles.nama}>{nama}</Text>
            <Text>Harga: Rp {harga}</Text>
            <Text>Jumlah (Qty): {qty}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Tambah Pesanan" onPress={handleTambah} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    nama: {
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonContainer: {
        marginTop: 8,
    },
});

export default MenuItem;