// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Main from './Components/Main'
// import Orders from './Components/Orders';
// import Home from './Components/Home';
// import ContactUs from './Components/ContactUs';
// import LoginScreen from './Components/Login';
// import { useNavigation,useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// // import CustomHeader from './Components/CustomHeader'
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// export default function App() {
//   const CustomHeader = ({ navigation, route }) => {
//     // const navigation = useNavigation();
//     // const approute = useRoute(); // Access current route
//     const handleLogout = () => {
//       navigation.navigate('LoginScreen'); // Navigate to LoginScreen
//     }
//     const toggleDrawer = () => {
//       // navigation.dispatch(DrawerActions.toggleDrawer()); // Open/close drawer
//       navigation.dispatch(DrawerActions.toggleDrawer())
      
//     };
//     if (route.name === 'LoginScreen') {
//       return null;
//     }
//     return (
//       <View style={styles.header}>
        
//         {/* Hamburger Menu Icon */}
//         <TouchableOpacity
//           onPress={toggleDrawer}
//           style={styles.hamburgerMenu}
//         >
//           <Ionicons name="menu" size={30} color="black" />
//         </TouchableOpacity>

//         {/* Title */}
//         <View style={styles.headerTitle}>
//           <Ionicons name="home-outline" size={24} color="tomato" />
//         </View>
//          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
//                 <Image
//           source={require('./assets/turn-off.png')} // Replace with your logout image path
//           style={styles.logoutImage}
//         />
//               </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         screenOptions={({ route, navigation }) => ({
//           headerShown: true,
//           header: () => <CustomHeader route={route} navigation={navigation} />,
//         })}
//       >
//         <Drawer.Screen
//           name="LoginScreen"
//           component={LoginScreen}
//           screenOptions={({ route }) => ({
//             headerShown: true, // Show header for all screens
//             header: () => <CustomHeader route={route} /> // Conditionally render custom header
//           })}
//         />
//         <Drawer.Screen
//           name="Home"
//           component={Home}
//           screenOptions={({ route }) => ({
//             headerShown: true, // Show header for all screens
//             header: () => <CustomHeader route={route} /> // Conditionally render custom header
//           })}
//         />
//         <Drawer.Screen
//           name="Contact Us"
//           component={ContactUs}
//           screenOptions={({ route }) => ({
//             headerShown: true, // Show header for all screens
//             header: () => <CustomHeader route={route} /> // Conditionally render custom header
//           })}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );r
// }

// const styles = StyleSheet.create({
//   topcontent:{
// marginTop:40,
// left:20,
// fontSize:20

//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   header: {
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f1f1f1',
//     paddingHorizontal: 10,
//   },
//   hamburgerMenu: {
//     flex: 1,
//     alignItems: 'flex-start',
//   },
//   headerTitle: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   logoutButton: {
//     flex: 1,
//     alignItems: 'flex-end',
//   },
//   logoutImage: {
//     width: 25,
//     height: 25,
//   },
// });

import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from './Components/Main';
import Orders from './Components/Orders';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import LoginScreen from './Components/Login';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Custom Header Component
const CustomHeader = ({ navigation, route }) => {
  const handleLogout = () => {
    navigation.navigate('LoginScreen'); // Navigate to LoginScreen
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer()
  };

  // Hide header on LoginScreen
  if (route?.name === 'LoginScreen') {
    return null;
  }

  return (
    <View style={styles.header}>
      {/* Hamburger Menu Icon */}
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburgerMenu}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Image
          source={require('./assets/turn-off.png')} // Replace with your logout image path
          style={styles.logoutImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: true,
          header: ({ navigation }) => <CustomHeader navigation={navigation} route={route} />,
        })}
      >
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    top:25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
  },
  hamburgerMenu: {
    alignItems: 'flex-start',
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
  },
  logoutButton: {
    alignItems: 'flex-end',
  },
  logoutImage: {
    width: 25,
    height: 25,
  },
});
