import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

const CitiesScreen = ({ navigation, route }) => {
  const cities = ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep', 'Eskişehir', 'Diyarbakır', 'Kayseri', 'Mersin', 'Samsun', 'Trabzon', 'Malatya'];

  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      {/* Vizyondaki Tüm Filmleri Gör Seçeneği */}
      <Pressable 
        onPress={() => {
          route.params.setSelectedCity(null); // Şehir filtresini sıfırla
          navigation.goBack();
        }}
        style={{
          padding: 15,
          backgroundColor: '#444',
          borderRadius: 10,
          marginBottom: 15,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Vizyondaki Tüm Filmleri Gör
        </Text>
      </Pressable>

      {/* Şehir Listesi */}
      <FlatList
        data={cities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => {
              route.params.setSelectedCity(item);
              navigation.goBack();
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
