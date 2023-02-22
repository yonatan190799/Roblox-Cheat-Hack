import React from 'react';
import {View, Text, StyleSheet,Image, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainScreenStudent = ({navigation}) => {
    {/*Background Image*/}
    const image = require("../images/background.jpg");
    return (
        <ImageBackground source={image} style={styles.backgroud} resizeMode='cover'>
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                {/*Logo Unklab*/}
                <Image source={require('../images/logounklab.png')}
                style={{ width: 195, height: 190, marginTop: 65 }}
                />

                {/*Text Hello and Student Name ?*/}
                <View style={{justifyContent: 'center', alignItems: 'center'}} >
                <Text style={{
                    paddingTop: 20,
                    color: '#ffffff',
                    fontSize: 50}}>Hello!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProfilStudent')}>
                <Text style={{
                    paddingTop: 1,
                    color: '#ffffff',
                    fontSize: 25}}>Jeremy A, Pongantung</Text>
                </TouchableOpacity>
                </View>

                {/*Button Scan QR-Code*/}
                <TouchableOpacity onPress={() => navigation.navigate('ListClassAttendance')}>
                <View style={{
                    marginTop: 30,
                    backgroundColor: '#ffa45e',
                    paddingVertical: 15,
                    borderRadius: 15,
                    paddingLeft: 50,
                    paddingRight: 50,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems:'center',}}>
                        <Text><Icon name="qrcode" size={70} color="#AD5389"/></Text>

                        <Text style={{
                            color: 'black', 
                            fontSize: 18,
                            fontWeight:'bold',
                            }}>Take Attendance!</Text> 
                    </View>
                </View>
                </TouchableOpacity>
                
                {/*Button View Classes*/}
                <TouchableOpacity onPress={() => navigation.navigate('ListClassStudent')}>
                <View style={{
                    backgroundColor: '#ffa45e',
                    paddingVertical: 15,
                    borderRadius: 15,
                    paddingLeft: 75,
                    paddingRight: 75,
                    marginTop: 20,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems:'center',}}>
                        <Text><Icon name="list-alt" size={70} color="#AD5389"/></Text>

                        <Text style={{
                            color: 'black', 
                            fontSize: 18,
                            fontWeight:'bold',
                            }}>My Classes</Text> 
                    </View>
                </View>
                </TouchableOpacity> 
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