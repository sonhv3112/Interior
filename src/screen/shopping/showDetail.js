import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { fontSizeScale } from '../../utility/fontSizeScale';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class ShowDetail extends React.Component { 
	render() { 
		return(
			<View	style={styles.container}>
				<MaterialIcons name="arrow-back-ios" size={20} style={{marginTop: '5%', marginLeft: '5%', }} onPress={() => { this.props.navigation.goBack(); }}/>
        <ScrollView style={{paddingLeft: '10%', paddingRight: '10%', }}> 
          <View style={{alignItems: 'center', marginBottom: '5%', }}>
            <Text style={{fontWeight: 'bold', fontSize: fontSizeScale(19)}}>
              {this.props.route.params.furniture}
            </Text>
            <Image source={this.props.route.params.img} style={{width: '100%', height: ScreenHeight * 0.34, borderRadius: 20, marginTop: '3%', marginBottom: '3%', }}/>
            { this.props.route.params.precost !== undefined ? 
                <Text style={{fontWeight: '100', fontSize: fontSizeScale(17), color: '#7B7B7B', textDecorationLine: 'line-through', textDecorationStyle: 'solid', textDecorationColor: '#000',}}>
                  {this.props.route.params.precost}
                </Text>
                : null
            }
            <Text style={{fontWeight: '100', fontSize: fontSizeScale(17)}}>
              {this.props.route.params.cost}
            </Text>
          </View>
          <Text style={{marginTop: '5%', fontWeight: 'bold', fontSize: fontSizeScale(18)}}>
            Information
          </Text>
          <Text style={{fontSize: fontSizeScale(16)}}>
            Test test test
          </Text>
          <Text style={{marginTop: '5%', fontWeight: 'bold', fontSize: fontSizeScale(18)}}>
            Saler
          </Text>
          <Text style={{fontSize: fontSizeScale(16)}}>
            Test test test
          </Text>
          <Text style={{marginTop: '5%', fontWeight: 'bold', fontSize: fontSizeScale(18)}}>
            Status
          </Text>
          <Text style={{fontSize: fontSizeScale(16)}}>
            Test test test
          </Text>
        </ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    // paddingBottom: 25, 
  },

});

export default ShowDetail; 