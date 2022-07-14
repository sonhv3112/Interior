import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing } from 'react-native';

const Notification = () => { 
    return(
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'cyan' }}>   
            <Text style = {{ color: 'white', }}>
                Notification
            </Text>
        </View>
    ); 
}

export default Notification; 