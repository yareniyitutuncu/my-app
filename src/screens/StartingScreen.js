import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { CustomButton } from '../components'

const StartingScreen = ({navigation}) => {

  return (

    <View style = {styles.container}>
        
    <ImageBackground
    source={require('../../assets/images/background.jpg')}
    style={styles.background}>

    <View style={styles.overlay}>
        <Image style = {styles.popcornia} source={require('../../assets/images/popcornia.png')}/>
    </View >

    <View style = {styles.button}>
      <CustomButton
        buttonText= 'Join the Party'
        setWidth = '200'
        buttonColor = '#aa2525'
        handleOnPress = {()=>navigation.navigate('Login')}
        pressedButtonColor =  'darkred'

    />
    </View>
    </ImageBackground>

    </View>
  )
}

export default StartingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
      popcornia: {
        width: '75%',
        height: '75%', 
        aspectRatio: 1, 
        alignSelf: 'center', 
        resizeMode: 'contain', 
      },
      overlay: {
        justifyContent: 'center', 
        marginBottom: 20, 
      },
      button: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        marginTop: 1,
      },
})