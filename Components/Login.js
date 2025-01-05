import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const backgroundImage = require('../assets/cool-background.png'); 
  const navigation = useNavigation();
  const handleLogin = async () => {
    // Basic validation (you can expand this)
    if (!email || !password) {

      Alert.alert('Error', 'Please enter both email and password.');
    } else {
        try {
            const response = await axios.post('http://192.168.1.3:3000/login', {
              email,
              password,
            });
                debugger 
                console.log(response);
            // Handle the response from your server
            if (response.status == 200) {
                navigation.navigate('Home');
              // You can navigate to another screen or store token/etc.
            } else {
              Alert.alert('Login failed', response.data.message || 'Invalid credentials');
            }
          } catch (error) {
            console.error('Error:', error);
            Alert.alert('Network Error', 'There was an error connecting to the server');
          }
    }
  };

  return (
    <ImageBackground
    source={backgroundImage} // Use any elegant background image URL
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay to enhance text visibility
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    height: 50,
    backgroundColor: '#e60023', // Button color (you can change to your choice)
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
