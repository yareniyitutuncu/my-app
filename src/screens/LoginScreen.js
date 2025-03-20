import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, CustomText } from '../components';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Image style={styles.popcornia} source={require('../../assets/images/popcornia.png')} />
        </View>


        <View style = {styles.firstflex}>
        <CustomText
          title="Email"
          secureOrNo={false}
          setValue={setEmail}
          value={email}
          name="Enter your email"
        />
        
        <CustomText
          title="Password"
          secureOrNo={false}
          setValue={setPassword}
          value={password}
          name="Enter your password"
        />
        <CustomButton
          buttonText= 'Login'
          setWidth = '200'
          buttonColor = '#aa2525'
          handleOnPress = {()=> navigation.navigate('Home')}
          pressedButtonColor =  'darkred'
          
        />
        </View>

        <View style = {styles.secondflex}>
        <Text style = {{ marginTop: 25, marginRight: 10, color: 'white'}} >Don't have an account?</Text>
        <CustomButton
        buttonText = 'Sign Up'
        setWidth = '20%'
        handleOnPress = {()=> navigation.navigate('Signup')}
        buttonColor = '#aa2525'
        pressedButtonColor = 'darkred'
        />

        </View>

      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  overlay: {
    justifyContent: 'center', 
    marginBottom: 30, 
  },
  firstflex: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 150,   
  },
  secondflex: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 200
  }
});
