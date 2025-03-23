import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/townly-bg.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Townly</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginSelection')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, color: '#fff', fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
});
