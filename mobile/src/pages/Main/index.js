import React, { useState, useEffect } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import logo from '../../assets/logo.svg';

export default function Main({ navigation }) {
    const [newBox, setNewBox] = useState('')

    useEffect(() => {
        async function getBox() {
            const box = await AsyncStorage.getItem('@RocketBox:box')
            if (box) {
                // await AsyncStorage.clear();
                navigation.navigate('Box')
            }
        }
        getBox();
    }, [])

    async function handleSignIn(e) {
        e.preventDefault();
        const response = await api.post('/boxes', {
            title: newBox
        })
        await AsyncStorage.setItem('@RocketBox:box', response.data._id)
        navigation.navigate('Box')
    }
    return (

        <View >

            <Image style={styles.logo} source={logo} />

            <TextInput
                style={styles.input}
                placeholder="Crie um box"
                placeholderTextColor="#999"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                value={newBox}
                onChangeText={text => setNewBox(text)}
            />
            <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}>
                <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>
        </View>
    )
}