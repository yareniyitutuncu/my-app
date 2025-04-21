import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import BASE_URL from '../components/Api';

const CinemasScreen = ({ navigation }) => {
  const [cinemas, setCinemas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cityId = global.selectedCity?.id;

    if (cityId) {
      console.log("Seçilen şehir ID:", cityId);

      axios
        .get(`${BASE_URL}/api/cities/${cityId}/cinemas`)
        .then((response) => {
          console.log("API Yanıtı:", response.data);

          if (
            response.data &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            setCinemas(response.data.data);
          } else {
            console.log("Bu şehre ait sinema bulunamadı.");
            setCinemas([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Sinemalar alınırken hata:", error.message);
          setLoading(false);
        });
    } else {
      console.log("Seçilen şehir yok veya geçersiz.");
      setLoading(false);
    }
  }, [global.selectedCity]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }

  if (cinemas.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Bu şehre ait sinema bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          global.selectedCinema = null;
          navigation.navigate("Main");
        }}
        style={styles.allCinemasButton}
      >
        <Text style={styles.allCinemasText}>🎥 Tüm Sinemaları Gör</Text>
      </Pressable>

      <FlatList
        data={cinemas}
        keyExtractor={(item) => item.cinema_id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            key={item.cinema_id} // Key prop ekleniyor
            onPress={() => {
              global.selectedCinema = item;
              navigation.navigate("MoviesScreen", { selectedCinema: item });
            }}
            style={styles.cinemaBox}
          >
            <Text style={styles.cinemaText}>{item.cinema_name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },
  allCinemasButton: {
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
  allCinemasText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  cinemaBox: {
    backgroundColor: 'grey',
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginBottom: 20,
    width: '48%', // Dinamik genişlik
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cinemaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: '50%',
  },
});

export default CinemasScreen;
