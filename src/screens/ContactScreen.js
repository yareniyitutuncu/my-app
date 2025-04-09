import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>ContactScreen</Text>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center'
},
})