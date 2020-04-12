import React, {useState} from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import styles from './styles';
import logo from '../../assets/logo.svg';

export default function Main({navigation}) {
    const [newBox, setNewBox] = useState({})
    function handleSignIn(){
        e.preventDefault();
        const response = await api.post('/boxes', { 
            title: newBox 
        })
        navigation.navigate('Box')
        // console.log(response.data);
    }
    return (
        <View style={{ backgroundColor: "red" }}>
            
            <Image style={styles.logo} source={logo}/>
            
            <TextInput 
            style={StyleSheet.input}
            placeholder="Crie um box"
            placeholderTextColor="#999"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={newBox}
            onChangeText={text=> setNewBox({text})}
            />
    <TouchableOpacity
    onPress={handleSignIn}
    style={styles.button}>
        <Text style={StyleSheet.buttonText}>Criar</Text>
    </TouchableOpacity>
        </View>
    )
}