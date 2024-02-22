import Navbar from '../Components/Navbar/Navbar'
import BannerAdministrador from '../Components/VistaAdministrador/BannerAdministrador/BannerAdministrador'
import '../Components/VistaAdministradorEstilos/VistaAdministrador.css';
import TextoIntroAdministrador from '../Components/VistaAdministrador/TextoIntroAdministrador/TextoIntroAdministrador'
import CardsHorizontalAdministrador from '../Components/VistaAdministrador/CardsHorizontalAdministrador/CardsHorizontalAdministrador'
import CarruselPerfilesAdministrador from '../Components/VistaAdministrador/CarruselPerfilesAdministrador/CarruselPerfilesAdministrador';
import CarruselCVAdministrador from '../Components/VistaAdministrador/CarruselCVAdministrador/CarruselCVAdministrador';
import Footer from '../Components/Footer/Footer';

function VistaAdministrador() {
  return (
    <div>
    <Navbar />
    <BannerAdministrador />
    <TextoIntroAdministrador />
    <CardsHorizontalAdministrador />
    <div className="carousel kathcarrusel"  data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded":true }'>
    <CarruselPerfilesAdministrador />
    <CarruselCVAdministrador />
    </div>
    <Footer />
    </div>
  )
}

export default VistaAdministrador
