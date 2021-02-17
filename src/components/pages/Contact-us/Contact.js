import React from 'react';
import './Contact.css';
import {useState, useEffect} from "react";
import Axion from 'axios';

function Contact() {

    const [softName, setSoftName] = useState('');
    const [softEmail, setSoftEmail] = useState('');
    const [softNumber, setSoftNumber] = useState(0);
    const [softText, setSoftText] = useState('');


    const addToList=() => {
        Axion.post("http://localhost:3001/insert",
        {
            softName: softName,
            softEmail: softEmail,
            softNumber: softNumber,
            softText: softText,
        });
    };

    return (
        <>
        <div className="contact__section">  
            <div className="contact__container">
                <h2 className="contact__heading">NOS ENCANTARÍA CONOCETE</h2>
                <h1 className="contact__heading1">PÓNGANSE EN CONTACTO CON NOSOTROS</h1>
                    <form className="contact__from">
                        <input  className="contact__data" type="text" onChange={(event)=>{setSoftName(event.target.value)}} placeholder="LastName"></input>
                        <input  className="contact__data" type="text" onChange={(event)=>{setSoftEmail(event.target.value)}} placeholder="Email"></input>
                        <input  className="contact__data" type="number" onChange={(event)=>{setSoftNumber(event.target.value)}} placeholder="Number"></input>
                        <textarea className="contact__tarea"  type="text" onChange={(event)=>{setSoftText(event.target.value)}} placeholder="Escribe lo que nos quieresa decir"></textarea>
                    </form>
                    <button  className="contact__button"  onClick={addToList} >ENVIAR</button>
                    
            </div>
        </div>
        </>
    );
}

export default Contact;
