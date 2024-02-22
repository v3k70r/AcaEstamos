import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import BuscarEmpresas from "../Components/Inicio/BuscarEmpresas/BuscarEmpresas"
import Empresas from "../Components/Inicio/Empresas/Empresas"
import Servicios from "../Components/Inicio/Servicios/Servicios"
import Testimonios from "../Components/Inicio/Testimonios/Testimonios"
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";

const Home = () => {
  return (
    <>
    <Navbar />
    <ProtoBanner imageUrl="images/cerro-renca1.png" 
            headingText="Conectando a talentos con empresas comprometidas por Renca" />
    <BuscarEmpresas />
    <Servicios />
    <Testimonios />
    <Empresas />
    <Footer />
    </>
  )
}

export default  Home

