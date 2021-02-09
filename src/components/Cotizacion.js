import React from 'react';
import './Cotizacion.css';

function Cotizacion() {
    return (
        <div className="cotizacion__container">
            <div className="container">
                <h1 className="cotizacion__head">COTIZA EL PAQUETE QUE DESEAS</h1>
                <select className="cotizacion__select">

                </select>
                <table className="cotizacion__table">
                    <tr>
                        <th>NOMBRE DEL SERVICIO</th>
                        <th>PRECIO ESTIMADO</th>
                    </tr>
                </table>
                <h1 className="cotizacion__text">DESCARGA LA INFORMACIÓN SELECCIONADA</h1>
            </div>
        </div>
    );
}

export default Cotizacion;