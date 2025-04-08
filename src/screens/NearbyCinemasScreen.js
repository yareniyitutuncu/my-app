import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NearbyCinemasScreen = () => {
  return (
    <View style = {styles.container}> 
      <Text>NearbyCinemasScreen</Text>
    </View>
  )
}

export default NearbyCinemasScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C2C',
        justifyContent: 'center',
        alignItems: 'center'
      },
})