import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetailScreen = ({ route }) => {
  const { movies } = route.params; // Parametreyi alıyoruz (HomeScreen'den gönderilen film verisi)

  return (
    <View style={styles.container}>
      <Image source={movies.image} style={styles.image} />
      <Text style={styles.title}>{movies.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  actors: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});

export default MovieDetailScreen;
