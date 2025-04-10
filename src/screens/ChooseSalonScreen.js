import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';

const ChooseSalonScreen = ({ route, navigation }) => {
  const { selectedTime } = route.params;
  const { Movies } = route.params;

  const hallData = [
    { id: 'h1', name: 'Salon 1' },
    { id: 'h2', name: 'Salon 2' },
    { id: 'h3', name: 'VIP Salon' },
  ];

  const [selectedHall, setSelectedHall] = useState(null);

  const handleReservation = () => {
    if (!selectedHall) {
      Alert.alert('Uyarı', 'Lütfen bir salon seçin');
      return;
    }

    navigation.navigate('Reservation', {
      time: selectedTime,
      hall: selectedHall,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Movies.image} style={styles.image} />
        <LinearGradient colors={['rgba(0,0,0,0)', '#2C2C2C']} style={styles.gradient} />
      </View>

      <Text style={styles.title}>Salon Seç</Text>

      {/* FlatList'in stilini düzenleyerek ortalamayı sağlıyoruz */}
      <FlatList
        horizontal
        data={hallData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selectedHall?.id === item.id && styles.cardSelected]}
            onPress={() => setSelectedHall(item)}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center', // Bu satır FlatList'i dikey olarak ortalar
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
    alignSelf: 'center',  
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
    minWidth: 90,
    alignSelf: 'center',  

  },
  cardSelected: {
    backgroundColor: '#5E5E5E',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ChooseSalonScreen;
