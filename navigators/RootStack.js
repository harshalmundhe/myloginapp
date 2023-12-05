
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Welcome from './../screens/Welcome';

import { Colors } from '../components/Styles';

const {primary, tertiary} = Colors

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:"transparent"
            },
            headerTintColor: tertiary,
            headerTitle: '',
            headerLeftContainerStyle:{
                paddingLeft: 20
            },
            
         }} initialRouteName='Login'>
             <Stack.Screen name="Login" component={Login} />
             <Stack.Screen name="Welcome" component={Welcome} />
         </Stack.Navigator>
    </NavigationContainer>
  )
}