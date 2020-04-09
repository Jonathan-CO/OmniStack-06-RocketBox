import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';
import api from '../../services/api';


import logo from '../../assets/logo.svg'

export default function Main(){
    const [newBox, setNewBox] = useState('');
    const history = useHistory();


    async function handleSumit(e){
        e.preventDefault();
        const response = await api.post('/boxes', { 
            title: newBox 
        })
        history.push(`/box/${response.data._id}`);
        // console.log(response.data);
    }

    return (
        <div id="main-container">
            <form onSubmit={handleSumit}>
                <img src={logo} alt="logo"/>
                <input 
                value={newBox}
                onChange={e => setNewBox(e.target.value)}
                placeholder="Criar um box"/>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}