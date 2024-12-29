import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Components/Main'
import Orders from './Components/Orders';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import LoginScreen from './Components/Login';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const CustomHeader = () => (
    <View style={styles.header}>
      {/* This header has no title, so it's just an empty header space */}
    </View>
  );
  return (
    // <NavigationContainer>
    //   <Tab.Navigator screenOptions={{
    //       tabBarActiveTintColor: 'tomato',
    //       tabBarInactiveTintColor: 'gray',
    //     }}>
    //     <Tab.Screen name="Main"
    //      component={Main}
    //      options={{
    //       tabBarLabel: 'Main',
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons name="home" size={size} color={color} />
    //       ),
    //     }}
    //       />
    //     <Tab.Screen name="Orders"
    //      component={Orders}
    //      options={{
    //       tabBarLabel: 'Orders',
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons name="cart" size={size} color={color} />
    //       ),
    //     }}
    //       />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
    <Drawer.Navigator
       screenOptions={{
        headerShown: true, // Make sure the header is shown
        headerTitle: null, // Hide the title in the header
      }}
    >
       <Drawer.Screen name="Login" component={LoginScreen}
      options={{
        headerTitle: null,  // Hide title for this screen
        headerShown: true,  // Keep the header visible (with hamburger icon)
      }}
       />
      <Drawer.Screen name="Home" component={Home}
      options={{
        headerTitle: null,  // Hide title for this screen
        headerShown: true,  // Keep the header visible (with hamburger icon)
      }}
       />
      <Drawer.Screen name="Contact Us" component={ContactUs}
      options={{
        headerTitle: null,  // Hide title for this screen
        headerShown: true,  // Keep the header visible (with hamburger icon)
      }}
       />
    </Drawer.Navigator>
     </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  topcontent:{
marginTop:40,
left:20,
fontSize:20

  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    height: 60, 
    backgroundColor: '#f1f1f1', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
