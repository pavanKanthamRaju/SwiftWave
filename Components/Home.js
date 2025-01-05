import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import Main from './Main';
import Orders from './Orders'

export default function Home(){
   
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation(); // Get navigation object
    const handleLogout = () => {
     
      // Add your logout logic here, e.g., clearing auth tokens, navigating to the login screen, etc.
      navigation.navigate("LoginScreen");
    };
    return(
     
      <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Main"
         component={Main}
         options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
        }}
          />
        <Tab.Screen name="Orders"
         component={Orders}
         options={{
            headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
          />
      </Tab.Navigator>
   
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
    logoutButton: {
      position: 'absolute',
      top: 10, // Adjust for status bar height
      right: 10,
      zIndex: 1,
    },
    logoutImage: {
      width: 30,
      height: 30,
    },
  });