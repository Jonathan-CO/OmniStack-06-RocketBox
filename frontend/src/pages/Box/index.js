import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { formatDistance } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import Dropzone from 'react-dropzone';
import socket from 'socket.io-client';

import { MdInsertDriveFile } from 'react-icons/md';

import logo from '../../assets/logo.svg'
import './style.css';

export default function Box({ match }) {
    const [box, setBox] = useState({});

    useEffect(() => {
        async function getBox() {
            const boxId = match.params.id
            const response = await api.get(`/boxes/${boxId}`);
            setBox(response.data);
            // console.log("setBox")
        }

        getBox();

    }, [box, match.params.id]);

    useEffect(() => {
        const box_id = match.params.id;
        const io = socket('http://localhost:3333');
        io.emit('connectRoom', box_id);
        io.on('file', data => { 
            if(box.files){ 
                setBox({ ...box, files:[data, ...box.files] }) 
            }   
        })
    }, [match.params.id])// eslint-disable-line


    function handleUpload(files) {
        files.forEach(file => {
            const data = new FormData();
            const box_id = match.params.id;
            data.append('file', file);
            api.post(`boxes/${box_id}/files`, data)
        })
    }


    return (
        <div id="box-container">
            <header>
                <img src={logo} alt="logo" />
                <h1>{box.title}</h1>
            </header>

            <Dropzone onDropAccepted={handleUpload}>
                {({ getRootProps, getInputProps }) => (
                    <div className="upload" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Arraste arquivos ou clique aqui</p>
                    </div>
                )}
            </Dropzone>

            <ul>
                {box.files && box.files.map(file => (
                    <li key={file._id}>
                        <a className="fileInfo"
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer">
                            <MdInsertDriveFile size={24} color="#a5cfff" />
                            <strong>{file.title}</strong>
                        </a>
                        {/* <span>
                            {file.createdAt}
                        </span> */}
                        <span>
                            há{" "}
                            {formatDistance(
                                utcToZonedTime(file.createdAt, 'America/Sao_Paulo'),
                                new Date(), {
                                locale: pt
                            })
                            }
                        </span>
                    </li>
                ))}


            </ul>

        </div>
    );
}
