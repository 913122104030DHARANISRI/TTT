import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomerPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Customer Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2d42',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
