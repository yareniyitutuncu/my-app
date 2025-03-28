import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

const CitiesScreen = ({ navigation, route }) => {
  const cities = ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep', 'Eskişehir', 'Diyarbakır', 'Kayseri', 'Mersin', 'Samsun', 'Trabzon', 'Malatya'];

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      <FlatList
        data={cities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => {
              route.params.setSelectedCity(item);
              navigation.goBack();  // Seçimden sonra geri dön
            }}
            style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: 'gray' }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CitiesScreen;
