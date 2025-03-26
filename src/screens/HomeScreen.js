import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, Dimensions, TextInput,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton, ScrollViewWrapper, Movies, Categories, Cinemas } from '../components';

// Ekranın genişliği için bir değişken
const {width} = Dimensions.get('screen');


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollViewWrapper>

      {/* <Header
      logoSource = {require('../../assets/images/popcornia.png')}/> */}

    <View style = {styles.searchButton}>
        <TextInput
        backgroundColor = '#aa2525'
        placeholder='Search'
        placeholderTextColor={'black'}
        style = {styles.searchInput}
        />
        <Ionicons name = 'search' size={12} color={'white'} style = {styles.searchIcon}/>

      </View>

      <View style = {styles.categories}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  }}>
      <Text style = {{color: 'white', fontSize: 17}}>Categories</Text>
        <CustomButton 
        buttonText = 'View All'
        handleOnPress = {()=>navigation.navigate('Categories')}
        buttonColor 
        pressedButtonColor 
        />
        </View>
        <FlatList
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
      
      <View style = {styles.filmContainer}>
        <Text style = {{color: 'white', fontSize: 17, paddingBottom: '20'}}>Popüler Filmler</Text>
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
          handleOnPress = {()=>navigation.navigate('MovieDetail', {Movies:item})}
          setWidth
          buttonColor
          pressedButtonColor
          />
        </View>)} />
      </View>

      <View style = {styles.cinemaCenter}>
        <Text style = {{color: 'white', paddingBottom: 10, fontSize: 17 }}>Yakınınızdaki Sinemalar</Text>
     <FlatList
      data={Cinemas}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled 
      snapToAlignment="center" 
      scrollEventThrottle={16} 
      decelerationRate="fast" 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{ alignItems: 'center' }} 
      renderItem={({ item }) => (
        <View style={styles.cinemaItem}>
          <Text style={styles.cinemaName}>{item.name}</Text>
          <Image source = {item.image} style = {styles.cinemaImage}/>
          <View style = {{alignItems: 'center' ,justifyContent: 'center', backgroundColor: '#aa2525', marginTop: 20, borderRadius: 10, width: 200, height: 60}}>
          <Text>Adres:</Text>
          <Text style={styles.cinemaAddress}>{item.address}</Text>
          </View>

          {/* <Image source = /> */}

        </View>
      )}
    />
      </View>



      </ScrollViewWrapper>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalList: {
    paddingLeft: 10,
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
  filmContainer: {
    marginTop: 50,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16

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
  categories: {
    marginTop: 30,
  },
  searchIcon: {
    position: 'absolute',
    left: 10, // İkonu soldan hizalayalım
    top: 14, // Yükseklik ayarı
    color: 'black'
  },
  categoriesItem: {
    marginRight: 15,  // Aralarındaki boşluk
    alignItems: 'center',
  },
  categoryTitle: {    
    color: 'white',
    marginTop: 5,
    fontSize: 16,
  },
  cinemaItem: {
    width: width, // 📌 Her öğe tam ekran genişliğinde olacak
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cinemaName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  cinemaCenter: {
    paddingTop: 50
  },
  cinemaImage: {
    width: '60%',
    height: 250,
    borderRadius: 10,
  }
});

export default HomeScreen;
