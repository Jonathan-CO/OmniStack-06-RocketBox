// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR'
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import ImagePicker from 'react-native-image-picker';
import { formatDistance } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import styles from './style';


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

    }, [box]);


    function handleUpload() {
        ImagePicker.launchImageLibrary({}, async upload => {
            if (upload.error) { console.log("ImagePicker error"); }
            else if (upload.didCancel) { console.log("Canceled by user"); }
            else {
                const data = new FormData();

                const [prefix, suffix] = upload.fileName.split(".")
                const ext = suffix.toLowerCase() === 'heic' ? 'jpg' : suffix;

                data.append("file", {
                    uri: upload.uri,
                    type: upload.type,
                    name: `${prefix}.${ext}`
                })


                api.post(`/boxes/${box._id}/files`, data )
                .then(() => {
                    alert("Upload feito com sucesso")
                })
                .catch((error) => {
                    alert("Houve um erro ao realizar o upload da imagem")
                })
            }
        })
    }

    async function openFile(file){
        
        try {
        const filePath = `${RNFS.DocumentDirectoryPath}/${file.title}`;
        alert(file.url)
            await RNFS.downloadFile({
                fromUrl: file.url,
                toFile: filePath
            });
            await FileViewer.open(filePath)
        } catch (error) {
            console.log('Arquivo não suportado')
        }
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {openFile(item) }}
            style={styles.file}
        >
            <View style={styles.fileInfo}>
                <Text style={styles.fileTitle}>{item.title}</Text>
            </View>
            <Text style={styles.fileDate}>
                Uploaded: {" "}
                {new Date(item.createdAt).toLocaleDateString()} às {new Date(item.createdAt).toLocaleTimeString()}
            </Text>
        </TouchableOpacity>
    )
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
            {/* <Text>{auxUri}</Text> */}
            <TouchableOpacity style={styles.fab}
                onPress={handleUpload}>
                {/* <Icon name="cloud-ipload" size={24} color="#FFF" /> */}
            </TouchableOpacity>
        </View>

    )
}