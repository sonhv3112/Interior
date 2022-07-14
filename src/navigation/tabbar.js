import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screen/home';
import Notification from '../screen/notification';
import Shopping from '../screen/shopping';
import Decorate from '../screen/decorate';
import Setting from '../screen/setting';

const Tab = createBottomTabNavigator(); 

const ActiveImagesLink = [
  require('../../img/tabbar/home-icon-active.png'),
  require('../../img/tabbar/shopping-icon-active.png'),
  require('../../img/tabbar/decorate-icon-active.png'),
  require('../../img/tabbar/notification-icon-active.png'),
  require('../../img/tabbar/setting-icon-active.png'),
]; 
const InActiveImagesLink = [
  require('../../img/tabbar/home-icon-inactive.png'),
  require('../../img/tabbar/shopping-icon-inactive.png'),
  require('../../img/tabbar/decorate-icon-inactive.png'),
  require('../../img/tabbar/notification-icon-inactive.png'),
  require('../../img/tabbar/setting-icon-inactive.png'),
]; 

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class Tabbar extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = { 
      currentIndex: 2,
      marginLeftAnimation: new Animated.Value(2 * Math.round(ScreenWidth / 5) + 3),
    }
  }

  MyTabBar({ state, descriptors, navigation }) {
    const marginLeftAnimation = useRef(new Animated.Value(3)).current; 
    const [currentIndex, setCurrentIndex] = useState(0); 

    const BackgroundTabbarAnimation = (index) => { 
      Animated.timing(
        marginLeftAnimation, 
        { 
          duration: Math.abs(index - currentIndex) * 50,
          toValue: index * Math.round(ScreenWidth / 5) + 3,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      ).start(); 
      setCurrentIndex(index); 
    }

    return (
      <View style={{height:Math.round(ScreenHeight * 0.088), borderTopColor:'grey', borderTopWidth:1, flexDirection:'row'}}>
        <Animated.View style={[styles.AnimationBackground, { transform: [{ translateX: marginLeftAnimation, }] }]}>
        </Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
              BackgroundTabbarAnimation(index);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
            >
              <Image source={isFocused ? ActiveImagesLink[index] : InActiveImagesLink[index]}  style={isFocused ? styles.activeImage : styles.inactiveImage}/>
              { isFocused ? <Text style={styles.TextStyle}> { label } </Text> : null } 
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  render() { 
    return (
      // <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Home' 
          screenOptions={{ headerShown: false }} 
          tabBar={ (props) => <this.MyTabBar {...props} /> }>
          <Tab.Screen 
            name='Home' 
            component={Home} 
          />
          <Tab.Screen 
            name='Shopping' 
            component={Shopping} 
          />
          <Tab.Screen 
            name='Decorate'
            component={Decorate} 
          />
          <Tab.Screen 
            name='Notification' 
            component={Notification} 
          />
          <Tab.Screen 
            name='Setting' 
            component={Setting} />
        </Tab.Navigator>
      // </NavigationContainer>
    );
  }
} 

const styles = StyleSheet.create({ 
  TextStyle: {
    fontSize : 12,
    textAlign: 'center'
  },
  inactiveImage: { 
    height: 30, 
    width: 30, 
  }, 
  activeImage: { 
    height: 25, 
    width: 25, 
  },
  AnimationBackground: { 
    position:'absolute', 
    backgroundColor:'#E5E5E5', 
    width:Math.round(ScreenWidth / 5) - 6, 
    height:Math.round(ScreenHeight * 0.088) - 6,
    borderRadius: 5,
    marginTop: 3,
    marginLeft: 3,
  },
})

export default Tabbar; 