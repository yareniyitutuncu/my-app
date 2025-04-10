import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetailScreen = ({ route, navigation }) => {
  const { Movies } = route.params;
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Favori filmleri AsyncStorage'dan yükleyin
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favoriteMovies');
        if (storedFavorites) {
          setFavoriteMovies(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorite movies:', error);
      }
    };
    loadFavorites();
  }, []);

  const handleFavoriteToggle = async (movie) => {
    let updatedFavorites;
    if (!favoriteMovies.some(favMovie => favMovie.id === movie.id)) {
      // Favoriye ekleme
      updatedFavorites = [...favoriteMovies, movie];
    } else {
      // Favoriden çıkarma
      updatedFavorites = favoriteMovies.filter(favMovie => favMovie.id !== movie.id);
    }

    // Favori filmleri AsyncStorage'a kaydedin
    try {
      await AsyncStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
      setFavoriteMovies(updatedFavorites);
    } catch (error) {
      console.error('Error saving favorite movies:', error);
    }
  };

  const isFavorite = favoriteMovies.some(favMovie => favMovie.id === Movies.id);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="caret-back-circle-outline" color="white" size={28} />
        </Pressable>
        <Pressable onPress={() => handleFavoriteToggle(Movies)}>
          <Ionicons 
            name="heart" 
            color={isFavorite ? 'red' : 'white'} 
            size={28} 
            style={styles.favoriteIcon} 
          />
        </Pressable>
      </View>

      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image source={Movies.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{Movies.title}</Text>
          <Text style={styles.categories}>{Movies.category}</Text>
        </View>
      </View>

      <CustomButton
        buttonText="Bilet Al"
        setWidth="110"
        handleOnPress={() => navigation.navigate('BuyTicket', { Movies })}
        buttonColor="#aa2525"
        pressedButtonColor="grey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    position: 'absolute',
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 10,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  imageContainer: {
    backgroundColor: '#1e1e1e',
    padding: 18,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  categories: {
    color: 'white',
    fontSize: 17,
    marginTop: 10,
  },
  buyTicket: {
    backgroundColor: '#FF6347',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  buyTicketText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MovieDetailScreen;
