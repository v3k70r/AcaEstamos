import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import BuscarEmpresas from "../Components/Inicio/BuscarEmpresas/BuscarEmpresas"
import Empresas from "../Components/Inicio/Empresas/Empresas"
import Servicios from "../Components/Inicio/Servicios/Servicios"
import Testimonios from "../Components/Inicio/Testimonios/Testimonios"
import { Carousel, Collapse, initMDB } from "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.es.min.js";
import BannerBienvenidos from "../Components/Inicio/BannerBienvenidos/BannerBienvenidos"
import InfoBuenCurriculum from "../Components/Inicio/InfoBuenCurriculum/InfoBuenCurriculum"   

const Home = () => {
  initMDB({ Collapse });
  initMDB({ Carousel });
  return (
    <>
    <Navbar />
    <BannerBienvenidos />
    <BuscarEmpresas />
    <Servicios />
    <Testimonios />
    <InfoBuenCurriculum />
    <Empresas />
    <Footer />
    </>
  )
}

export default  Home

