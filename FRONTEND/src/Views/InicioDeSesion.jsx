import Navbar from '../Components/Navbar/Navbar'
import FormInicio from '../Components/InicioDeSesion/Form/FormInicio';
import Footer from '../Components/Footer/Footer';
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";

const InicioDeSesion = () => {
    return (
        <>
            <Navbar />
            <ProtoBanner imageUrl="images/inicioSesion.png" 
            headingText="Inicio de sesión" />
            <FormInicio />
            <Footer />
        </>
    )
}

export default InicioDeSesion