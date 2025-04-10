import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SecondHeader, ScrollViewWrapper } from '../components';

const FavoriteFilmsScreen = ({navigation}) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites(); // Sayfa her odaklandığında güncellenir
    });

    return unsubscribe;
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favoriteMovies');
      if (storedFavorites) {
        setFavoriteMovies(JSON.parse(storedFavorites));
      } else {
        setFavoriteMovies([]);
      }
    } catch (error) {
      console.error('Favori filmler yüklenemedi:', error);
    }
  };

  const renderMovie = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <SecondHeader
      onPress= {()=>navigation.goBack()}
      pageName = 'Favoriler'/>
      <Pressable>
      <FlatList
      data={favoriteMovies}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMovie}
      contentContainerStyle={{ paddingBottom: 70 }} 
      ListEmptyComponent={
      <Text style={styles.emptyText}>Henüz favori film eklemediniz.</Text>
  }
/>

      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
    padding: 10
  },
  image: {
    width: 160,
    height: 240,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  category: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
    fontStyle: 'italic',
  },
  emptyText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
});


export default FavoriteFilmsScreen;
