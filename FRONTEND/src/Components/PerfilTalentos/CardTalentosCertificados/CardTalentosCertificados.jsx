import React from 'react';
import './CardTalentosCertificados.css';

function CardTalentosCertificados(props) {
    return (
        <div className="card cardF1"> 
            <div className="card-body">
                <p className="card-text" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                    <h6 >{props.h6}</h6>
                    <hr /> 
                    {props.parrafo}
                </p>
                <button type="button" className="btn" style={{ padding: '12px 60px', color: 'white', backgroundColor: '#F6990E', fontSize: '13px' }}>
                    VISUALIZAR<i className="far fa-eye ms-2"></i>
                </button>
            </div>
        </div>
    );
}

export default CardTalentosCertificados;
