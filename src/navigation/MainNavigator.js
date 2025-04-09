import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LoginScreen, SignupScreen, StartingScreen, HomeScreen, MoviesScreen, ProfileScreen, TicketsScreen, CategoriesScreen, MovieDetailScreen, DrawerScreen, FavoriteFilmsScreen, CitiesScreen, BuyTicketScreen, ReservationScreen, CinemasScreen, PaymentScreen, EditProfileScreen, NearbyCinemasScreen, SettingsScreen, ContactScreen } from '../screens/index';  
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header, CustomDrawer } from '../components';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const NavBar = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#141313', height: 65 },
        tabBarActiveTintColor: '#aa2525',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: { borderRadius: 8, marginHorizontal: 5 },
        

      }}>
        
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color}/>,
          header: ()=> <Header
          profileImageSource = {require('../../assets/movies/avengers.jpg')}
          onMenuPress = {()=>navigation.openDrawer(CustomDrawer)}
          />,
      
       
 }}
      /> */}
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="film" size={size} color={color} />,
        header: ()=> <Header
        onMenuPress = {()=>navigation.openDrawer(CustomDrawer)}
        iconImageSource={require('../../assets/images/duzpopcornia.png')}
        />, }}
      />
    
      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="ticket" size={size} color={color} />,
        header: ()=> <Header
        onMenuPress = {()=>navigation.openDrawer(CustomDrawer)}
        iconImageSource={require('../../assets/images/duzpopcornia.png')}
        />, }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        header: ()=> <Header
        onMenuPress = {()=>navigation.openDrawer(CustomDrawer)}
        iconImageSource={require('../../assets/images/duzpopcornia.png')}
        />, }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />} 
      screenOptions={{ headerShown: false }}
    >     
     <Drawer.Screen name="MainTabs" component={NavBar} />
     <Drawer.Screen name = "FavoriteFilms" component={FavoriteFilmsScreen}/>
     <Drawer.Screen name = "NearbyCinemas" component={NearbyCinemasScreen}/>
     <Drawer.Screen name = "Settings" component={SettingsScreen}/>
     <Drawer.Screen name = "EditProfile" component={EditProfileScreen}/>
     <Drawer.Screen name = "Contact" component={ContactScreen}/>


    
    </Drawer.Navigator>
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
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name = "Categories" component={CategoriesScreen} />
        <Stack.Screen name = "MovieDetail" component={MovieDetailScreen} />
        <Stack.Screen name = "Cities" component={CitiesScreen}/>
        <Stack.Screen name = "FavoriteFilms" component={FavoriteFilmsScreen}/>
        <Stack.Screen name = "BuyTicket" component = {BuyTicketScreen}/>
        <Stack.Screen name = "Reservation" component = {ReservationScreen}/>
        <Stack.Screen name = "Cinemas" component={CinemasScreen}/>
        <Stack.Screen name = "Payment" component={PaymentScreen}/>
        <Stack.Screen name = "EditProfile" component={EditProfileScreen}/>
        <Stack.Screen name = "NearbyCinemas" component={NearbyCinemasScreen}/>
        <Stack.Screen name = "Settings" component={SettingsScreen}/>
        <Stack.Screen name = "Contact" component={ContactScreen}/>



      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
