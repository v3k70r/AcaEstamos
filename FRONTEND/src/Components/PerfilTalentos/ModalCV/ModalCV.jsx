/* eslint-disable react/prop-types */
import './ModalCV.css';

function ModalCV({ onClose, pdfUrl }) {
  return (
    <div className="VentanaModal">
      <div id='cerrar'>
        <button className='botonCerrar' onClick={onClose}><img src="public/images/cerraricono.png" alt="icono"/></button>
      </div>
      <div>
        <object data={pdfUrl} type="application/pdf" width="600" height="800">
        </object>
        <div>
    <a href={pdfUrl} className="btn descargarCV" download>Descargar archivo</a>
  </div>
      </div>
    </div>
  );
}


export default ModalCV;