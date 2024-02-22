import './CardEmpresa.css';


function CardEmpresa (props) {

  // eslint-disable-next-line react/prop-types
  const {imagenEmpresa, nombreEmpresa, descripcionEmpresa} = props
  return (
    <>
        <p><div className="row">
            <div className="col-md-12" >
              <div className="card cardRes mb-3" style={{ width: "100%" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                  <img src={imagenEmpresa} className="card-imgEmpresa" alt="Nombre de la empresa" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{nombreEmpresa}</h5>
                      <p className="card-text">{descripcionEmpresa}</p>
                      <a href="#" className="btn verMasBoton" style={{ color: "white" }}>Ver más</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </p>
    </>
  );
}

export default CardEmpresa;