import React, { useState, useEffect } from 'react';
// import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Box from './pages/Box';
import { AsyncStorage, TouchableOpacity, Image, Text } from 'react-native';
import Add_Circle from './assets/add_circle.png'

const Stack = createStackNavigator();
const Home = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Box" component={Box} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}