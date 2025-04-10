import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SecondHeader = ({ onPress, pageName }) => {
  return (
    <View style={styles.container}>
      
      {/* Geri tuşu */}
      <Pressable style={styles.leftContainer} onPress={onPress}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </Pressable>

      {/* Başlık */}
      <View style={styles.centerContainer}>
        <Text style={styles.titleText}>{pageName}</Text>
      </View>

      {/* Sağ boşluk - ortalamayı korumak için */}
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    borderBottomWidth: 2,
    borderBottomColor: '#444',
    
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightPlaceholder: {
    width: 40, // Sol ikonla eşit genişlikte boşluk
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
