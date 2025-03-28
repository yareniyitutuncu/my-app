import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React  from 'react';
import { ScrollViewWrapper, Movies, Categories,CustomButton } from '../components';
import { useState } from 'react';

const {width} = Dimensions.get('screen');

const MoviesScreen = ({navigation}) => {

  const [selectedCity, setSelectedCity] = useState(null);
  
  const filteredMovies = selectedCity 
  ? Movies.filter(movie => movie.city === selectedCity) 
  : Movies;


  return (
    <View style = {styles.container}>
          <ScrollViewWrapper>


      

      <View>
      <View style = {styles.searchButton}>
        <TextInput
        backgroundColor = '#aa2525'
        placeholder='Ara'
        placeholderTextColor={'black'}
        style = {styles.searchInput}
        />
        <Ionicons name = 'search' size={12} color={'white'} style = {styles.searchIcon}/>
      </View>
      </View>

      <View>
        <Pressable onPress={()=>navigation.navigate('Cities', {setSelectedCity})}>
          <Ionicons name = 'location-outline' size = {25} style = {{position: 'absolute', right: '29'}}/>
        </Pressable>
      </View>

      
      


      <View style = {styles.categories}>
      <Text style = {{color: 'white', marginBottom: '19', marginTop: '10'}}>Kategoriler</Text>
        <FlatList
        showsHorizontalScrollIndicator = {false}
        horizontal
        data = {Categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoriesItem}>
            <Ionicons name={item.icon} size={17} color="white" />
            <Text style = {styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        
        />
      </View>

      



        <View style = {styles.category1}>
        <Text style = {{marginLeft: 13, color: '#FFFFFF'}}>{Movies.find(movie => movie.category === 'Romantik').category}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data={Movies.filter(movie => movie.category === 'Romantik')} // Sadece id'si '1' olan filmi al
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
          <Pressable onPress={()=>navigation.navigate('MovieDetail', {Movies:item})}>

        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} />
          <Text style={styles.movieTitle}>{item.title}</Text> 
          <Text style={styles.movieCategory}>{item.category}</Text> 
        </View>
        </Pressable>)} />
        </View>

        <View style = {styles.category1}>
        <Text style = {{marginLeft: 13, color: '#FFFFFF'}}>{Movies.find(movie => movie.category === 'Fantastik').category}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data={Movies.filter(movie => movie.category === 'Fantastik')} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
          <Pressable onPress={()=>navigation.navigate('MovieDetail', {Movies:item})}>

        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} />
          <Text style={styles.movieTitle}>{item.title}</Text> 
          <Text style={styles.movieCategory}>{item.category}</Text> 
        </View>
        </Pressable>)} />
        </View>

        <View style = {styles.category1}>
        <Text style = {{marginLeft: 13, color: '#FFFFFF'}}>{Movies.find(movie => movie.category === 'Aksiyon').category}</Text>
          <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data={Movies.filter(movie => movie.category === 'Aksiyon')} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
          <Pressable onPress={()=>navigation.navigate('MovieDetail', {Movies:item})}>

        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} />
          <Text style={styles.movieTitle}>{item.title}</Text> 
          <Text style={styles.movieCategory}>{item.category}</Text> 
        </View>
        </Pressable>)} />
        </View>

        <View style = {styles.category1}>
        <Text style = {{marginLeft: 13, color: '#FFFFFF'}}>{Movies.find(movie => movie.category === 'Casusluk').category}</Text>
          <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data={Movies.filter(movie => movie.category === 'Casusluk')} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
          <Pressable onPress={()=>navigation.navigate('MovieDetail', {Movies:item})}>

        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} />
          <Text style={styles.movieTitle}>{item.title}</Text> 
          <Text style={styles.movieCategory}>{item.category}</Text> 
        </View>
        </Pressable>)} />
        </View>

        <View style = {styles.category1}>
        <Text style = {{marginLeft: 13, color: '#FFFFFF'}}>{Movies.find(movie => movie.category === 'Dram').category}</Text>
          <FlatList
        horizontal
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        data={Movies.filter(movie => movie.category === 'Dram')} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> (
          <Pressable onPress={()=>navigation.navigate('MovieDetail', {Movies:item})}>

        <View style={styles.movieItem}>
          <Image source={item.image} style={styles.movieImage} />
          <Text style={styles.movieTitle}>{item.title}</Text> 
          <Text style={styles.movieCategory}>{item.category}</Text> 
        </View>
        </Pressable>)} />
        </View>



      





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
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',  // Sayfanın büyük bir kısmını kaplasın
    alignSelf: 'center', // Yatayda ortala
    marginTop: 20,

  },
  searchInput: {
    paddingLeft: 30, // İkon için boşluk bırakıyoruz
    backgroundColor: 'grey',
    height: 40,
    borderRadius: 5,
    color: 'white',
    width: '100%',
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 10, // İkonu soldan hizalayalım
    top: 14, // Yükseklik ayarı
    color: 'black'
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
    backgroundColor: '#333', // Arka plan rengi koyu
    borderRadius: 10,
    paddingBottom: 5,
    width: '95%',
    left: 10,
    height: 100,
    justifyContent: 'center',
  },
  categoriesItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  

})