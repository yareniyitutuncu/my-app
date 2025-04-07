import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TicketScreen = ({ route }) => {
  const { selectedSeats, totalPrice, kdvTutarı, genelToplam } = route.params || {};  // Eğer params undefined ise boş bir obje döner
  

  // Parametreler eksikse bir uyarı göster
  if (!selectedSeats || !totalPrice || !kdvTutarı || !genelToplam) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bilet Özeti Hatalı!</Text>
        <Text style={styles.errorText}>Bilet bilgileri alınamadı. Lütfen tekrar deneyin.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bilet Özeti</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Seçilen Koltuklar:</Text>
        {selectedSeats.map((seat, index) => (
          <Text key={index} style={styles.seatText}>🎟 Koltuk: {seat}</Text>
        ))}
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fiyatlandırma:</Text>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Ara Toplam:</Text>
          <Text style={styles.value}>{totalPrice.toFixed(2)} TL</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.label}>KDV (%18):</Text>
          <Text style={styles.value}>{kdvTutarı.toFixed(2)} TL</Text>
        </View>
        <View style={[styles.priceRow, { borderTopWidth: 1, borderTopColor: '#fff', paddingTop: 10, marginTop: 10 }]} >
          <Text style={[styles.label, { fontWeight: 'bold' }]}>Genel Toplam:</Text>
          <Text style={[styles.value, { fontWeight: 'bold' }]}>{genelToplam.toFixed(2)} TL</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C2C2C',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  seatText: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  value: {
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 20,
  },
});

export default TicketScreen;
