import React, { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from "axios";
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'; // Import Card

export default function Orders(){
    const [data, setData] = useState([]); // State to store fetched data
    const apiUrl = 'http://localhost:3000/users';
    useEffect(()=>{
        const fetchData = async () => {
            try {
                // Replace the URL with your own or use a mock API like JSONPlaceholder
                const response = await axios.get('http://192.168.1.2:3000/users');
                setData(response.data); // Store the fetched data
              } catch (error) {
                console.error('Error fetching data:', error);
              } 
        }
        fetchData();
    },[])
    
    return(
        <ScrollView style={styles.container}>
        {data.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Content>
              <Title>{item.email}</Title>
              <Paragraph>This Is My Test......</Paragraph>
              {/* <Paragraph>{item.body}</Paragraph> */}
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    card: {
      marginBottom: 16,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });