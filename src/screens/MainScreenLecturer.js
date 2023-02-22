import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
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
                style={{ width: 195, height: 190, marginTop: 70 }}
                />

                {/*Text Hello! and Lecturer Name ?*/}
                <View style={{justifyContent: 'center', alignItems: 'center'}} >
                <Text style={{
                    paddingTop: 20,
                    color: '#ffffff',
                    fontSize: 50}}>Hello!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ProfilStudent')}>
                <Text style={{
                    paddingTop: 1,
                    color: '#ffffff',
                    fontSize: 25}}>Semmy W, Taju</Text>
                </TouchableOpacity>
                </View>

                {/*Button Scan QR-Code*/}
                <TouchableOpacity onPress={() => navigation.navigate('CreateClass')}>
                <View style={{
                    marginTop: 30,
                    backgroundColor: '#ffa45e',
                    paddingVertical: 15,
                    borderRadius: 15,
                    paddingLeft: 70,
                    paddingRight: 70,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems:'center',}}>
                        <Text><Icon name="clipboard-list" size={70} color="#AD5389"/></Text>

                        <Text style={{
                            color: 'black', 
                            fontSize: 18,
                            fontWeight:'bold',
                            }}>Create Class</Text> 
                    </View>
                </View>
                </TouchableOpacity>
                
                {/*Button View Classes*/}
                <TouchableOpacity onPress={() => navigation.navigate('ListClassLecturer')}>
                <View style={{
                    backgroundColor: '#ffa45e',
                    paddingVertical: 15,
                    borderRadius: 15,
                    paddingLeft: 70,
                    paddingRight: 70,
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
                            }}>View Classes</Text> 
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