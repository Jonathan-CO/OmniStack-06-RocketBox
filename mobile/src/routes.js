import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Box from './pages/Box';
// import Add_Circle from './assets/add_circle.png'

const Stack = createStackNavigator();

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