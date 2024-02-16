import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import BannerIngresoUsuario from '../Components/IngresoUsuario/BannerIngresoUsuario/BannerIngresoUsuario.jsx';
import FormularioIngresoUsuario from '../Components/IngresoUsuario/FormularioIngresoUsuario/FormularioIngresoUsuario.jsx';



function IngresoUsuario() {
  return (
    <>
      <Navbar />
      <BannerIngresoUsuario />
      <FormularioIngresoUsuario />
      <Footer />
    </>
  )
}

export default IngresoUsuario