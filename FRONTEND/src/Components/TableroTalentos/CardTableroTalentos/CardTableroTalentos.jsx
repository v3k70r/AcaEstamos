/* eslint-disable react/prop-types */
import './CardTableroTalentos.css';


const CardTableroTalentos = (props) => {

// eslint-disable-next-line no-unused-vars
const {imagenTablero, nombreTalento, intereses, profesion} = props

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card cardRes mb-3" style={{ width: '100%' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={imagenTablero} className="card-imgEmpresa" alt="Nombre de la empresa" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{nombreTalento}</h5>
                <p className="card-text">{intereses}</p>
                <p className="card-text">{profesion}</p>
                <a href="#" className="btn verMasBoton" style={{ color: 'white' }}>Ver talento</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTableroTalentos;
