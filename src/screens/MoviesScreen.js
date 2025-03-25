import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import ScrollViewWrapper, { ScrollView } from '../components/ScrollViewWrapper';

// const window = Dimensions.get('window');
const {width} = Dimensions.get('screen');

// console.log("Window Width:", window.width);
// console.log("Window Height:", window.height);

// console.log("Screen Width:", screen.width);
// console.log("Screen Height:", screen.height);

const movies = [ 
  { id: '1', title: 'Movie 1', image: require('../../assets/movies/joker.jpg') },
  { id: '2', title: 'Movie 2', image: require('../../assets/movies/wonka.jpeg') },
  { id: '3', title: 'Movie 3', image: require('../../assets/movies/beautyandbeast.png') },
  { id: '4', title: 'Movie 4', image: require('../../assets/movies/avengers.jpg') },
  { id: '5', title: 'Movie 5', image: require('../../assets/movies/skyfall.jpg') },

];


const MoviesScreen = () => {
  return (
    <View style = {styles.container}>
      <ScrollViewWrapper>

      <View style = {styles.moviesContainer}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data = {movies}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} /> {/* Film afişi */}
          <Text style={styles.movieTitle}>{item.title}</Text> {/* Film başlığı */}
        </View>)} />
      </View>
      </ScrollViewWrapper>
    </View>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  moviesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    width: width
  },
  movieItem: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 10,
    width: 200,
  },
  movieImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})