import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header2 = ({ onMenuPress }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.leftContainer}>
        <Pressable onPress={onMenuPress}>
          <Ionicons name="sad" size={30} color="white" />
        </Pressable>
      </View>

    </View>
  );
};

export default Header2;

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

  
});
