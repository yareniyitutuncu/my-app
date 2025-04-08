// src/screens/TicketsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const TicketsScreen = ({ route }) => {
  const { ticketInfo } = route.params || {};

  if (!ticketInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bilet bilgisi bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../../assets/cinemas/ticket-image.png')}
        style={styles.ticketImage}
        imageStyle={{ borderRadius: 15 }} // opsiyonel köşe yumuşatma
      >
        <View style={styles.overlay}>
          <Text style={styles.sectionTitle}>Seçilen Koltuklar:</Text>
          {ticketInfo.selectedSeats.map((seat, index) => (
            <Text key={index} style={styles.seatText}>🎟 Koltuk: {seat}</Text>
          ))}
          <Text style={styles.sectionTitle}>Toplam: {ticketInfo.totalPrice.toFixed(2)} TL</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ticketImage: {
    height: 333,
    width: 472,
    justifyContent: 'center', // içeriği dikeyde ortala
    alignItems: 'center', // içeriği yatayda ortala
    marginBottom: 20
  },
  overlay: {
    padding: 20,
    alignItems: 'center',
    right: 50
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
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TicketsScreen;
