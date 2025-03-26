import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ logoSource, onNotificationPress, title }) => {
  return (
    <View style={styles.container}>

      {/* Sol Alan: Geri Butonu (isteğe bağlı) */}
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* Orta Alan: Logo veya Başlık */}
      <View style={styles.middleContainer}>
        {logoSource ? (
          <Image
            source={logoSource} // Logo kaynağını burada belirtiyoruz
            style={styles.logo}
          />
        ) : (
          <Text style={styles.title}>{title || "Başlık"}</Text> // Başlık, logo yoksa
        )}
      </View>

      {/* Sağ Alan: Bildirim Ikonu */}
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={25} color="white" />
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
    backgroundColor: '#333', // Daha koyu bir arka plan rengi
    borderBottomWidth: 2,
    height: 70
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
  middleContainer: {
    flex: 3,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    aspectRatio: 1, 
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});
