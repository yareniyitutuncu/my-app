import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfileScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>EditProfileScreen</Text>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C2C',
        justifyContent: 'center',
        alignItems: 'center'
      },
})