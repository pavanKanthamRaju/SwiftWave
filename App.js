import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Components/Main'
import Orders from './Components/Orders';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import LoginScreen from './Components/Login';
import { useNavigation } from '@react-navigation/native';
// import CustomHeader from './Components/CustomHeader'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const CustomHeader = ({ route }) => {
    const navigation = useNavigation();

    const handleLogout = () => {
      // Assuming 'LoginScreen' is the name of your login screen in the navigator
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    };
    if (route.name === 'LoginScreen') {
      return null;
    }
    return (
      <View style={styles.header}>
         <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Image
          source={require('./assets/turn-off.png')} // Replace with your logout image path
          style={styles.logoutImage}
        />
              </TouchableOpacity>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: true, // Show header for all screens
          header: () => <CustomHeader route={route} /> // Conditionally render custom header
        })}
      >
        <Drawer.Screen
          name="LoginScreen"
          component={LoginScreen}
          screenOptions={({ route }) => ({
            headerShown: true, // Show header for all screens
            header: () => <CustomHeader route={route} /> // Conditionally render custom header
          })}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          screenOptions={({ route }) => ({
            headerShown: true, // Show header for all screens
            header: () => <CustomHeader route={route} /> // Conditionally render custom header
          })}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactUs}
          screenOptions={({ route }) => ({
            headerShown: true, // Show header for all screens
            header: () => <CustomHeader route={route} /> // Conditionally render custom header
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );r
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
  logoutButton: {
    position: 'absolute',
    top: 25, // Adjust for status bar height
    right: 10,
    zIndex: 1,
  },
  logoutImage: {
    width: 30,
    height: 30,
  },
});
