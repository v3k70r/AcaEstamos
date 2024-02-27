import Navbar from '../Components/Navbar/Navbar'
import BannerAdministrador from '../Components/VistaAdministrador/BannerAdministrador/BannerAdministrador'
import TextoIntroAdministrador from '../Components/VistaAdministrador/TextoIntroAdministrador/TextoIntroAdministrador'
import MenuAdministrador from '../Components/VistaAdministrador/MenuAdministrador/MenuAdministrador'
import CardsHorizontalAdministrador from '../Components/VistaAdministrador/CardsHorizontalAdministrador/CardsHorizontalAdministrador'
import CarruselDatos from '../Components/VistaAdministrador/CarruselDatos/CarruselDatos'
import Footer from '../Components/Footer/Footer';

function VistaAdministrador() {
  return (
    <div>
    <Navbar />
    <BannerAdministrador />
    <TextoIntroAdministrador />
    <MenuAdministrador />
    <CardsHorizontalAdministrador />
    <CarruselDatos />
    <Footer />
    </div>
  )
}

export default VistaAdministrador
