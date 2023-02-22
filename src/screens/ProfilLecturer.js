import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

const MainScreenStudent = ({navigation}) => {
    {/*Background Image*/}
    const image = require("../images/background.jpg");
    return (
        <ImageBackground source={image} style={styles.backgroud} resizeMode='cover'>
        <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            {/*Profile Image*/}
            <Image source={require('../images/profil.png')}
                style={{ width: 180, 
                height: 180, 
                marginTop: 120 }}/>

            {/*Name, NIM, Noreg, Faculty, Prodi*/}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{
                paddingTop: 20,
                color: '#ffffff',
                fontSize: 15,}}>Name:</Text>
            <Text style={{
                color: '#ffffff',
                fontSize: 25,
                fontWeight:'bold'}}>Semmy W, Taju</Text>

            <Text style={{
                paddingTop: 20,
                color: '#ffffff',
                fontSize: 15,}}>ID number:</Text>
            <Text style={{
                color: '#ffffff',
                fontSize: 25,
                fontWeight:'bold'}}>10501234567</Text>

            <Text style={{
                paddingTop: 20,
                color: '#ffffff',
                fontSize: 15,}}>Faculty:</Text>
            <Text style={{
                color: '#ffffff',
                fontSize: 25,
                fontWeight:'bold'}}>Computer Science</Text>
            </View>

            {/*Button Logut*/}
            <View style={{marginTop: 20}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{backgroundColor: '#ffa45e',
                paddingVertical: 14,
                marginTop: 20,
                paddingHorizontal: 100,
                borderRadius: 15,
                elevation: 2,
                }}>
            <Text style={{
                color:'#000000', 
                textAlign:'center',
                fontSize: 15,}}>LOGOUT</Text>
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