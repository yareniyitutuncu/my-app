import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import React, { useState } from 'react';
import { Movies } from '../components';

const CinemasScreen = ({navigation}) => {

  const cityCinemas = [...new Set(
    selectedCity
      ? Movies.filter(movie => movie.city === selectedCity).map(movie => movie.cinema)
      : Movies.map(movie => movie.cinema)
  )];



  return (
    <View style={styles.container}>
            <Pressable
        onPress={() => {
          global.selectedCinema = null;  // Sinemayı sıfırla
          navigation.navigate("Main");
        }}
        style={styles.allCinemasButton}
      >
        <Text style={styles.allCinemasText}>🎥 Tüm Sinemaları Gör</Text>
      </Pressable>
      <FlatList
        data={cityCinemas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              global.selectedCinema = item;  // Seçilen sinemayı state'e ekle
              navigation.navigate("Main");
            }}
            style={styles.cinemaBox}
          >
            <Text style={styles.cinemaText}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default CinemasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },
  selectedCityText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  selectedCinemaText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  allCinemasButton: {
    paddingVertical: 16,
    backgroundColor: '#aa2525',
    borderRadius: 15,
    marginBottom: 30,
    alignItems: 'center',
  },
  allCinemasText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cinemaBox: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  cinemaText: {
    color: '#fff',
    fontSize: 16,
  },
});
