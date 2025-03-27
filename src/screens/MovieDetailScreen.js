import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movies } from '../components';
import { Ionicons } from '@expo/vector-icons';

const MovieDetailScreen = ({ route }) => {
  const { Movies } = route.params; 
  return (
    <View style={styles.container}>

      <View>
        <Ionicons name = 'caret-back-circle-outline' color = 'white' />
      </View>

      <View>
      <Image source={Movies.image} style={styles.image} />
      <Text style={styles.title}>{Movies.title}</Text>
      <Text style = {styles.categories}>{Movies.category}</Text>
      </View>
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
  categories: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
  }
});

export default MovieDetailScreen;
