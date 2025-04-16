import { StyleSheet, Text, View, ImageBackground, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, CustomText } from '../components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from '../components/Api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setErrorMessage('');

    axios.post(`${BASE_URL}/api/login`, {
      email,
      password,
    })
    .then(response => {
      if (response.data.status === true) {
        const userId = response.data.data.user_id;

        // user_id'yi AsyncStorage'e kaydet
        AsyncStorage.setItem('user_id', userId.toString())
          .then(() => {
            Alert.alert("Success", "Login successful!");
            navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
          })
          .catch(err => {
            console.log("AsyncStorage error:", err);
            setErrorMessage("Login succeeded but failed to save user session.");
          });
      } else {
        setErrorMessage(response.data.message || "Login failed. Please check your credentials.");
      }
    })
    .catch(error => {
      console.log("Login error:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Image style={styles.popcornia} source={require('../../assets/images/popcornia.png')} />
        </View>

        <View style={styles.firstflex}>
          <CustomText
            title="Email"
            secureOrNo={false}
            setValue={setEmail}
            value={email}
            name="Enter your email"
          />
          <CustomText
            title="Password"
            secureOrNo={true}
            setValue={setPassword}
            value={password}
            name="Enter your password"
          />
          <CustomButton
            buttonText={loading ? 'Logging in...' : 'Login'}
            setWidth="200"
            buttonColor="#aa2525"
            handleOnPress={handleLogin}
            pressedButtonColor="darkred"
            disabled={loading}
          />
        </View>

        {errorMessage !== "" && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>{errorMessage}</Text>
        )}

        <View style={styles.secondflex}>
          <Text style={{ marginTop: 25, marginRight: 10, color: 'white' }}>Don't have an account?</Text>
          <CustomButton
            buttonText="Sign Up"
            setWidth="20%"
            handleOnPress={() => navigation.navigate('Signup')}
            buttonColor="#aa2525"
            pressedButtonColor="darkred"
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