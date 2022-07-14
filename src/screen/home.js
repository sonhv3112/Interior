import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing, Platform, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Header } from '../utility/Header';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class Post extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      height: this.props.image === undefined ? 100 : 350,
    }
  }

  render() { 
    return (
      <View style={{width: '100%', marginTop: 45, backgroundColor:'white'}}> 
        <View style={{ width:'100%', borderRadius: 20, borderWidth: 1, paddingBottom: 25}}>
          <View style={{height: 35, width: '100%', alignItems:'center', justifyContent:'center', }}>
            <Text style={{fontWeight: 'bold', fontSize: 15, }}> { this.props.username } </Text>  
            <Text style={{color: '#808080', fontSize: 12, }}> { this.props.email } </Text>  
            <Text style={{position:'absolute', right:40, fontWeight: 'bold', fontSize: 10, top: 3,}}> { this.props.time } ago </Text>
          </View>
          <View style={{width: '100%', marginTop: 12, paddingLeft: 40, paddingRight: 40, marginBottom: 5, }}> 
            <Text style={{color: '#808080', fontSize: 13, }}> { this.props.status } </Text>
          </View>
          { this.props.statusimage !== undefined ? <Image source={ this.props.statusimage } style={{ width: '90%', height:150, borderRadius: 30, alignSelf:'center'}} /> : null }
          <EvilIcons size={25} name='like' style={{position:'absolute', bottom: -4, left: '15%'}}/>
          <Octicons size={16} name='comment' style={{position:'absolute', bottom: -3, left: '50%'}}/>
          <MaterialCommunityIcons size={24} name='share-outline' style={{position:'absolute', bottom: -3, right:'15%'}}/>
        </View>
        <Image source={ this.props.ava } style={{ position:'absolute', top: -25, height: 50, width: 50, borderRadius: 25, marginLeft: 40, }}/>
      </View>
    );
  }
}

class Home extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
    }
  }
 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flexGrow:1, backgroundColor:'white'}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}> 
          <Header/>
          <View style={styles.content}>
            <View style={{width:'100%',height:Math.round(ScreenHeight * 0.16), backgroundColor:'white',flexDirection:'row',}}>
              <View style={{height: '100%', width:'40%', alignItems:'center', justifyContent:'center', backgroundColor:'',}}>
                <Image source={require('../../img/home/ava1.png')}  style={{width:90, height:90,}}/>
              </View>
              <View style={{flex:1}}> 
                <View style={{flex:1}}>
                  <Text style={{marginLeft:'20%', fontSize:30, fontWeight:'bold',}}>
                    Iron Man 
                  </Text>
                  <Text style={{marginLeft:'20%', color:'#808080'}}>
                    @ironman.Marvel
                  </Text>
                </View>
                <View style={{flex:1, backgroundColor:'', alignItems:'center', }}>
                  <TextInput style={{height:'70%', width:'100%', borderWidth:1, borderRadius:10, padding:4,}} placeholder='What do you mean?'/>
                </View>
              </View>
            </View>
            <Post ava={require('../../img/home/ava3.png')} username='Thor bụng béo' email='@thor.mavel' time='1 hour' status='nobita này shizuka, tới luôn shizuka êi'/>
            <Post ava={require('../../img/home/ava2.png')} username='Lố kì lừa đảo' email='@loki.mavel' time='1 hour' status='nobita ơi đến nhà shizuka chơi nè' statusimage={require('../../img/home/full1.png')}/>
            <Post ava={require('../../img/home/ava2.png')} username='Lố kì lừa đảo' email='@loki.mavel' time='1 hour' status='nobita ơi đến nhà shizuka chơi nè' statusimage={require('../../img/home/full1.png')}/>
            <Post ava={require('../../img/home/ava3.png')} username='Thor bụng béo' email='@thor.mavel' time='1 hour' status='nobita này shizuka, tới luôn shizuka êi'/>
          </View>
        </ScrollView>
      </SafeAreaView>
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

  content: { 
    flex: 1,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
});

export default Home;