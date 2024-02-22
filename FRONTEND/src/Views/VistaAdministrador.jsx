import Navbar from '../Components/Navbar/Navbar'
import BannerAdministrador from '../Components/VistaAdministrador/BannerAdministrador/BannerAdministrador'
import TextoIntroAdministrador from '../Components/VistaAdministrador/TextoIntroAdministrador/TextoIntroAdministrador'
import CardsHorizontalAdministrador from '../Components/VistaAdministrador/CardsHorizontalAdministrador/CardsHorizontalAdministrador'
import CarruselPerfilesAdministrador from '../Components/VistaAdministrador/CarruselPerfilesAdministrador/CarruselPerfilesAdministrador';
import CarruselCVAdministrador from '../Components/VistaAdministrador/CarruselCvAdministrador/CarruselCvAdministrador';
import Footer from '../Components/Footer/Footer';

function VistaAdministrador() {
  return (
    <>
    <Navbar />
    <BannerAdministrador />
    <TextoIntroAdministrador />
    <CardsHorizontalAdministrador />
    <CarruselPerfilesAdministrador />
  
    <h3 className="h3-carrusel text-center" style={{ color: '#424242' }}>perfiles relacionados</h3>
  <div className="ContenedorCarrusel">
  <h1 className="w3-center" ></h1>
  <div className="carousel kathcarrusel"  data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded":true }'>
<CarruselCvAdministrador 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar1.png'
/>
<CarruselCvAdministrador
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar2.png'
/>
<CarruselCvAdministrador 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar3.png'
/>
<CarruselCvAdministrador
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar4.png'
/>
<CarruselCvAdministrador
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar5.png'
/>
<CarruselCvAdministrador
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar6.png'
/>
  </div>
  </div>
    <Footer />
    </>
  )
}

export default VistaAdministrador
