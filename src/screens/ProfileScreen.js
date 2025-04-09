import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { CustomButton, ScrollViewWrapper } from '../components'
import { ScrollView } from 'react-native-gesture-handler'

const ProfileScreen = ({navigation}) => {
  const user = {
    name: 'Yaren İyitütüncü',
    email: 'yaren@example.com',
    avatar: require('../../assets/movies/avengers.jpg'), // Yerel resim
  }

  return (
  
    <View style={styles.container}>
    <ScrollViewWrapper>
      {/* Profil Fotoğrafı ve Bilgiler */}
      <View style={styles.profileSection}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Ayarlar */}
      <View style={styles.menuSection}>

      <CustomButton
        buttonText = 'Profili Düzenle'
        setWidth  = '360'
        handleOnPress = {()=>navigation.navigate('EditProfile')}
        buttonColor = 'grey'
        pressedButtonColor 
        icon = 'person'
        iconColor = 'white'
        />

        <CustomButton
        buttonText = 'Ayarlar'
        setWidth  = '360'
        handleOnPress = {()=>navigation.navigate('Settings')}
        buttonColor = 'grey'
        pressedButtonColor
        icon = 'settings-outline'
        iconColor = 'white'
        />


        <CustomButton
        buttonText = 'Favoriler'
        setWidth  = '360'
        handleOnPress = {()=>navigation.navigate('FavoriteFilms')}
        buttonColor = 'grey'
        pressedButtonColor
        icon = 'heart'
        iconColor = 'white'
        />

        <CustomButton
        buttonText = 'Yakınınızdaki Sinemalar'
        setWidth  = '360'
        handleOnPress = {()=>navigation.navigate('NearbyCinemas')}
        buttonColor = 'grey'
        pressedButtonColor 
        icon = 'location'
        iconColor = 'white'
        />


      </View>

      <View style = {styles.exitButton}>

      {/* Çıkış */}
      <CustomButton
      buttonText = 'Çıkış Yap'
      setWidth  = '160'
      handleOnPress
      buttonColor = '#aa2525'
      pressedButtonColor = 'grey'
      icon = 'exit-outline'
      iconColor = 'white'
      />
      </View>


    </ScrollViewWrapper>
    </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  menuSection: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  menuText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  exitButton: {
    alignItems: 'center'
  },


})
