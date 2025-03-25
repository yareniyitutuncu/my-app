// ScrollViewWrapper.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ScrollViewWrapper = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20, // Alt kısmına boşluk eklemek için
  },
});

export default ScrollViewWrapper;
