import './CardTalentosInfo.css';

function CardTalentosInfo(props) {

    // eslint-disable-next-line react/prop-types
    const { icono, datoInfo, datoTalento } = props
  return (
    <>
      <div className="card cardF3">
        <div className="card-body d-flex align-items-center">
          <i className={`fas ${icono} fa-2x me-3`} style={{ paddingRight: '15px' }}></i>
          <div className="mx-auto2 text-center">
            <h6 className="card-title">{datoInfo}</h6>
            <p className="card-text">{datoTalento}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTalentosInfo;

