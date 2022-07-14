import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class PlaceFurniture extends React.Component { 
	render() { 
		return(
			<View	style={{flex: 1, backgroundColor: 'cyan'}}>
				<MaterialIcons name="arrow-back-ios" size={20} onPress={() => { this.props.navigation.goBack(); }}/>
				<Text>
					{ 'Place ' + this.props.route.params.furniture + '!!!!'}
				</Text>
			</View>
		);
	}
}

export default PlaceFurniture; 