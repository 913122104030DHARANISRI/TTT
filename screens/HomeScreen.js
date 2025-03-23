import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Townly!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <AntDesign name="logout" size={24} color="white" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF5722",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
});
