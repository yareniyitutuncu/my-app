import { StyleSheet, Text, View, Pressable, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import SecondHeader from '../components/SecondHeader'
import * as Location from 'expo-location'
import Icon from 'react-native-vector-icons/Ionicons'

const sampleCinemas = [
  { id: '1', name: 'Cinens Sineması', distance: '1.2 km' },
  { id: '2', name: 'Pia Sineması', distance: '2.5 km' },
  { id: '3', name: 'Forum Sineması', distance: '3.1 km' },
]

const NearbyCinemasScreen = ({ navigation }) => {
  const [locationGranted, setLocationGranted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cinemas, setCinemas] = useState([])

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Konum izni gerekli', 'Yakındaki sinemaları görebilmek için konum izni vermelisiniz.')
        setLoading(false)
        return
      }
      setLocationGranted(true)

      // Konum alındıktan sonra örnek veriler gösteriyoruz
      // İstersen burayı API ile değiştirebiliriz
      setCinemas(sampleCinemas)
      setLoading(false)
    }

    getLocation()
  }, [])

  const renderCinema = ({ item }) => (
    <View style={styles.cinemaCard}>
      <Icon name="film-outline" size={24} color="#fff" style={styles.cinemaIcon} />
      <View>
        <Text style={styles.cinemaName}>{item.name}</Text>
        <Text style={styles.cinemaDistance}>{item.distance}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <SecondHeader
        onPress={() => navigation.goBack()}
        pageName="Yakınınızdaki Sinemalar"
      />

      <View style={styles.content}>
        {loading ? (
          <Text style={styles.loadingText}>Konum alınıyor...</Text>
        ) : locationGranted ? (
          <FlatList
            data={cinemas}
            renderItem={renderCinema}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 14 }}
          />
        ) : (
          <Text style={styles.permissionText}>Konum izni verilmedi.</Text>
        )}
      </View>
    </View>
  )
}

export default NearbyCinemasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  permissionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  cinemaCard: {
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderColor: '#666',
    borderWidth: 1,
  },
  cinemaIcon: {
    backgroundColor: '#aa2525',
    padding: 10,
    borderRadius: 10,
  },
  cinemaName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  cinemaDistance: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
  },
})
