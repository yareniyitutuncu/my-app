// BuyTicketScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';

const BuyTicketScreen = ({ route, navigation }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const { Movies } = route.params;

  const timeData = [
    { id: '1', title: '21:00', date: '02.04.2025' },
    { id: '2', title: '23:00', date: '03.04.2025' },
    { id: '3', title: '01:00', date: '04.04.2025' },
  ];

  const handleReservation = () => {
    if (!selectedTime) {
      Alert.alert('Uyarı', 'Lütfen bir saat seçin');
      return;
    }

    // Zaman seçildiğinde salon seçimi için ChooseSalonScreen'e yönlendirme
    navigation.navigate('ChooseSalon', { selectedTime, Movies: Movies });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Movies.image} style={styles.image} />
        <LinearGradient colors={['rgba(0,0,0,0)', '#2C2C2C']} style={styles.gradient} />
      </View>

      <Text style={styles.title}>Tarih ve Saat Seç</Text>

      <FlatList
        horizontal
        data={timeData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selectedTime?.id === item.id && styles.cardSelected]}
            onPress={() => setSelectedTime(item)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />

      <View style={{ marginBottom: 29 }}>
        <CustomButton
          buttonText="Salon Seç"
          setWidth="150"
          handleOnPress={handleReservation}
          buttonColor="#aa2525"
          pressedButtonColor="grey"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 480,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
  },
  title: {
    fontSize: 19,
    color: 'white',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  flatListContainer: {
    width: '90%',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#3B3B3B',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 19,
    minWidth: 100,
  },
  cardSelected: {
    backgroundColor: '#5E5E5E',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardDate: {
    fontSize: 14,
    color: '#A1A1A1',
  },
});

export default BuyTicketScreen;
