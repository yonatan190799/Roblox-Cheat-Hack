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
import TextInputRegis from '../components/TextInputRegis';

const LoginStudent = ({navigation}) => {
    const image = require("../images/background.jpg");
    const [regisnum, setRegisnum] =useState('');
    const [passwordS, setPaswordS] =useState('');
    return (
        /*Background*/
    <ImageBackground 
        source={image} 
        style={styles.backgroud} 
        resizeMode='cover'>
         
        <View style={{ flex: 1 }}>
        <View style={{ 
            justifyContent: 'center', 
            alignItems: 'center' }}>

            {/*Logo Unklab*/}
            <Image source={require('../images/logounklab.png')}
            style={{ 
                width: 150, 
                height: 150, 
                marginTop: 100 }}/>        

            {/*Text Welcome Students and Enter regnum-password*/}
            
            <View style={{marginHorizontal: 30, marginTop:20}}>
                <Text style={{color: '#ffffff', fontSize: 36}}>Welcome Students :)</Text>
                <Text style={{color: '#ffffff', fontSize: 20}}>Please enter your registration number and password!</Text>
            </View>

            {/*Text input Regisnum and Password*/}
            <View style={{marginTop: 30}}>
                <TextInputRegis 
                    state={regisnum}
                    set={setRegisnum}
                    icon="id-card" 
                    placeholder="Enter your registration number"/>
                <TextInputRegis 
                    state={passwordS} 
                    set={setPaswordS}
                    icon="lock" 
                    placeholder="Enter your password                 "/>
            </View>

            {/*Button Login*/}
            <TouchableOpacity 
                onPress={() => navigation.navigate('MainScreenStudent')}
                style={styles.buttonStyle}>
                    <Text style={{
                         color:'#000000', 
                         textAlign:'center'}}>LOGIN</Text>
            </TouchableOpacity>
            
            {/*Text Sign up and Forgot password */}
            <View style={{marginTop:2, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpStudent')}>
                    <Text style={{
                            marginTop:10,
                            marginRight: 140,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#ffffff'}}>Sign Up </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Please go to the Unklab\ninformation system office\nfor more information')}>
                    <Text style={{
                            marginTop:10, 
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#ffffff'}}>Forgot password</Text>
                </TouchableOpacity>
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
  buttonStyle:{
    backgroundColor: '#ffa45e',
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 15,
    paddingRight: 141,
    paddingLeft: 141,
    elevation: 10,
  }
})

export default LoginStudent;