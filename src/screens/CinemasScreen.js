import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const BASE_URL = 'http://10.10.27.17:19058'; // API Base URL

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
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              global.selectedCinema = item; // Seçilen sinema bilgilerini global değişkende sakla
              navigation.navigate("MoviesScreen", { selectedCinema: item }); // MoviesScreen'e yönlendir
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
    padding: 20,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
  },
  allCinemasButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  allCinemasText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  cinemaBox: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
  },
  cinemaText: {
    fontSize: 18,
  },
});

export default CinemasScreen;
