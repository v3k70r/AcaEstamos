import React from 'react';
import './CardTalentoInteres.css'; 

function CardTalentoInteres(props) {

    // eslint-disable-next-line react/prop-types
    const {interes1, interes2, interes3} = props

    return (
        <div className="card cardF2">
            <div className="card-body cardbodyF2item1">
                <p className="card-text cardtextF2item1" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                    <h6>Areas de interés</h6>
                    <hr />
                    <div className="rectangulo" style={{ textAlign: 'center' }}>
                        <div className="align-items-center" style={{ display: 'flex', flexDirection: 'column' }}>
                            <button className="boton-tarjeta" style={{ padding: '5px', width: '100%', margin: '5px' }}>{interes1}</button>
                            <button className="boton-tarjeta" style={{ padding: '5px', width: '100%', margin: '5px' }}>{interes2}</button>
                            <button className="boton-tarjeta" style={{ padding: '5px', width: '100%', margin: '5px' }}>{interes3}</button>
                        </div>
                    </div>
                </p>  
            </div>
        </div>
    );
}

export default CardTalentoInteres;
