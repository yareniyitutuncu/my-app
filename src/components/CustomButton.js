import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText, setWidth, handleOnPress, buttonColor, pressedButtonColor}) => {
  return (
        <Pressable
        onPress={handleOnPress}
  
        style={({pressed}) => [{
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          width: setWidth,
        },styles.buttonStyle]  }>
        <Text style = {styles.buttonTextStyle}>{buttonText}</Text>
        </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 20
      },
      buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
      },
})