import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Movies } from '../components'; // Mutlaka doğru yolu yaz

const CitiesScreen = ({ navigation }) => {
  const uniqueCities = [...new Set(Movies.map(movie => movie.city))];

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
        <Text style={styles.allMoviesText}>
          🎬 Vizyondaki Tüm Filmleri Gör
        </Text>
      </Pressable>

      <FlatList
        data={uniqueCities}
        keyExtractor={(item) => item}
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
  }
});

export default CitiesScreen;
