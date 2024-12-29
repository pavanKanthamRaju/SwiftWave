import React, { useEffect,useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
 export default function ContactUs(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Logic to handle form submission
    console.log("Form submitted", { name, email, message });
  };
    return(
        <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Message"
        placeholderTextColor="#888"
        multiline
        numberOfLines={5}
        value={message}
        onChangeText={setMessage}
      />

      <Button title="Submit" onPress={handleSubmit} color="#1E90FF" />

      <View style={styles.contactDetails}>
        <Text style={styles.contactText}>For any inquiries, feel free to reach out to us:</Text>
        <Text style={styles.contactText}>Email: pavan.hope@gmail.com</Text>
        <Text style={styles.contactText}>Phone: +1 (234) 567-890</Text>
      </View>
    </ScrollView>
    );
 }


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: RFValue(24),
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 10,
      marginBottom: 15,
      fontSize: RFValue(14),
    },
    textArea: {
      height: 120,
      textAlignVertical: 'top', // Ensures text starts from the top of the input field
    },
    contactDetails: {
      marginTop: 30,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      marginBottom: 20,
    },
    contactText: {
      fontSize: RFValue(14),
      color: '#333',
    },
  });
  