import React, { useState } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, SafeAreaView, Alert, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Header } from '../../utility/Header';
import { fontSizeScale } from '../../utility/fontSizeScale';

import { useNavigation } from '@react-navigation/native';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class Box1 extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      boxLogoHeight: this.props.height * 0.7,
    }
  }

  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={[this.props.style, styles.shadow, {height: this.props.height, width: this.props.width, backgroundColor: 'white', borderRadius: 15, alignItems:'center'}]}>
        <View style={[{width: this.state.boxLogoHeight, height: this.state.boxLogoHeight, backgroundColor: '#C9EBFB', marginLeft: '7%', marginRight: '1%', borderRadius: 10, alignItems: 'center', justifyContent: 'center', }, ]}>
          <Image source={ this.props.logo } style={{ width: '75%', height: '75%'}}/>
        </View>
        <Text style={[this.props.textStyle]}> {this.props.name} </Text>
      </TouchableOpacity>
    );
  }
}

class Box2 extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      boxLogoHeight: this.props.height * 0.5,
    }
  }

  render() {
    return(
      <View style={[this.props.boxStyle, {justifyContent: 'center', alignItems: 'center'}]}>
        <TouchableOpacity onPress={this.props.onPress} style={[this.props.style, styles.shadow, {height: this.props.height, width: this.props.width, borderRadius: 15, alignItems:'center', justifyContent: 'center'}]}>
          <Image source={ this.props.logo } style={{ width: this.state.boxLogoHeight, height: this.state.boxLogoHeight}}/>
          <Text style={[this.props.textStyle]}> {this.props.name} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Avatar extends React.Component { 
  constructor(props) { 
    super(props); 
  }

  render() { 
    return(
        <View style={{width:'100%',height:Math.round(ScreenHeight * 0.225), backgroundColor:'white',flexDirection:'column', marginBottom: '8%'}}>
          <View style = {{position:'absolute', backgroundColor:'#D1C4FF',width:'100%',height:'59%', top:'25%', borderRadius:10}}> 
            <View style={{left:'45%'}}> 
              <Text style={{fontSize:30, fontWeight:'bold',}}>
                {this.props.user}
              </Text>
              <Text style={{color:'#808080'}}>
                {this.props.mail}
              </Text>
            </View>
          </View>
          <View style={{height: '100%', width:'40%', alignItems:'center', top:'7%',}}>
            <Image source={this.props.ava}  style={{width: ScreenWidth*0.24, height: ScreenWidth*0.24, borderRadius: ScreenWidth*0.12}}/>
          </View>
          <Box1 
            height={ScreenHeight * 0.085} width={ScreenWidth * 0.4} style={{position:'absolute', bottom: 0, left: '4%', flexDirection: 'row', }} 
            name='Wallet' logo={require('../../../img/shopping/main/wallet.png')} textStyle={{fontSize: fontSizeScale(17), fontWeight: '500', color: '#4D4D4D'}}
            onPress={() => { this.props.navigation.navigate('Suggestion'); }}
          >
          </Box1> 
          <Box1 
            height={ScreenHeight * 0.085} width={ScreenWidth * 0.4} style={{position:'absolute', bottom: 0, right: '4%', flexDirection: 'row', }} 
            name='Voucher' logo={require('../../../img/shopping/main/voucher.png')} textStyle={{fontSize: fontSizeScale(17), fontWeight: '500', color: '#4D4D4D'}}
            onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
          >
          </Box1> 
        </View>
    );
  }
}

class MainShopping extends React.Component { 
  render() { 
    return(
      <SafeAreaView style={styles.container}>   
        <ScrollView style={{flexGrow:1, backgroundColor:'white'}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}> 
          <Header/>
          <View style={styles.content}> 
            <Avatar ava={require('../../../img/home/ava1.png')} user='Iron Man' mail='@ironman.Marvel' navigation={this.props.navigation}/>
            <View style={{flexDirection: 'row', marginBottom: '8%'}}> 
              <Box2 
                height={ScreenHeight * 0.095} width={ScreenHeight * 0.095} style={{flexDirection: 'column', backgroundColor: '#D9EFF9'}} boxStyle={{flex:1}}
                name='Tracking' logo={require('../../../img/shopping/main/tracking.png')} textStyle={{fontSize: fontSizeScale(12), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
              <Box2 
                height={ScreenHeight * 0.095} width={ScreenHeight * 0.095} style={{flexDirection: 'column', backgroundColor: '#D9EFF9'}} boxStyle={{flex:1}}
                name='Following' logo={require('../../../img/shopping/main/following.png')} textStyle={{fontSize: fontSizeScale(12), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
              <Box2 
                height={ScreenHeight * 0.095} width={ScreenHeight * 0.095} style={{flexDirection: 'column', backgroundColor: '#D9EFF9'}} boxStyle={{flex:1}}
                name='Event' logo={require('../../../img/shopping/main/event.png')} textStyle={{fontSize: fontSizeScale(12), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
              <Box2 
                height={ScreenHeight * 0.095} width={ScreenHeight * 0.095} style={{flexDirection: 'column', backgroundColor: '#D9EFF9'}} boxStyle={{flex:1}}
                name='Suggestion' logo={require('../../../img/shopping/main/suggestion.png')} textStyle={{fontSize: fontSizeScale(11), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            <View style={{marginTop: '4%', height: ScreenHeight * 0.13, width: '100%', flexDirection: 'row', }}>
              <Box2 
                height={ScreenHeight * 0.12} width={ScreenHeight * 0.15} style={{flexDirection: 'column', backgroundColor: '#CCE3B9'}} boxStyle={{flex:1}}
                name='Payment' logo={require('../../../img/shopping/main/payment.png')} textStyle={{fontSize: fontSizeScale(13), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
              <Box2 
                height={ScreenHeight * 0.12} width={ScreenHeight * 0.15} style={{flexDirection: 'column', backgroundColor: '#FFAF84'}} boxStyle={{flex:1}}
                name='Love list' logo={require('../../../img/shopping/main/lovelist.png')} textStyle={{fontSize: fontSizeScale(13), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
            </View>
            <View style={{marginTop: '4%', height: ScreenHeight * 0.13, width: '100%', flexDirection: 'row', }}>
              <Box2 
                height={ScreenHeight * 0.12} width={ScreenHeight * 0.15} style={{flexDirection: 'column', backgroundColor: '#91D1ED'}} boxStyle={{flex:1}}
                name='Rating' logo={require('../../../img/shopping/main/rating.png')} textStyle={{fontSize: fontSizeScale(13), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
              <Box2 
                height={ScreenHeight * 0.12} width={ScreenHeight * 0.15} style={{flexDirection: 'column', backgroundColor: '#EFF16F'}} boxStyle={{flex:1}}
                name='History' logo={require('../../../img/shopping/main/history.png')} textStyle={{fontSize: fontSizeScale(13), fontWeight: 'bold', color: '#000'}}
                onPress={() => { this.props.navigation.navigate('Suggestion'); }} 
              >
              </Box2> 
            </View>
            <TouchableOpacity style={{marginTop: '4%', height: ScreenHeight * 0.045, width: '100%', backgroundColor: '#EFEEEE', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
              <Text style={{fontWeight: 'bold', fontSize: fontSizeScale(17)}}>
                More
              </Text>
              <AntDesign size={18} name='down'/>
            </TouchableOpacity>
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

export default MainShopping; 