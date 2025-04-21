import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CustomDrawer = (props) => {

  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getUserData = async () => {
      try {
        const name = await AsyncStorage.getItem('user_name');
        const email = await AsyncStorage.getItem('user_email'); // email kaydedildiyse

        if (name) setUserName(name);
        if (email) setUserEmail(email);
      } catch (error) {
        console.log('Kullanıcı verisi alınamadı:', error);
      }
    };

    getUserData();
  }, []);
  
  
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Profil Alanı */}
      <View style={styles.profileSection}>
        <Ionicons name="person-circle" size={80} color="white" />
          <Text style={styles.profileName}>{userName || 'Kullanıcı Adı'}</Text>
      </View>

    <View style = {{flexDirection: 'row'}}>
    <CustomButton
    icon = 'person'
    color = 'white'
    style = {styles.favoritesButton}
    buttonText= 'Profili Düzenle'
    handleOnPress = {()=>props.navigation.navigate('EditProfile')}
    setWidth = '300'
    buttonColor = '#aa2525'
    pressedButtonColor
    />
    </View>

    <View style = {{flexDirection: 'row'}}>
    <CustomButton
    icon = 'settings'
    color = 'white'
    style = {styles.favoritesButton}
    buttonText= 'Ayarlar'
    handleOnPress = {()=>props.navigation.navigate('Settings')}
    setWidth = '300'
    buttonColor = '#aa2525'
    pressedButtonColor
    />
    </View>

    <View style = {{flexDirection: 'row'}}>
    <CustomButton
    icon = 'heart'
    color = 'white'
    style = {styles.favoritesButton}
    buttonText= 'Favoriler'
    handleOnPress = {()=>props.navigation.navigate('FavoriteFilms')}
    setWidth = '300'
    buttonColor = '#aa2525'
    pressedButtonColor
    />
    </View>

    <View style = {{flexDirection: 'row'}}>
    <CustomButton
    icon = 'location'
    color = 'white'
    style = {styles.favoritesButton}
    buttonText= 'Yakınınızdaki Sinemalar'
    handleOnPress = {()=>props.navigation.navigate('NearbyCinemas')}
    setWidth = '300'
    buttonColor = '#aa2525'
    pressedButtonColor
    />
    </View>


    <View > 
    <Pressable onPress={()=>props.navigation.navigate('Contact')} >
      <Text style = {styles.contact}>Bizimle İletişime Geçin</Text>
    </Pressable>
    </View>

    <View > 
    <Pressable onPress={()=>props.navigation.navigate('Contact')} >
      <Text style = {styles.exit}>Çıkış Yap</Text>
    </Pressable>
    </View>


      
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", 
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
  contact: {
    color: 'white',
    marginTop: 30,
    left: 20,
    fontSize: 13
  },
  exit: {
    color: 'white',
    marginTop: 20,
    left: 20,
    fontSize: 13
  },
});

export default CustomDrawer;
