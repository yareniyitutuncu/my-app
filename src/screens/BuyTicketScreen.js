import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';

const BuyTicketScreen = ({ route, navigation }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const { Movies } = route.params;

  const data = [
    { id: '1', title: '21:00', date: '02.04.2025' },
    { id: '2', title: '23:00', date: '03.04.2025' },
    { id: '3', title: '01:00', date: '04.04.2025' },
  ];

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleReservation = () => {
    if (selectedTime) {
      // Navigate to Reservation screen with selected time
      navigation.navigate('Reservation', { time: selectedTime });
    } else {
      alert('Lütfen bir saat seçin');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Movies.image} // Make sure Movies.image is a valid image URI or require statement
          style={styles.image}
        />
        <LinearGradient
          colors={['rgba(0,0,0,0)', '#2C2C2C']}
          style={styles.gradient}
        />
      </View>

      <Text style={styles.title}>Tarih ve Saat Seç</Text>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selectedTime?.id === item.id && styles.cardSelected]}
            onPress={() => handleSelectTime(item)}
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
          buttonText="Rezervasyon Yap"
          setWidth="150"
          handleOnPress={handleReservation}
          buttonColor="#aa2525"
          pressedButtonColor="grey"
        />
      </View>
    </View>
  );
};

export default BuyTicketScreen;

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
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 19,
  },
  cardSelected: {
    backgroundColor: '#5E5E5E', // Selected time card
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
