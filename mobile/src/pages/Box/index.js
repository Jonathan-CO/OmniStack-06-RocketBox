import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import ImagePicker from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

import { formatDistance } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';


export default function Box() {
    const [box, setBox] = useState({});

    useEffect(() => {
        async function getBox() {
            const boxId = await AsyncStorage.getItem('@RocketBox:box');
            const response = await api.get(`/boxes/${boxId}`);
            setBox(response.data);
            // console.log("setBox")
        }

        getBox();

    }, [box, match.params.id]);

    function renderItem({ item }) {
        <TouchableOpacity
            onPress={() => { }}
            style={styles.file}
        >
            <View style={styles.fileInfo}>
                <Icon name="insert-drive-file" size={24} color="#a5cfff" />
                <Text style={styles.fileTitle}>{item.title}</Text>
            </View>
            <Text style={styles.fileDate}>
                há{" "}
                {formatDistance(
                    utcToZonedTime(item.createdAt, 'America/Sao_Paulo'),
                    new Date(), {
                    locale: pt
                })
                }
            </Text>
        </TouchableOpacity>
    }

    function handleUpload(){
        ImagePicker.launchImageLibrary({}, async upload =>{
            if(upload.error){
                console.log("ImagePicker error");
            }
            else if(upload.didCancel){
                console.log("Cancel by user");
            }
            else {
               const data = new FormData();

               const [prefix, suffix] = upload.fileName.split('.')
               const ext = suffix.toLowerCase() ==='heic' ? 'jpg':suffix;
               data.append('file', {
                uri: upload.uri,
                type: upload.type,
                name: `${prefix}.${ext}`
               })

               api.post(`boxes/${box._id}`, data)
            }
        })
    }

    return (
        <View styles={styles.container} >
            <Text style={styles.boxTitle}>{box.title}</Text>
            <FlatList
                style={styles.list}
                data={box.files}
                keyExtractor={file => file._id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={renderItem}
            />

            <TouchableOpacity style={styles.fab}
            onPress={handleUpload}>
                <Icon name="cloud-ipload" size={24} color="#FFF"
            </TouchableOpacity>
        </View>
    )
}