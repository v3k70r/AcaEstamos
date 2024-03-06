

function CarruselDatos() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="images/Usuario-admin.jpg" className="card-imgEmpresa d-block w-10" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>15</h1>
              <h5>Postulaciones por autorizar</h5>
              <p>Aqui puedes ver la cantidad de usuarios nuevos por autorizar.</p>
              <button className="boton-tarjeta" style={{ backgroundColor: '#e7892c', color: "white", borderRadius: "8px", border: "none", padding: "1%"  }}>Ver más</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="images/Usuario-admin.jpg" className="card-imgEmpresa d-block w-10" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>158490</h1>
              <h5>Usuarios Activos</h5>
              <p>Aqui puedes ver la cantidad de usuarios activos.</p>
              <button className="boton-tarjeta" style={{ backgroundColor: '#e7892c', color: "white", borderRadius: "8px", border: "none", padding: "1%"  }}>Ver más</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/Usuario-admin.jpg" className="card-imgEmpresa d-block w-10" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="PCA1">123</h1>
              <h5 className="PCA2">Usuarios Inactivos</h5>
              <p className="PCA3">Aqui puedes ver la cantidad de usuarios inactivos.</p>
              <button className="boton-tarjeta" style={{ backgroundColor: '#e7892c', color: "white", borderRadius: "8px", border: "none", padding: "1%" }}>Ver más</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarruselDatos;

