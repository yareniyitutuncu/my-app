import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const CustomButton = ({ buttonText, setWidth, handleOnPress, buttonColor, pressedButtonColor, icon, iconColor }) => {
  return (
    <Pressable
      onPress={handleOnPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          width: setWidth,
        },
        styles.buttonStyle,
      ]}
    >
      <View style={styles.buttonContent}>
        {icon && <Ionicons name={icon} size={17} color={iconColor || 'white'} style={styles.iconStyle} />}
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row', // İkon ve metni yatayda hizalamak için
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    marginRight: 10, // İkon ve metin arasına boşluk ekler
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
