import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { CustomButton } from '../components';
import BASE_URL from '../components/Api';

const ChooseSalonScreen = ({ route, navigation }) => {
  const { selectedTime, Movies } = route.params;
  const [selectedHall, setSelectedHall] = useState(null);
  const [hallData, setHallData] = useState([]);

  useEffect(() => {
    const showtimeId = selectedTime.id;

    axios.get(`${BASE_URL}/api/showtimes/${showtimeId}`)
      .then((response) => {
        const data = response.data.data;

        if (!data || !data.hall_name) {
          Alert.alert('Uyarı', 'Salon bilgisi bulunamadı.');
          return;
        }

        // Gelen veriyi tek bir salon olarak formatlıyoruz
        const halls = [{
          id: data.hall_id.toString(),
          name: data.hall_name,
          showtime_id: data.id,
        }];

        setHallData(halls);
      })
      .catch((error) => {
        console.error('Salon verisi çekilirken hata:', error.message);
        Alert.alert('Hata', 'Salon bilgileri yüklenemedi');
      });
  }, [selectedTime]);

  const handleReservation = () => {
    if (!selectedHall) {
      Alert.alert('Uyarı', 'Lütfen bir salon seçin');
      return;
    }

    navigation.navigate('Reservation', {
      time: selectedTime,
      hall: selectedHall,
      movie: Movies,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: Movies.movie_poster_url || Movies.image?.uri }} style={styles.image} />
        <LinearGradient colors={['rgba(0,0,0,0)', '#2C2C2C']} style={styles.gradient} />
      </View>

      <Text style={styles.title}>Salon Seç</Text>

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

export default ChooseSalonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
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
