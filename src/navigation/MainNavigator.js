import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LoginScreen, SignupScreen, StartingScreen, HomeScreen, MoviesScreen, ProfileScreen, TicketsScreen, CategoriesScreen, MovieDetailScreen, DrawerScreen } from '../screens/index';  // Ekranlarınızı içeri aktarıyoruz
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'black', height: 60 },
        tabBarActiveTintColor: '#aa2525',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 13 },
        tabBarItemStyle: { borderRadius: 8, marginHorizontal: 5 },
        

      }}>
        
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color}/>,
          header: ()=> <Header
          logoSource = {require('../../assets/images/popcornia.png')}
          onNotificationPress
          title = 'hgfh'/>,
      
       
 }}
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

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style = {{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthNavigator}/>
        <Stack.Screen name="Home" component={NavBar}/>
        <Stack.Screen name="Movies" component={NavBar} />
        <Stack.Screen name="Tickets" component={NavBar} />
        <Stack.Screen name="Profile" component={NavBar} />
        <Stack.Screen name = "Categories" component={CategoriesScreen} />
        <Stack.Screen name = "MovieDetail" component={MovieDetailScreen} />
        <Stack.Screen name = "Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
