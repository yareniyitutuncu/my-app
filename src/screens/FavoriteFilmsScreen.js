import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoriteFilmsScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>FavoriteFilmsScreen</Text>
    </View>
  )
}

export default FavoriteFilmsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center'
  },
})