import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';
import axios from 'axios';
import BASE_URL from '../components/Api';

const BuyTicketScreen = ({ route, navigation }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Movies } = route.params;

  useEffect(() => {
    fetchShowtimes();
  }, []);

  const fetchShowtimes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/showtimes/${Movies.id}`);
      const data = response.data.data;
  
      // Eğer verinin içinde 'data' obje şeklindeyse, onu uygun formata getiriyoruz
      const formatted = [
        {
          id: data.id.toString(),
          title: new Date(data.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          date: new Date(data.start_time).toLocaleDateString('tr-TR'),
          fullData: data,
        },
      ];
      setShowtimes(formatted);
    } catch (error) {
      console.log('Seans çekme hatası =>', error.message);
      Alert.alert('Hata', 'Seans bilgileri alınamadı');
    } finally {
      setLoading(false);
    }
  };
  

  const handleReservation = () => {
    if (!selectedTime) {
      Alert.alert('Uyarı', 'Lütfen bir saat seçin');
      return;
    }

    navigation.navigate('ChooseSalon', {
      selectedTime: selectedTime.fullData,
      Movies: Movies,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: Movies.image.uri }} style={styles.image} />
        <LinearGradient colors={['rgba(0,0,0,0)', '#2C2C2C']} style={styles.gradient} />
      </View>

      <Text style={styles.title}>Tarih ve Saat Seç</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          horizontal
          data={showtimes}
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
      )}

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
