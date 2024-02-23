import './BannerStyle.css'
function BannerInicio() {
    return (
        <>
        <div className="container-fluid">
        <div id="bannerTalent">
          <img src="images/inicioSesion.png" className="img-fluid" alt="banner" />
          <div className="carousel-caption d-none d-md-block">
            <h1>Inicio de Sesion</h1>
          </div>
        </div>
      </div>
        </>
    )
}

export default BannerInicio