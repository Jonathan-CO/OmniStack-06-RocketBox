import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.svg';

export default function Main() {
    return (
        <View style={{ backgroundColor: "red" }}>
            
            <Image style={styles.logo} source={logo}/>
            
            <TextInput 
            style={StyleSheet.input}
            placeholder="Crie um box"
            placeholderTextColor="#999"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            />
    <TouchableOpacity
    onPress={()=>{}}
    style={styles.button}>
        <Text style={StyleSheet.buttonText}>Criar</Text>
    </TouchableOpacity>
        </View>
    )
}