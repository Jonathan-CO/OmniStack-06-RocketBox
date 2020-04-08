import React from 'react';
import './style.css';

export default function Main(){
    return (
        <div id="main-container">
            <form >
                {/* <img src={} alt=""/> */}
                <input placeholder="Criar um box"/>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}