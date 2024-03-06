import './CardsHorizontalAdministrador.css';

function CardsHorizontalAdministrador() {
  return (
    <>
       <div className="col-md-12">
      {/* Contenido del contenedor principal */}
      <div className="container contenedorTalentos shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px', padding: '1%' }}>
        <div className="row">
          <div className="col-md-12 espacioCard" >
            <div className="card cardRes mb-3" style={{ width: '100%' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="images/perfil-admin.jpg" className="card-imgEmpresa" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PERFILES</h5>
                    <p className="card-text">Aqui podrá administrar los perfiles de postulantes, modificar datos de postulantes, suspender postulantes, eliminar postulantes.</p>
                    <a href="#" className="btn verMasBoton" style={{ color: 'white' }}>Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 espacioCard">
            <div className="card mb-3" style={{ width: '100%' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="images/empresa-admin.jpg" className="card-imgEmpresa" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">EMPRESAS</h5>
                    <p className="card-text">Aqui podrá administrar los perfiles de empresas, modificar datos, suspender y eliminar empresas.</p>
                    <a href="#" className="btn verMasBoton" style={{ color: 'white' }}>Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 espacioCard">
            <div className="card mb-3" style={{ width: '100%' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="images/Usuario-admin.jpg" className="card-imgEmpresa" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">USUARIOS</h5>
                    <p className="card-text">Podrá ver cuántos nuevos usuarios han ingresado y las nuevas solicitudes.</p>
                    <a href="#" className="btn verMasBoton" style={{ color: 'white' }}>Ver más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardsHorizontalAdministrador
