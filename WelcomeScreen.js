import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground source={require('../assets/townly-bg.jpg')} style={styles.bg}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome to Townly!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginSelection')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  button: { backgroundColor: '#ff9800', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
});
