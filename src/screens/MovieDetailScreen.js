import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { CustomButton } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetailScreen = ({ route, navigation }) => {
  const { Movies } = route.params;
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
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
      updatedFavorites = [...favoriteMovies, movie];
    } else {
      updatedFavorites = favoriteMovies.filter(favMovie => favMovie.id !== movie.id);
    }

    try {
      await AsyncStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
      setFavoriteMovies(updatedFavorites);
    } catch (error) {
      console.error('Error saving favorite movies:', error);
    }
  };

  const isFavorite = favoriteMovies.some(favMovie => favMovie.id === Movies.id);

  // ⭐ IMDb puanını yıldızlara çeviren fonksiyon
  const renderStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FontAwesome key={`star-${i}`} name="star" size={16} color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesome key="half-star" name="star-half-full" size={16} color="#FFD700" />);
    }

    while (stars.length < 5) {
      stars.push(<FontAwesome key={`empty-${stars.length}`} name="star-o" size={16} color="#FFD700" />);
    }

    return stars;
  };

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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.categories}>{Movies.category}</Text>

            <View style={styles.imdbStars}>
              {renderStars(Movies.imdb)}
              <Text style={styles.imdbScore}> {Movies.imdb}</Text>
            </View>
          </View>

          <Text style={styles.description}>{Movies.description}</Text>
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
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    zIndex: 1,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 0,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  imageContainer: {
    backgroundColor: '#252525',
    padding: 18,
    borderRadius: 20,
  },
  image: {
    width: 220,
    height: 340,
    borderRadius: 12,
  },
  textContainer: {
    marginTop: 24,
    width: '100%',
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  categories: {
    color: '#AAAAAA',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 10,
  },
  imdbStars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginRight: 10,
  },
  imdbScore: {
    color: '#FFD700',
    fontSize: 14,
    marginLeft: 6,
  },
  description: {
    color: '#DDDDDD',
    fontSize: 15,
    marginTop: 14,
    lineHeight: 22,
    textAlign: 'justify',
  },
});

export default MovieDetailScreen;
