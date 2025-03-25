import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const Header = ({ logoSource, onNotificationPress }) => {
  return (
    <View style={styles.container}>

      <View style={styles.leftContainer} />

      {/* Orta Alan: Logo */}
      <View style={styles.middleContainer}>
        {logoSource ? (
          <Image
            source={logoSource} // Logo kaynağını burada belirtiyoruz
            style={styles.logo}
          />
        ) : (
          <Text style={styles.title}>Başlık</Text> // Logo yoksa başlık görünsün
        )}
      </View>

      {/* Sağ Alan: Bildirim Ikonu */}
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications-outline" size={20} color="#aa2525" />
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
    paddingHorizontal: 10,
    backgroundColor: 'grey',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 2, // Orta kısmı biraz daha genişletiyoruz ki logo tam ortada yer alsın
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    aspectRatio: 1, 
    alignSelf: 'center', 
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
