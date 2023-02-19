import React, {useState, useEffect, Component} from "react";
import {View, Text, Image, ImageBackground, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const Home = ({ navigation }) => {

  {/*Background Image*/}
  const image = require("../images/background.jpg");
  return (
    <ImageBackground source={image} style={styles.backgroud} resizeMode='cover'>
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        {/*Logo Unklab*/}
        <Image source={require('../images/logounklab.png')}
          style={{ width: 180, height: 180, marginTop: 100 }}
        />

        {/*Text Welcome and logged in as ?*/}
        <Text style={styles.textWelcome1}>Welcome!</Text>
        <Text style={styles.textLogin1}>You will be logged in as ?</Text>


        <View style={{flexDirection: "row", marginTop: 20}}>

        {/*Button STUDENT*/}
        <TouchableOpacity 
          onPress={() => navigation.navigate('LoginStudent')}
          style={styles.buttonStyle}>
          <Text style={{color:'#000000', textAlign:'center'}}>STUDENT</Text>
        </TouchableOpacity>

        {/*Button LECTURER*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginLecturer')}
          style={styles.buttonStyle}>
          <Text style={{color:'#000000', textAlign:'center'}}>LECTURER</Text>
        </TouchableOpacity>
        </View>
        
        {/*Button Lecture*/}
        <View style={{marginTop: 100}}>
        <Text style={styles.textHelp} onPress={() => Alert.alert('Please go to the Unklab\ninformation system office\nfor more information')}>Need Help? </Text>
        <Text style={styles.textAbout} onPress={() => Alert.alert('An application used for process of\ntaking attendance at Unkab')}>About</Text>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

{/*Style CSS*/}
const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWelcome1:{
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40
  },
  textLogin1:{
    color: '#ffffff',
    fontSize: 20,
    marginTop: 20
  },
  textHelp:{
    color: '#ffffff',
    textAlign: 'center',
  },
  textAbout:{
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20
  },
  buttonStyle:{
    backgroundColor: '#ffa45e',
    paddingVertical: 14,
    marginTop: 20,
    paddingHorizontal: 30,
    marginHorizontal:10,
    borderRadius: 15,
    elevation: 2,
  }
})

export default Home;