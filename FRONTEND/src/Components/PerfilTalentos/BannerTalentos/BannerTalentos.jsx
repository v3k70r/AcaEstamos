import React, { useState } from 'react';
import './BannerTalentos.css';


function BannerTalentos() {
    
    const [botonTexto, setBotonTexto] = useState('EN BUSQUEDA ACTIVA: NO');

   
    const handleClick = () => {
        setBotonTexto(prevTexto => {
            if (prevTexto.includes('NO')) {
                return 'EN BUSQUEDA ACTIVA: SÍ';
            } else {
                return 'EN BUSQUEDA ACTIVA: NO';
            }
        });
    };

    return (
        <div className="BannerDeColorPerfil d-flex justify-content-center align-items-center position-relative">
            <div className="container perfil">
                <div className="d-flex imagenperfil justify-content-center position-absolute bottom-0 start-50 translate-middle-x">
                    <img src="images/Hombre_avatar3.png" className="img-thumbnail2" style={{ width: '180px', marginBottom: '-75px', borderRadius: '50%', border: '5px solid rgb(218, 220, 226)' }} alt="Avatar" />
                </div>
                <div className="col-6 textos">
                    <h3 className="text-white">Nombre talento</h3>
                    <h4 className="text-white">Profesión u oficio</h4>
                </div>
                <div className="col-md-8 boton d-flex justify-content-end" style={{ width: '100%' }}>
                    {/* Utilizamos el estado del botón para controlar el texto */}
                    <button id="estadoBoton" type="button" className="btn busquedactiva btn-success btn-sm me-3" style={{ backgroundColor: '#F6990E' }} onClick={handleClick}>
                        {botonTexto} <i className="fas fa-caret-down ml-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BannerTalentos;
