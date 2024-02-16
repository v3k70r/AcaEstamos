import Navbar from '../Footer.jsx';
import BannerIngresoUsuario from '../Components/IngresoUsuario/BannerIngresoUsuario/BannerIngresoUsuario.jsx';
import FormularioIngresoUsuario from '../Components/IngresoUsuario/FormularioIngresoUsuario/FormularioIngresoUsuario.jsx';
import Footer from '../Components/Footer.jsx';



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