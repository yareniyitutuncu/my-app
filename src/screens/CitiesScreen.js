import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import BASE_URL from '../components/Api';
const CitiesScreen = ({ navigation }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get(`${BASE_URL}/api/cities`)
    .then((response) => {
      console.log("API'den gelen veri:", response.data.data);
      if (response.data.data && response.data.data.length > 0) {
        const validCities = response.data.data.filter((item) => item && item.id);
        setCities(validCities);
      } else {
        console.log("API boş veri döndü.");
      }
      setLoading(false);
    })
    .catch((error) => {
      console.log("API'den veri alınırken hata:", error.message);
      setLoading(false);
    });
}, []);


  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          global.selectedCity = null;
          global.selectedCinema = null;
          navigation.navigate('Main');
        }}
        style={styles.allMoviesButton}
      >
        <Text style={styles.allMoviesText}>🎬 Vizyondaki Tüm Filmleri Gör</Text>
      </Pressable>

      <View>

      <FlatList
        data={cities}  // `cities` state'ini kullanıyoruz
        keyExtractor={(item) => item.id.toString()}  // id'yi kullanarak anahtarları belirliyoruz
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
         
          <Pressable
            onPress={() => {
              global.selectedCity = item;
              navigation.navigate("Cinemas");
            }}
            style={styles.cityBox}
          >
<Text style={styles.cityText}>{item.name?.toString() ?? 'Bilinmeyen Şehir'}</Text>
</Pressable>
        )}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },
  allMoviesButton: {
    paddingVertical: 16,
    backgroundColor: '#aa2525',
    borderRadius: 15,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  allMoviesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  cityBox: {
    backgroundColor: 'grey',
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginBottom: 20,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cityText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: '50%',
  }
});

export default CitiesScreen;
