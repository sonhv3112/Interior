import React, { useState } from 'react';
import { TextInput, Platform, StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export class Header extends React.Component {
  render() {  
    return (
      <View style={styles.header}>
        <View style={{marginTop: '3%', width:Math.round(ScreenWidth * 0.93), height:Math.round(ScreenHeight * 0.0233), flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{height:'105%', backgroundColor: '#94BF72', width:'11%',justifyContent:'flex-start', borderTopLeftRadius: 10, }}/>
        <Text style={{fontSize:20, fontWeight:'bold', color: '#94BF72', marginTop: Math.round(ScreenHeight * 0.0233) - 25}}> InTerior </Text>
        <View style={{height:'105%', backgroundColor: '#94BF72', width:'11%',justifyContent:'flex-end', borderTopRightRadius: 10, }}/>
        </View> 
        <View style={{flex:1, backgroundColor: '#94BF72', width:Math.round(ScreenWidth * 0.93), borderWidth:0, borderBottomRightRadius: 10, borderBottomLeftRadius: 10,}}>
        <View style = {{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Icon style={{ marginLeft: '3%' }} name="search" size={35} color="#000"/>
          <TextInput style={{paddingLeft: '2%', marginLeft: '6%', height:'19%', borderRadius:30, width: '77%', backgroundColor:'white'}}/>
        </View>
        </View>
      </View>
    );
  }
}

class Setting extends React.Component { 
  render() { 
    return ( 
      <View style={styles.container}>
        <Header/>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingBottom: 25, 
  },

  header: {
    height: Math.round(ScreenHeight * 0.15), 
    width:'100%',
    alignItems:'center',
    // backgroundColor: 'cyan',
  },
  
})

export default Setting; 