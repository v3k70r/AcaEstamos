import './BannerBienvenidos.css';

function BannerBienvenidos() {
  return (
<>





  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">

    <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ height: '550px' }}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="public/images/cerro-renca1.jpeg" className="img-fluid-carrusel" alt="banner 1" />
          <div className="carousel-caption d-none d-md-block">
          <h1 className="texto-principal">¡Bienvenidos </h1>
            <h1 className="texto-secundario">"Acá estamos"! </h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="public/images/cerro-renca2.jpg" className="img-fluid-carrusel" alt="banner 2" />
          <div className="carousel-caption d-none d-md-block">
          <h1 className="texto-principal">¡Potencia tu currículum!</h1>
          <a href="/UnbuenCurriculum" className="boton-transparente">pincha aquí</a>


          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src="public/images/cerroRenca1.jpg" className="img-fluid-carrusel" alt="banner 3" />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="texto-principal">¡Encuentra personas comprometidas! </h1>
            <a href="/TableroTalentos" className="boton-transparente">pincha aquí</a>
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
  
  
  </>
  )
}

export default BannerBienvenidos