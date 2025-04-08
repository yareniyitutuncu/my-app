import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

const CitiesScreen = ({ navigation, route }) => {
  const cities = [
    'Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya',
    'Gaziantep', 'Eskişehir', 'Diyarbakır', 'Kayseri', 'Mersin', 'Samsun',
    'Trabzon', 'Malatya', 'Sakarya', 'Van', 'Balıkesir', 'Erzurum', 'Manisa'
  ];

  return (
    <View style={styles.container}>
      {/* Vizyondaki Tüm Filmleri Gör Seçeneği */}
      <Pressable 
        onPress={() => {
          route.params.setSelectedCity(null); // Şehir filtresini sıfırla
          navigation.goBack();
        }}
        style={styles.allMoviesButton}
      >
        <Text style={styles.allMoviesText}>
          🎬 Vizyondaki Tüm Filmleri Gör
        </Text>
      </Pressable>

      {/* Şehir Listesi */}
      <FlatList
        data={cities}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator = {false}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => {
              route.params.setSelectedCity(item);
              navigation.goBack();
            }}
            style={styles.cityBox}
          >
            <Text style={styles.cityText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  allMoviesButton: {
    padding: 15,
    backgroundColor: '#555',
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  allMoviesText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityBox: {
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
  },
  cityText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  }
});

export default CitiesScreen;
