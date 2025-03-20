import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MoviesScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>Movies Screen</Text>
    </View>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})