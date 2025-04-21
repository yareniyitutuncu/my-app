import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomButton, ScrollViewWrapper } from '../components';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const avatar = require('../../assets/movies/avengers.jpg'); // avatar sabit kaldı

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

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user_id');
      await AsyncStorage.removeItem('user_name');
      await AsyncStorage.removeItem('user_email');
      Alert.alert("Çıkış Yapıldı", "Giriş ekranına yönlendiriliyorsunuz.");
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log("Çıkış yapılırken hata:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollViewWrapper>
        {/* Profil Fotoğrafı ve Bilgiler */}
        <View style={styles.profileSection}>
        <Ionicons name="person-circle" size={80} color="white" />
          <Text style={styles.name}>{userName || 'Kullanıcı Adı'}</Text>
        </View>

        {/* Menü Butonları */}
        <View style={styles.menuSection}>
          <CustomButton
            buttonText="Profili Düzenle"
            setWidth="360"
            handleOnPress={() => navigation.navigate('EditProfile')}
            buttonColor="grey"
            pressedButtonColor
            icon="person"
            iconColor="white"
          />

          <CustomButton
            buttonText="Ayarlar"
            setWidth="360"
            handleOnPress={() => navigation.navigate('Settings')}
            buttonColor="grey"
            pressedButtonColor
            icon="settings-outline"
            iconColor="white"
          />

          <CustomButton
            buttonText="Favoriler"
            setWidth="360"
            handleOnPress={() => navigation.navigate('FavoriteFilms')}
            buttonColor="grey"
            pressedButtonColor
            icon="heart"
            iconColor="white"
          />

          <CustomButton
            buttonText="Yakınınızdaki Sinemalar"
            setWidth="360"
            handleOnPress={() => navigation.navigate('NearbyCinemas')}
            buttonColor="grey"
            pressedButtonColor
            icon="location"
            iconColor="white"
          />
        </View>

        {/* Çıkış Butonu */}
        <View style={styles.exitButton}>
          <CustomButton
            buttonText="Çıkış Yap"
            setWidth="160"
            handleOnPress={handleLogout}
            buttonColor="#aa2525"
            pressedButtonColor="grey"
            icon="exit-outline"
            iconColor="white"
          />
        </View>
      </ScrollViewWrapper>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
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
  exitButton: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
});
