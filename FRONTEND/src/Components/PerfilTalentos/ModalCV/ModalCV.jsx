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
          Alternativamente, puedes <a href={pdfUrl}>descargar el archivo PDF</a>.
        </object>
      </div>
    </div>
  );
}


export default ModalCV;