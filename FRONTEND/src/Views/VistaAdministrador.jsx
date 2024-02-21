import Navbar from '../Components/Navbar/Navbar'
import BannerAdministrador from '../Components/VistaAdministrador/BannerAdministrador/BannerAdministrador'
import Footer from '../Components/Footer/Footer';
import TextoIntroAdmin from '../Components/VistaAdministrador/TextoIntroAdmin/TextoIntroAdmin'
import CardsHorizontal from '../Components/VistaAdministrador/CardsHorizontal/CardsHorizontal'
import CarruselPerfiles from '../Components/VistaAdministrador/CarruselPerfiles/CarruselPerfiles';
import CarruselCVAdmin from '../Components/VistaAdministrador/CarruselCVAdmin/CarruselCVAdmin';

function VistaAdministrador() {
  return (
    <div>
    <Navbar />
    <BannerAdministrador />
    <TextoIntroAdmin />
    <CardsHorizontal />
    <CarruselPerfiles />
    <CarruselCVAdmin />
    <Footer />
    </div>
  )
}

export default VistaAdministrador
