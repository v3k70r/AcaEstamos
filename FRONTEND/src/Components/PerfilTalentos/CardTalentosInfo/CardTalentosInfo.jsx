import './CardTalentosInfo.css';

function CardTalentosInfo(props) {

    // eslint-disable-next-line react/prop-types
    const { icono, datoInfo, datoTalento } = props
  return (
    <>
      <div className="card cardF3">
      <div className="card-body-columna3">
      <i className={`fas ${icono} fa-2x me-3`} style={{ paddingRight: 'auto' }}></i>
      <div className="mx-auto2">
        <h6 className="card-title-columna3">{datoInfo}</h6>
        <p className="card-text-columna3">{datoTalento}</p>
            
          
        </div>
      </div>
    </div>
    </>
  );
}

export default CardTalentosInfo;

