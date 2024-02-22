import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import FormularioIngresoUsuario from '../Components/IngresoUsuario/FormularioIngresoUsuario/FormularioIngresoUsuario.jsx';
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";


function IngresoUsuario() {
  return (
    <>
      <Navbar />
      <ProtoBanner imageUrl="images/registroUsuario.png" 
            headingText="Registro de usuarios" />
      <FormularioIngresoUsuario />
      <Footer />
    </>
  )
}

export default IngresoUsuario