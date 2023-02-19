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

const TextInputRegis = (props) => {
    return (
        <View>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
                <View style={{
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginTop:10,
                        backgroundColor: "#ffffff",
                        width: 60,
                        borderBottomLeftRadius: 15,
                        borderTopLeftRadius: 15,
                        elevation: 5
                    }}>
                    <Text><Icon name={props.icon} size={30} color="#bdbdbd" /></Text>
                </View>
                <TextInput 
                    value={props.state}
                    style={{
                        backgroundColor: '#ffffff',
                        marginTop: 10, 
                        //marginHorizontal: 20, 
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                        paddingRight: 70,
                        elevation:5
                    }}
                    placeholder={props.placeholder}
                    onChangeText={text => props.set(text)}/>
            </View>
        </View>
    );
}

export default TextInputRegis;