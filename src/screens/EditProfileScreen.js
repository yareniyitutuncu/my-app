import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SecondHeader from '../components/SecondHeader'

const EditProfileScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>

      <View style = {styles.header}>
      <SecondHeader
      pageName = 'Profili Düzenle'
      onPress={()=>navigation.goBack()}/>
      </View>

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
  header: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
})