import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LoginScreen, SignupScreen, StartingScreen, HomeScreen, MoviesScreen, ProfileScreen, TicketsScreen } from '../screens/index';  // Ekranlarınızı içeri aktarıyoruz

// Stack ve Tab navigatörlerini oluşturuyoruz
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab ekranları için NavBar
const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black', height: 60 },
        headerShown: false,
        tabBarActiveTintColor: '#aa2525',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 13 },
        tabBarItemStyle: { borderRadius: 8, marginHorizontal: 5 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="film" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="ticket" size={size} color={color} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
};

// AuthNavigator (Giriş, Kayıt ve Başlangıç Ekranları)
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// MainNavigator (Bütün Ekranlar)
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Home" component={NavBar} />
        <Stack.Screen name="Movies" component={NavBar} />
        <Stack.Screen name="Tickets" component={NavBar} />
        <Stack.Screen name="Profile" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
