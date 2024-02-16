import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import BannerBienvenidos from "../Components/Inicio/BannerBienvenidos/BannerBienvenidos"
import BuscarEmpresas from "../Components/Inicio/BuscarEmpresas/BuscarEmpresas"
import Empresas from "../Components/Inicio/Empresas/Empresas"
import Servicios from "../Components/Inicio/Servicios/Servicios"
import Testimonios from "../Components/Inicio/Testimonios/Testimonios"

const Home = () => {
  return (
    <>
    <Navbar />
    <BannerBienvenidos />
    <BuscarEmpresas />
    <Servicios />
    <Testimonios />
    <Empresas />
    <Footer />
    </>
  )
}

export default  Home

