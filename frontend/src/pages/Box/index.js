import React, { useState } from 'react';
import './style.css';
// import api from '../../services/api';
import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg'

export default function Box() {
    const [newBox, setNewBox] = useState('');

    return (
        <div id="box-container">
            <header>
                <img src={logo} alt="logo" />
                <h1>RocketSeat</h1>
            </header>
            <ul>
                <li>
                    <a className="fileInfo" href="#">
                        <MdInsertDriveFile size={24} color="#a5cfff" />
                        <strong>Desafio.pdf</strong>
                    </a>
                    <span>Há 5 minutos atrás</span>
                </li>
                <li>
                    <a className="fileInfo" href="#">
                        <MdInsertDriveFile size={24} color="#a5cfff" />
                        <strong>Desafio.pdf</strong>
                    </a>
                    <span>Há 5 minutos atrás</span>
                </li>
            </ul>

        </div>
    );
}
