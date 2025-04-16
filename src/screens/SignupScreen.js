import { ImageBackground, StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { CustomText, CustomButton } from "../components/index";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from "../components/Api";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match");
    }

    if (!name || !email || !password) {
      return Alert.alert("Error", "All fields are required");
    }

    setLoading(true);
    setErrorMessage(""); // Clear previous error messages

    axios
      .post(`${BASE_URL}/api/register`, {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      })
      .then(async (response) => {
        if (response.status === 200 || response.status === 201) {
          // User ID from the response
          const { user_id } = response.data.data;
          
          // Save user_id in AsyncStorage
          await AsyncStorage.setItem("user_id", user_id.toString());

          Alert.alert("Success", "Account created successfully!");
          navigation.reset({ index: 0, routes: [{ name: "Main" }] });
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.log("Signup error =>", error.response?.data || error.message);
        setErrorMessage(
          error.response?.data?.message || "An error occurred. Please try again."
        );
      })      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require("../../assets/images/background.jpg")}>
        <View style={styles.firstflex}>
          <Image style={styles.popcornia} source={require("../../assets/images/popcornia.png")} />
        </View>

        <View style={styles.secondflex}>
          <CustomText title="Name" name="Enter your name" setValue={setName} value={name} secureOrNo={false} />
          <CustomText title="Email" name="Enter your email" setValue={setEmail} value={email} secureOrNo={false} />
          <CustomText title="Password" name="Enter your password" setValue={setPassword} value={password} secureOrNo={true} />
          <CustomText title="Confirm Password" name="Confirm your password" setValue={setConfirmPassword} value={confirmPassword} secureOrNo={true} />

          <CustomButton
            buttonText={loading ? "Signing Up..." : "Sign Up"}
            setWidth="200"
            handleOnPress={handleSignUp}
            buttonColor="#aa2525"
            pressedButtonColor="darkred"
            disabled={loading}
          />
        </View>

        {errorMessage && <Text style={{ color: "red", textAlign: "center" }}>{errorMessage}</Text>}

        <View style={styles.thirdflex}>
          <Text style={{ marginTop: 25, marginRight: 10, color: "white" }}>Already have an account? </Text>
          <CustomButton
            buttonText="Login"
            setWidth="20%"
            handleOnPress={() => navigation.navigate("Login")}
            buttonColor="#aa2525"
            pressedButtonColor="darkred"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  popcornia: {
    width: "55%",
    height: "55%",
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  firstflex: {
    marginTop: 40,
  },
  secondflex: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 170,
  },
  thirdflex: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 120,
  },
});
