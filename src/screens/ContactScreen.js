import { StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import React from 'react';
import { SecondHeader } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactScreen = ({ navigation }) => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <SecondHeader
        onPress={() => navigation.goBack()}
        pageName='Bizimle İletişime Geçin'
      />

      <View style={styles.content}>
        <Pressable style={styles.card} onPress={() => handlePress('mailto:destek@example.com')}>
          <Ionicons name="mail-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.text}>destek@example.com</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => handlePress('tel:+905551112233')}>
          <Ionicons name="call-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.text}>+90 555 111 22 33</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => handlePress('https://www.instagram.com/example')}>
          <Ionicons name="logo-instagram" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.text}>@example</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => handlePress('https://www.twitter.com/example')}>
          <Ionicons name="logo-twitter" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.text}>@example</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2C2C',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
