import React, { useState } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, SafeAreaView, Alert, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createStackNavigator } from '@react-navigation/stack';

import { Header } from '../utility/Header';
import { fontSizeScale } from '../utility/fontSizeScale';

import PlaceFurniture from '../screen/place'
import MainShopping from './shopping/mainShopping';
import Suggestion from './shopping/suggestion';
import ShowDetail from './shopping/showDetail';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator(); 

class Shopping extends React.Component { 
  render() { 
    if (this.props.route.state && this.props.route.index == 2) { 
      this.props.navigation.setOptions({tabBarVisible: false})
    } else { 
      this.props.navigation.setOptions({tabBarVisible: true})
    }
    return(
      <Stack.Navigator>
        <Stack.Screen name="MainShopping" component={MainShopping} options={{headerShown: false}} />  
        <Stack.Screen name="Suggestion" component={Suggestion} options={{headerShown: false}} />  
        <Stack.Screen name="PlaceFurniture" component={PlaceFurniture} options={{headerShown: false}} />  
        <Stack.Screen name="ShowDetail" component={ShowDetail} options={{headerShown: false}} />  
      </Stack.Navigator>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    // paddingBottom: 25, 
  },

  content: { 
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: '3%',
    paddingRight: '3%',
  },

  shadow: { 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  }
});

export default Shopping; 