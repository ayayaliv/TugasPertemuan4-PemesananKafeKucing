import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import OrderSummary from "./OrderSummary";
import MenuItem from "./MenuItem";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahPesanan = () => {
    setTotalPesanan(totalPesanan + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Aplikasi Pemesanan Kafe Kucing</Text>

      <OrderSummary totalCount={totalPesanan}/>

      {DAFTAR_MENU.map((item) => (
        <MenuItem
          key={item.id}
          nama={item.nama}
          harga={item.harga}
          onTambahPesanan={handleTambahPesanan}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});