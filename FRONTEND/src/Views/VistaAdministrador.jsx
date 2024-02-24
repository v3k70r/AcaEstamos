import Navbar from '../Components/Navbar/Navbar'
import BannerAdministrador from '../Components/VistaAdministrador/BannerAdministrador/BannerAdministrador'
import TextoIntroAdministrador from '../Components/VistaAdministrador/TextoIntroAdministrador/TextoIntroAdministrador'
import MenuAdministrador from '../Components/VistaAdministrador/MenuAdministrador/MenuAdministrador'
import CarruselDatos from '../Components/VistaAdministrador/CarruselDatos/CarruselDatos'
import CardsHorizontalAdministrador from '../Components/VistaAdministrador/CardsHorizontalAdministrador/CardsHorizontalAdministrador'
import CarruselPerfilesAdministrador from '../Components/VistaAdministrador/CarruselPerfilesAdministrador/CarruselPerfilesAdministrador';
import CarruselCvAdministrador from '../Components/VistaAdministrador/CarruselCVAdministrador/CarruselCVAdministrador';
import Footer from '../Components/Footer/Footer';

function VistaAdministrador() {
  return (
    <div>
    <Navbar />
    <BannerAdministrador />
    <TextoIntroAdministrador />
    <MenuAdministrador />
    <CarruselDatos />
    <CardsHorizontalAdministrador />
    <div className="carousel kathcarrusel"  data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded":true }'>
    <CarruselPerfilesAdministrador />
    <CarruselCvAdministrador />
    </div>
    <Footer />
    </div>
  )
}

export default VistaAdministrador
