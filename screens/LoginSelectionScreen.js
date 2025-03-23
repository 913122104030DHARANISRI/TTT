import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginSelectionScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/townly-bg.jpg')}  // Ensure the image is in the assets folder
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appName}>Townly</Text>

        <Text style={styles.subtitle}>Empowering local businesses and customers</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CustomerLogin')}>
          <Text style={styles.buttonText}>I am a Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.businessButton]}
          onPress={() => navigation.navigate('BusinessLogin')}>
          <Text style={styles.buttonText}>I am a Business Owner</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for better text visibility
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    width: '80%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  businessButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginSelectionScreen;
