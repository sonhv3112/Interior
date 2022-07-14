import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View, SafeAreaView, Dimensions, Button, Alert, TouchableOpacity, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import * as React from 'react';

import { Start } from './src/screen/start'
import { Login } from './src/screen/login'
import { SignUp } from './src/screen/signup'
import Tabbar from './src/navigation/tabbar'

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{headerShown: false}} /> 
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />  
        <Stack.Screen name="Tabbar" component={Tabbar} options={{headerShown: false}} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;