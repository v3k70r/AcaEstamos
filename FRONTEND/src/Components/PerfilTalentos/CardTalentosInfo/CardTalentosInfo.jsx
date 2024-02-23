import './CardTalentosInfo.css';

function CardTalentosInfo(props) {

    // eslint-disable-next-line react/prop-types
    const { icono, datoInfo, datoTalento } = props
  return (
    <>
      <div className="card cardF3">
      <div className="card-body-columna3">
        {/* Icono como elemento i, asegúrate de que los estilos de FontAwesome estén incluidos en tu proyecto */}
        <i className="fas {icono} fa-2x me-3" style={{ paddingRight: '15px' }}></i>
      <div className="mx-auto2 text-center">
        <h6 className="card-title-columna3">{datoInfo}</h6>
        <p className="card-text-columna3">{datoTalento}</p>
            
          
        </div>
      </div>
    </div>
    </>
  );
}

export default CardTalentosInfo;

