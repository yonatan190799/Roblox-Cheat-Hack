import React from 'react';
import {SafeAreaView, ImageBackground, View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { Touchable } from 'react-native/Libraries/Components/Touchable/Touchable';

const data = [
    {className: 'Framework Programing', pararel: 'Pararel B', semester: 'Semester 1 2023/2024', daytime:'Mon & Wed  07:10 - 08:30', codeClass: 'Class Code: abc123'},
    {className: 'Multiplafrom Programing', pararel: 'Pararel B', semester: 'Semester 1 2023/2024', daytime:'Mon & Wed  07:10 - 08:30', codeClass: 'Class Code: abc456'},
    {className: 'Computer Network 1', pararel: 'Pararel B', semester: 'Semester 1 2023/2024', daytime:'Mon & Wed  07:10 - 08:30',  codeClass: 'Class Code: abc789'},
    {className: 'Computer Network 2', pararel: 'Pararel A' , semester: 'Semester 1 2023/2024', daytime:'Tue & Sat  07:10 - 08:30', codeClass: 'Class Code: efg123'},
    {className: 'Back End Programing', pararel: 'Pararel B', semester: 'Semester 1 2023/2024', daytime:'Mon & Wed  07:10 - 08:30', codeClass: 'Class Code: efg456'},
    {className: 'Front End Programing', pararel: 'Pararel A', semester: 'Semester 1 2023/2024', daytime:'Tue & Sat  07:10 - 08:30', codeClass: 'Class Code: efg789'},
    {className: 'Framework Programing', pararel: 'Pararel B', semester: 'Semester 1 2023/2024', daytime:'Mon & Wed  07:10 - 08:30', codeClass: 'Class Code: hij123'},
    {className: 'Mobile Programing', pararel: 'Pararel A', semester: 'Semester 1 2023/2024', daytime:'Tue & Sat  07:10 - 08:30', codeClass: 'Class Code: hij456'}
    
];
const image = require("../images/background.jpg");
const ListClassS = ({navigation}) => {
    const renderItems = (e) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() =>navigation.navigate('DetailClassLecturer') }>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ffffff',
                paddingTop: 20,
                marginLeft: 10,
                paddingHorizontal: 5,
                marginHorizontal: 70
            }}>
                {e.item.className}
            </Text>
            <Text style={{
                fontSize: 20,
                //fontWeight: 'bold',
                color: '#ffffff',
                paddingTop: 5,
                marginLeft: 10,
                paddingHorizontal: 5,
                marginHorizontal: 70
            }}>
                {e.item.semester}
            </Text>
            <Text style={{
                fontSize: 20,
                //fontWeight: 'bold',
                color: '#ffffff',
                paddingTop: 5,
                marginLeft: 10,
                paddingHorizontal: 5,
                marginHorizontal: 70
            }}>
                {e.item.pararel}
            </Text>
            <Text style={{
                fontSize: 20,
                //fontWeight: 'bold',
                color: '#ffffff',
                paddingTop: 5,
                marginLeft: 10,
                paddingHorizontal: 5,
                marginHorizontal: 70
            }}>
                {e.item.daytime}
            </Text>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ffffff',
                paddingTop: 5,
                marginLeft: 10,
                paddingHorizontal: 5,
                marginHorizontal: 70,
                paddingTop: 5,
            }}>
                {e.item.codeClass}
            </Text>
            </TouchableOpacity>
        </View>
        
    );

    const buttonBack = () => (
            <Touchable>
                <Text>
                    Back
                </Text>
            </Touchable>
        );

    const image = require("../images/background.jpg");
    return (
        <ImageBackground source={image} style={styles.backgroud} resizeMode='cover'>
        
        <SafeAreaView style={styles.container}>
            <View style={{
                    height: 755,
                    width: 370,
                    justifyContent:'center', 
                    alignItems:'center'}}>
                
                <Text style={{
                    color: '#ffffff', 
                    fontSize: 20,
                    paddingVertical: 10,
                    fontWeight:'bold',
                    paddingTop:10,
                    marginTop: 20,
                    marginBottom: 10,
                    paddingHorizontal:100,
                    backgroundColor: '#AD5389',
                    borderRadius: 15,
                    }}> List Classes
                </Text>
                
                <FlatList data={data} renderItem={renderItems}/>
            </View>
        </SafeAreaView>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    backgroud: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffa45e',
        marginVertical: 10,
        borderRadius: 15
        
    },
    item: {
        borderRadius: 15,
        backgroundColor: '#AD5389',
        marginHorizontal: 16,
        marginVertical: 10,
        //justifyContent: 'center',
        //alignItems: 'center',
        height: 200,
    },
    backgrouditem: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ListClassS;