import Navbar from '../Components/Navbar/Navbar'
import BannerAdministrador from '../Components/VistaAdministrador/BannerAdministrador/BannerAdministrador'
import TextoIntroAdministrador from '../Components/VistaAdministrador/TextoIntroAdministrador/TextoIntroAdministrador'
import MenuAdministrador from '../Components/VistaAdministrador/MenuAdministrador/MenuAdministrador'
import TablaEmpresas from '../Components/VistaAdministrador/TablaEmpresas/TablaEmpresas'
import CardsHorizontalAdministrador from '../Components/VistaAdministrador/CardsHorizontalAdministrador/CardsHorizontalAdministrador'
import CarruselDatos from '../Components/VistaAdministrador/CarruselDatos/CarruselDatos'
import Footer from '../Components/Footer/Footer';
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";

function VistaAdministrador() {
  return (
    <div>
    <Navbar />
    <ProtoBanner imageUrl="images/BannerAdministrador.png" 
            headingText="Vista de Administrador" />
    <TextoIntroAdministrador />
    <MenuAdministrador />
    <TablaEmpresas />
    <CarruselDatos />
    <Footer />
    </div>
  )
}

export default VistaAdministrador
