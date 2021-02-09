import React from 'react';
import './Services.css';
import {Link} from 'react-router-dom';
import {BsGearFill} from 'react-icons/bs';
import {FaBroadcastTower} from 'react-icons/fa';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {Button} from './Button';
import {IconContext} from 'react-icons/lib'

function Services() {
    
    return (
        <IconContext.Provider value={{color: '#fff', size:64}}>
        <div>
            <div className="services__section">
                <div className="services__wrapper">
                    <h1 className="services__heading">Servicios</h1>
                    <div className="services__container">
                        <Link to="/list" className="services__container-card">
                            <div className="services__container-cardInfo">
                                <div className="icon">
                                    <BsGearFill/>
                                </div>
                                <br/>
                                <h3>SOPORTE TÉCNICO</h3>
                                <br/>
                                <h4>$10.00</h4>
                                <br/>
                                <p>2 MESES</p>
                                <br/>
                                <Button buttonSize="btn--whide" buttonColor='primary'>
                                    SABER MÁS
                                </Button>
                            </div>
                        </Link>
                        <Link to="/list" className="services__container-card">
                            <div className="services__container-cardInfo">
                                <div className="icon">
                                    <FaBroadcastTower/>
                                </div>
                                <br/>
                                <h3>ASESORIAMIENTOS DE SERVICIOS</h3>
                                <br/>
                                <h4>$10.00</h4>
                                <br/>
                                <p>2 MESES</p>
                                <br/>
                                <Button buttonSize="btn--whide" buttonColor='primary'>
                                    SABER MÁS
                                </Button>
                            </div>
                        </Link>
                        <Link to="/list" className="services__container-card">
                            <div className="services__container-cardInfo">
                                <div className="icon">
                                    <FaChalkboardTeacher/>
                                </div>
                                
                                <h3>SERVICIO DE IMPLENTACIÓN</h3>
                                <br/>
                                <h4>$10.00</h4>
                                <br/>
                                <p>2 MESES</p>
                                <br/>
                                <Button buttonSize="btn--whide" buttonColor='primary'>
                                    SABER MÁS
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Services;