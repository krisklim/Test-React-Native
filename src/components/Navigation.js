import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import HotelCard from '../screens/HotelCard';
import Offers from '../screens/Offers';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const store = useSelector(store => store);
    console.log(store);
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent: true}}>
            <Stack.Screen 
                name='Login' 
                component={LoginScreen} 
                options={{headerShown: false}}/>
            <Stack.Screen 
                name='Register' 
                component={RegisterScreen} 
                options={{headerShown: false}}/>
           
            <Stack.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{headerShown: false}}
                /> 
            <Stack.Screen 
                name='Offers' 
                component={Offers} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='HotelCard' 
                component={HotelCard} 
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>)
}


export default Navigation;