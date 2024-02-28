import { useState } from 'react';
import './CardTalentosCertificados.css';
import ModalCV from '../ModalCV/ModalCV'; // Asegúrate de que la ruta es correcta

function CardTalentosCertificados(props) {
  const [modalVisible, setModalVisible] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // eslint-disable-next-line react/prop-types
  const {parrafo, h6, documento} = props

  return (
    <div className="card cardF1">
      <div className="card-body">
        <p className="card-text" style={{ maxHeight: '150px', overflow: 'hidden' }}>
          <h6>{h6}</h6>
          <hr />
          {parrafo}
        </p>
        <button 
          type="button" 
          className="btn" 
          style={{ width: '100%', color: 'white', backgroundColor: '#F6990E', fontSize: '13px' }}
          onClick={openModal} // Llama a la función para abrir el modal
        >
          VISUALIZAR <i className="far fa-eye ms-2"></i>
        </button>
      </div>
      {/* Renderiza el ModalCV solo si modalVisible es true y pasa la función para cerrarlo */}
      {modalVisible && <ModalCV onClose={closeModal} pdfUrl={documento} />}
    </div>
  );
}

export default CardTalentosCertificados;