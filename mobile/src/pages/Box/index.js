// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR'
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-picker';
import { formatDistance, subDays } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import styles from './style';


export default function Box() {
    const [box, setBox] = useState({});
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        async function getBox() {
            const boxId = await AsyncStorage.getItem('@RocketBox:box');
            const response = await api.get(`/boxes/${boxId}`);
            setBox(response.data);
            // setDate(new Date())
            // console.log("setBox")
        }

        getBox();

    }, [box]);


    function handleUpload() {
        ImagePicker.launchImageLibrary({}, async upload => {

            if (upload.error) { console.log("ImagePicker error"); }
            else if (upload.didCancel) { console.log("Canceled by user"); }
            else {

                RNFetchBlob.fetch('POST', `http://192.168.0.106:3333/boxes/${box._id}/files`, {
                    Authorization: "bearer access-token",
                    'Content-Type': 'application/octet-stream',
                }, [
                    { name: 'file', filename: upload.fileName, type: upload.type, data: RNFetchBlob.wrap(upload.uri) },
                ])
                    // .then(response => { console.log(response) })
                    .catch(error => alert("Houve um erro ao realizar o post"))
            }
        })
    }

    async function openFile(file) {

        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/${file.title}`;
            // alert(file.url)
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
            onPress={() => { openFile(item) }}
            style={styles.file}
        >
            <View style={styles.fileInfo}>
                <Text style={styles.fileTitle}>{item.title}</Text>
            </View>
            <Text style={styles.fileDate}>
                Há {" "}
                {formatDistance(
                    new Date(item.createdAt),
                    date,
                    { locale: pt }
                )}
            </Text>
        </TouchableOpacity>

    )
    return (
        <View>
            <View style={{
                position:'absolute',
                width: '100%', 
                height: 50
                
                }}>
                <Text style={styles.boxTitle}>{box.title}</Text>
            </View>
            <View styles={styles.container} >
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
                    <Text style={{ color: "#FFF" }}>Up!</Text>{/* <Icon name="cloud-ipload" size={24} color="#FFF" /> */}
                </TouchableOpacity>
            </View>
        </View>


    )
}