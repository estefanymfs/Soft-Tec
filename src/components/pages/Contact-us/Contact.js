import React from 'react';
import './Contact.css';
import {Button} from '../../Button';
import {Link} from 'react-router-dom';

function Contact() {
    return (
        <>
        <div className="contact__section">  
            <div className="contact__container">
                <h2 className="contact__heading">NOS ENCANTARÍA CONOCETE</h2>
                <h1 className="contact__heading1">PÓNGANSE EN CONTACTO CON NOSOTROS</h1>
                    <form className="contact__from">
                        <input  className="contact__data" type="text" placeholder="Name"></input>
                        <input  className="contact__data" type="text" placeholder="Email"></input>
                        <input  className="contact__data" type="text" placeholder="Number"></input>
                        <textarea className="contact__tarea" type="text" ></textarea>
                    </form>
                    <Link to='/'>
                    <Button  buttonSize="btn--whide" buttonColor='primary'>ENVIAR</Button>
                    </Link>
            </div>
        </div>
        </>
    );
}

export default Contact;
