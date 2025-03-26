import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import ScrollViewWrapper from '../components/ScrollViewWrapper';
import { CustomButton, Movies } from '../components';

// const window = Dimensions.get('window');
const {width} = Dimensions.get('screen');

// console.log("Window Width:", window.width);
// console.log("Window Height:", window.height);

// console.log("Screen Width:", screen.width);
// console.log("Screen Height:", screen.height);






const MoviesScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <ScrollViewWrapper>

      <View style = {styles.moviesContainer}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data = {Movies}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} /> 
          <Text style={styles.movieTitle}>{item.title}</Text>
          <CustomButton
          buttonText = 'İncele'
          setWidth
          handleOnPress = {()=>navigation.navigate('MovieDetail', {Movies:item})}
          buttonColor
          pressedButtonColor
          />
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