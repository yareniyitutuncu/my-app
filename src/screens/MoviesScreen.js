import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React  from 'react';
import { ScrollViewWrapper, Movies, Categories, CustomButton } from '../components';
import { useState, useCallback } from 'react';

const { width } = Dimensions.get('screen');

const MoviesScreen = ({ navigation }) => {

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredMovies = useCallback(() => {
    let filtered = Movies;
    
    if (selectedCity) {
      filtered = filtered.filter(movie => movie.city === selectedCity);
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(movie => movie.category === selectedCategory);
    }

    return filtered;
  }, [selectedCity, selectedCategory]);

  const uniqueCategories = [...new Set(Movies.map(movie => movie.category))];

  return (
    <View style={styles.container}>
      <ScrollViewWrapper>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Ara'
            placeholderTextColor='white'
            style={styles.searchInput}
          />
          <Ionicons name='search' size={16} color='white' style={styles.searchIcon} />
          <Pressable onPress={() => navigation.navigate('Cities', { setSelectedCity })}>
            <Ionicons name='location-outline' size={25} style={styles.locationIcon} />
          </Pressable>
        </View>

        <View style={styles.categories}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'white', marginBottom: 19, marginTop: 10 }}>Kategoriler</Text>
            <Pressable  
            onPress={() => {
            setSelectedCategory(null); }}>
              <Text style={{ color: 'white', marginBottom: 19, marginTop: 10 }}>Tümünü Gör</Text>
            </Pressable>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable onPress={() => setSelectedCategory(item.title)}>
                <View style={styles.categoriesItem}>
                <Ionicons name={item.icon} size={17} color="white" />
                  <Text style={styles.categoryTitle}>{item.title}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        {/* Filmleri Kategorilere göre filtreleyerek listele */}
        {uniqueCategories.map(category => {
          const moviesInCategory = filteredMovies().filter(movie => movie.category === category);
          
          if (moviesInCategory.length === 0) {
            return null;
          }

          return (
            <View key={category} style={styles.categorySection}>
              <Text style={styles.categoryText}>{category}</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={moviesInCategory}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Pressable onPress={() => navigation.navigate('MovieDetail', { Movies: item })}>
                    <View style={styles.movieItem}>
                      <Image source={item.image} style={styles.movieImage} />
                      <Text style={styles.movieTitle}>{item.title}</Text>
                      <Text style={styles.movieCategory}>{item.category}</Text>
                    </View>
                  </Pressable>
                )}
              />
            </View>
          );
        })}

      </ScrollViewWrapper>
    </View>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2C2C2C'
  },
  category1: {
    marginTop: 20,
    marginBottom: 15
  },
  movieItem: {
    margin: 10,
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
    width: 200,
    height: 320
  },
  movieImage: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center'
  },
  movieTitle: {
    marginTop: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  movieCategory: {
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: 5,
    fontSize: 11,
  },
  categories: {
    marginVertical: 26,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingBottom: 5,
    width: '95%',
    left: 10,
    height: 110,
    justifyContent: 'center',
  },
  categoriesItem: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: 'rgba(128, 128, 128, 0.5)', 
    width: 70,
    height: 50,
    justifyContent: 'center',
    borderRadius: 20
  },
  categoryTitle: {
    color: 'white',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'grey',
    height: 40,
    borderRadius: 10,
    color: 'white',
    paddingLeft: 30,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
  locationIcon: {
    marginLeft: 10,
    color: 'white',
  },
  categoryText: {
    marginLeft: 13,
    color: '#FFFFFF',
    fontSize: 13,
  },
})
