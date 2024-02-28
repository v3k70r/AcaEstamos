

function BannerBienvenidos() {
  return (
    //carrusel 
    <div className="container-fluid">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="images/cerro-renca1.png" className="d-block w-100 mx-0" alt="banner 1" />
          <div className="carousel-caption d-none d-md-block">
            <h1>¡Bienvenidos!</h1>
            <p className="text-light">Conectando a talentos con empresas comprometidas por Renca.</p>
          </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="images/cerro-renca2.png" className="d-block w-100 mx-0" alt="banner 2" />
            <div className="carousel-caption d-none d-md-block">
            <h1>¡Bienvenidos!</h1>
              <p className="text-light">Conectando a talentos con empresas comprometidas por Renca.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/cerroRenca1.png" className="d-block w-100 mx-0" alt="banner 3" />
            <div className="carousel-caption d-none d-md-block">
            <h1>¡Bienvenidos!</h1>
              <p className="text-light">Conectando a talentos con empresas comprometidas por Renca.</p>
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
    </div>
    //carrusel
  )
}

export default BannerBienvenidos