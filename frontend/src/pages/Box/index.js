import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import { formatDistance } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg'

export default function Box({ match }) {
    const [box, setBox] = useState({});

    useEffect(() => {
        async function getBox() {
            const boxId = match.params.id
            const response = await api.get(`/boxes/${boxId}`);
            setBox(response.data);
        }
        getBox();
    }, [match.params.id]);
    return (
        <div id="box-container">
            <header>
                <img src={logo} alt="logo" />
                <h1>{box.title}</h1>
            </header>
            <ul>
                {box.files && box.files.map(file => (
                    <li>
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
