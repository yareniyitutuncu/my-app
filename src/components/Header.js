import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ profileImageSource, onMenuPress }) => {
  return (
    <View style={styles.container}>
      
      {/* Sol Alan: Menü Butonu */}
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onMenuPress}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Sağ Alan: Profil Fotoğrafı */}
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Image
            source={profileImageSource} // Profil fotoğrafını burada belirtiyoruz
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#333', // Koyu arka plan rengi
    borderBottomWidth: 2,
    borderBottomColor: '#444', // Alt çizgi
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Yuvarlak profil fotoğrafı
  },
});
