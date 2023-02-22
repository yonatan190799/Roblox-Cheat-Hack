// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import LoginLecture from './src/screens/LoginLecturer';
import LoginStudent from './src/screens/LoginStudent';
import SignUpStudent from './src/screens/SignUpStudent';
import MainScreenStudent from './src/screens/MainScreenStudent';
import SignUpLecturer from './src/screens/SignUpLecturer';
import MainScreenLecturer from './src/screens/MainScreenLecturer';
import ScanQRCode from './src/screens/ScanQR-Code';
import ProfilStudent from './src/screens/ProfilStudent';
import ProfiLecturer from './src/screens/ProfilLecturer';
import ListClassA from './src/screens/ListClassA';
import ListClassL from './src/screens/ListClassL';
import ListClassS from './src/screens/ListClassS';
import ListStudentL from './src/screens/ListStudentL';
import ListStudentS from './src/screens/ListStudentS';
import DetailClassStudent from './src/screens/DetailClassS';
import DetailClasLecturer from './src/screens/DetailClassL';
import CreateClass from './src/screens/CreateClassL';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginLecturer" component={LoginLecture} />
        <Stack.Screen name="LoginStudent" component={LoginStudent} />
        <Stack.Screen name="SignUpStudent" component={SignUpStudent} />
        <Stack.Screen name="SignUpLecturer" component={SignUpLecturer} />
        <Stack.Screen name="MainScreenStudent" component={MainScreenStudent} />
        <Stack.Screen name="MainScreenLecturer" component={MainScreenLecturer} />
        <Stack.Screen name="ProfilStudent" component={ProfilStudent} />
        <Stack.Screen name="ProfilLecturer" component={ProfiLecturer} />
        <Stack.Screen name="ListClassAttendance" component={ListClassA} />
        <Stack.Screen name="ListClassStudent" component={ListClassS} />
        <Stack.Screen name="ListClassLecturer" component={ListClassL} />
        <Stack.Screen name="ListStudentL" component={ListStudentL} />
        <Stack.Screen name="ListStudentS" component={ListStudentS} />
        <Stack.Screen name="DetailClassStudent" component={DetailClassStudent} />
        <Stack.Screen name="DetailClassLecturer" component={DetailClasLecturer} />
        <Stack.Screen name="CreateClass" component={CreateClass} />
        <Stack.Screen name="ScanQrCode" component={ScanQRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
