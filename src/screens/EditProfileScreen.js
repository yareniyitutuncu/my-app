import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SecondHeader, CustomButton, CustomText, ScrollViewWrapper } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome5'

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')

  return (
    <View style={styles.container}>
      <ScrollViewWrapper>

        <SecondHeader
          pageName="Profili Düzenle"
          onPress={() => navigation.goBack()}
        />

        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/movies/avengers.jpg')}
            style={styles.profileImage}
          />
          <Pressable onPress={() => console.log('Fotoğraf değiştirme işlemi')}>
            <Text style={styles.changePhotoText}>Fotoğrafı Değiştir</Text>
          </Pressable>
        </View>

        <View style={styles.form}>
          <CustomText
            secureOrNo={false}
            title="Ad Soyad"
            value={name}
            setValue={setName}
            name="Adınızı ve Soyadınızı girin"
          />

          <CustomText
            secureOrNo={false}
            title="E-posta"
            value={email}
            setValue={setEmail}
            name="E-postanızı girin"
          />

          <CustomText
            secureOrNo={false}
            title="Telefon Numarası"
            value={phone}
            setValue={setPhone}
            name="Telefon Numaranızı girin"
          />

          <CustomText
            secureOrNo={false}
            title="Doğum Tarihi"
            value={birthDate}
            setValue={setBirthDate}
            name="GG/AA/YYYY"
          />

          <View style={styles.genderContainer}>
            <Text style={styles.genderLabel}>Cinsiyet</Text>
            <View style={styles.genderButtons}>
              <Pressable
                style={[
                  styles.genderButton,
                  gender === 'Kadın' && styles.genderButtonSelected,
                ]}
                onPress={() => setGender('Kadın')}
              >
                <Icon name="venus" size={16} color="#fff" />
                <Text style={styles.genderText}>Kadın</Text>
              </Pressable>

              <Pressable
                style={[
                  styles.genderButton,
                  gender === 'Erkek' && styles.genderButtonSelected,
                ]}
                onPress={() => setGender('Erkek')}
              >
                <Icon name="mars" size={16} color="#fff" />
                <Text style={styles.genderText}>Erkek</Text>
              </Pressable>

              <Pressable
                style={[
                  styles.genderButton,
                  gender === 'Diğer' && styles.genderButtonSelected,
                ]}
                onPress={() => setGender('Diğer')}
              >
                <Icon name="genderless" size={16} color="#fff" />
                <Text style={styles.genderText}>Diğer</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.saveButton}>
          <CustomButton
            buttonText='Kaydet'
            setWidth='126'
            handleOnPress
            buttonColor='#aa2525'
            pressedButtonColor='grey'
          />
        </View>
      </ScrollViewWrapper>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  changePhotoText: {
    color: '#aa2525',
    marginTop: 10,
    fontSize: 14,
  },
  form: {
    gap: 11,
    alignItems: 'center',
  },
  genderContainer: {
    width: '80%',
    marginTop: 10,
  },
  genderLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  genderButton: {
    flex: 1,
    backgroundColor: '#444',
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 12,
    gap: 1,
  },
  genderButtonSelected: {
    backgroundColor: '#aa2525',
    borderColor: '#aa2525',
  },
  genderText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  saveButton: {
    alignItems: 'center',
    marginTop: 10,
  },
})
