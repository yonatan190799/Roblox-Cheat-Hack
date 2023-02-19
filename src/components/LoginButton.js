import React, {useState, useEffect} from 'react';
import {TextInput, 
        View, 
        Text, 
        Image, 
        ImageBackground, 
        StyleSheet, 
        Alert, 
        TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginButton = (props) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('MainScreen')}
            style={{
            backgroundColor: '#ffa45e',
            paddingVertical: 15,
            marginTop: 10,
            borderRadius: 15,
            paddingRight: 141,
            paddingLeft: 141,
            elevation: 10,}}>
            <Text style={{color:'#000000', textAlign:'center'}}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export default LoginButton;