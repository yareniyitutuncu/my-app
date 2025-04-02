import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from '../components';

const MovieDetailScreen = ({ route, navigation }) => {
  const { Movies } = route.params;

  return (
    <View style={styles.container}>
      {/* Back and Favorite icons */}
      <View style={styles.icon}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="caret-back-circle-outline" color="white" size={28} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('FavoriteFilms')}>
          <Ionicons name="heart" color="red" size={28} style={styles.favoriteIcon} />
        </Pressable>
      </View>

      {/* Image Container */}
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
      buttonText = 'Bilet Al'
      setWidth = '110'
      handleOnPress = {()=>navigation.navigate('BuyTicket')}
      buttonColor = '#aa2525'
      pressedButtonColor = 'grey'
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
    marginTop: 15,  // Başlık ve ikonlar için boşluk bırakmak
  },
  imageContainer: {
    backgroundColor: '#1e1e1e',
    padding: 18,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,  // Gölgelendirme efekti
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
