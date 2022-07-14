import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity } from 'react-native';

import { fontSizeScale } from '../utility/fontSizeScale'; 

export const Start = ({navigation}) => {
  return (
    <SafeAreaView  style={styles.container}>
      <ImageBackground source={require('../../img/start/start.png')} style={styles.image}>
        <Image source={require('../../img/start/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.SignUpButton} onPress={ () => { navigation.navigate('SignUp'); } }>
            <Text style={styles.TextStyle}> SIGN UP </Text>    
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton} onPress={ () => { navigation.navigate('Login'); } }>
            <Text style={styles.TextStyle}> LOGIN </Text>    
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const dimensions = Dimensions.get('window');
const logoWidth = Math.round(dimensions.height * 0.299);
const logoHeight = logoWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  logo: {
    marginTop: Math.round(dimensions.height * 12 / 100),
    width: logoWidth,
    height: logoHeight,
  },
  SignUpButton: {
    marginTop:'67%',
    paddingTop:15,
    paddingBottom:15,
    width:'70%',
    backgroundColor:'#008E97',
    borderRadius:30,
    borderColor: '#fff'
  }, 
  LoginButton: {
    marginTop:'5%',
    paddingTop:10,
    paddingBottom:10,
    width:'70%',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: fontSizeScale(20),
  },
});