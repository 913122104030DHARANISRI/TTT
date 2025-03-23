import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={{ uri: 'https://source.unsplash.com/200x200/?town,market' }}
        style={styles.logo}
      />
      <Animatable.Text animation="fadeIn" duration={2000} style={styles.title}>
        Create an Account
      </Animatable.Text>
      
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  button: {
    width: '80%',
    backgroundColor: '#ff5722',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007BFF',
    marginTop: 10,
  },
});
