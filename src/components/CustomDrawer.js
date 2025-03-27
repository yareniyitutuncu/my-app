import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";



const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Profil Alanı */}
      <View style={styles.profileSection}>
        <Ionicons name="person-circle" size={80} color="white" />
        <Text style={styles.profileName}>Yaren İyitütüncü</Text>
      </View>

      <View style = {{flexDirection: 'row'}}>
    <CustomButton
    icon = 'heart'
    color = 'white'
    style = {styles.favoritesButton}
    buttonText= 'Favoriler'
    handleOnPress = {()=>props.navigation.navigate('FavoriteFilms')}
    setWidth = '300'
    buttonColor = '#aa2525'
    pressedButtonColor
    />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", 
    paddingVertical: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    color: "white",
    marginTop: 5,
  },
  menuSection: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
  favoritesButton: {
    
  }
});

export default CustomDrawer;
