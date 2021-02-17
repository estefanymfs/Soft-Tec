import React, { useState } from 'react';
import './Cotizacion.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import Axion from 'axios';
import {  useEffect } from "react";

function Cotizacion() {
    const [ListName, setListName] = useState('');
    const [ListPrice, setListPrice] = useState(0);
    const [ListInfo, setListInfo] = useState('');
    const [ListMes, setListMes] = useState('');
    const [ListService, setListService] = useState([]);

    useEffect(() => {
        Axion.get('http://localhost:3001/read').then((response)=>{
            setListService(response.data);
        });
    },[]);
<script>

</script>
   
    
    return (
        <div className="cotizacion__section">
            <div className="cotizacion__container">
                <h1 className="cotizacion__head">COTIZA EL PAQUETE QUE DESEAS</h1>
                <div className="cotizacion__prin" > {ListService.map((val,key) => {
                        return(
                            <div className="cotizacion__list" key={key}>
                            <h1 className="cotizacion__ob">Servicio: {val.ListName}</h1>
                            <h1 className="cotizacion__ob">Precio: {val.ListPrice}</h1> 
                            <h1 className="cotizacion__ob">Información: {val.ListInfo}</h1>
                            <h1 className="cotizacion__ob">Duración aproximada: {val.ListMes}</h1>
                            <button className="cotizacion_button">agregar</button>
                            </div>
                        );
                    })}
                </div>
                <aside className="cotizacion__aside">
                    <h3>Lista de cotización</h3>
                    <ul id="carrito" className="list__carrito" ></ul>
                    <hr/>
                    {/* <p className="list">Total:<span id="total"></span> soles</p>
                    <button id="boton-vaciar" className="cotizacion__btn" >Vaciar</button> */}
                </aside>
                
                {/* <table className="cotizacion__table">
                    <tbody>
                    <tr>
                        <th>NOMBRE DEL SERVICIO</th>
                        <th>PRECIO ESTIMADO</th>
                        <th>INFORMACIÓN DEL SERVICIO</th>
                        <th>DURACIÓN</th>
                    </tr>
                    <tr> {ListService.map((val, key) => {
                        return( 
                        <th>{val.ListName}</th>
                        );})}
                    </tr>
                    </tbody>
                </table> */}
                <div className="cotization__descarga">
                <h1 className="cotizacion__text">DESCARGA TU COTIZACIÓN:</h1>
                <Link to='/'>
                    <Button buttonSize='btn--wide' buttonColor='green'>DESCARGAR</Button>
                </Link>
                
                </div>
            </div>
        </div>
    );
}

export default Cotizacion;