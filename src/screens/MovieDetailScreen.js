import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { CustomButton, Movies } from '../components';
import { Ionicons } from '@expo/vector-icons';

const MovieDetailScreen = ({ route, navigation }) => {
  const { Movies } = route.params; 
  return (
    <View style={styles.container}>


   
      <View style = {styles.icon}>
        <Pressable onPress = {()=>navigation.goBack()}>
        <Ionicons name = 'caret-back-circle-outline' color = 'white' size={28}/>
        </Pressable>
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
  categories: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
  },
  icon : {
    position: 'absolute',  
    top: 30,               
    left: 20, 
  }
});

export default MovieDetailScreen;
