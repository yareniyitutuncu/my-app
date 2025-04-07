// src/screens/PaymentScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomButton } from '../components';

const PaymentScreen = ({ route, navigation }) => {
  const { selectedSeats, totalPrice } = route.params;

  const KDV_ORANI = 0.18;
  const kdvTutarı = totalPrice * KDV_ORANI;
  const genelToplam = totalPrice + kdvTutarı;
  

  const handleCompletePayment = () => {
    // Bilet bilgilerini TicketScreen'e gönder
    navigation.navigate('Tickets', {
      selectedSeats,
      totalPrice,
      kdvTutarı,
      genelToplam,
    });
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Ödeme Özeti</Text>

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
        <View style={[styles.priceRow, { borderTopWidth: 1, borderTopColor: '#fff', paddingTop: 10, marginTop: 10 }]}>
          <Text style={[styles.label, { fontWeight: 'bold' }]}>Genel Toplam:</Text>
          <Text style={[styles.value, { fontWeight: 'bold' }]}>{genelToplam.toFixed(2)} TL</Text>
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          buttonText="Ödemeyi Tamamla"
          setWidth="175"
          handleOnPress={handleCompletePayment}  // Buton tıklama fonksiyonu
          buttonColor="#aa2525"
          pressedButtonColor="grey"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#2C2C2C',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
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

export default PaymentScreen;
