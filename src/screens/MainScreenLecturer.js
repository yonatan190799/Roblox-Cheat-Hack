import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

const MainScreenStudent = ({navigation}) => {
    {/*Background Image*/}
    const image = require("../images/background.jpg");
    return (
        <ImageBackground source={image} style={styles.backgroud} resizeMode='cover'>
        <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>


            {/*Text Welcome and logged in as ?*/}
            <View style={{justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{
                paddingTop: 200,
                color: '#ffffff',
                fontSize: 50}}>Welcome!</Text>
            <TouchableOpacity>
            <Text style={{
                paddingTop: 20,
                color: '#ffffff',
                fontSize: 25}}>Yontan Putra, Mamahit</Text>
            </TouchableOpacity>
            </View>

            {/*Button STUDENT*/}
            <View style={{marginTop: 20}}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('ListClassStudent')}
            style={{
                backgroundColor: '#ffa45e',
                paddingVertical: 14,
                marginTop: 20,
                paddingHorizontal: 50,
                borderRadius: 15,
                elevation: 2}}>
            <Text style={{
                color:'#000000', 
                textAlign:'center',
                fontSize: 35}}>VIEW CLASS</Text>
            </TouchableOpacity>

            {/*Button LECTURER*/}
            <TouchableOpacity
            onPress={() => navigation.navigate('ScanQrCode')}
            style={{backgroundColor: '#ffa45e',
                paddingVertical: 14,
                marginTop: 20,
                paddingHorizontal: 50,
                borderRadius: 15,
                elevation: 2,
                }}>
            <Text style={{
                color:'#000000', 
                textAlign:'center',
                fontSize: 35,}}>CREATE CLASS</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
        </ImageBackground>
        );
}

export default MainScreenStudent;

{/*Style CSS*/}
const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})