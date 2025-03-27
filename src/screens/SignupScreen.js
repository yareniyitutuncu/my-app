import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { CustomText, CustomButton } from '../components/index'

const SignupScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <View style = {styles.container}>
      <ImageBackground
      style = {styles.background}
      source={require('../../assets/images/background.jpg')}
      >

      <View style = {styles.firstflex}>
        <Image 
        style = {styles.popcornia}
        source = {require('../../assets/images/popcornia.png')}/>
      </View>

      <View style = {styles.secondflex}>

        <CustomText
        title = 'Email'
        name = 'Enter your email'
        setValue = {setEmail}
        value = {email}
        secureOrNo = {false}
        />

        <CustomText
        title = 'Password'
        name = 'Enter your password'
        setValue = {setPassword}
        value = {password}
        secureOrNo = {true}
        />

        <CustomText
        title = 'Confirm Password'
        name = 'Confirm your password'
        setValue = {setPassword}
        value = {password}
        secureOrNo = {true}
        />

        <CustomButton
        buttonText = 'Sign Up'
        setWidth = '200'
        handleOnPress={()=>navigation.navigate('Main')}
        buttonColor = '#aa2525'
        pressedButtonColor = 'darkred'
        />

      </View>

      <View style = {styles.thirdflex}>
        <Text style = {{ marginTop: 25, marginRight: 10, color: 'white' }}>Already have an account? </Text>
        <CustomButton
        buttonText = 'Login'
        setWidth = '20%'
        handleOnPress={()=>navigation.navigate('Login')}
        buttonColor = '#aa2525'
        pressedButtonColor = 'darkred'
        />

      </View>

      </ImageBackground>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  popcornia: {
    width: '55%',
    height: '55%', 
    aspectRatio: 1, 
    alignSelf: 'center', 
    resizeMode: 'contain', 
  },
  firstflex: {
    marginTop: 40
  },
  secondflex: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 170,   
  },
  thirdflex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100

  }
})