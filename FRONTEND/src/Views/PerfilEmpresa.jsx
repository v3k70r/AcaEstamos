import Navbar from '../Components/Navbar/Navbar'
import NombreEmpresa from '../Components/PerfilEmpresa/NombreEmpresa/NombreEmpresa'
import MasInfo from '../Components/PerfilEmpresa/MasInfo/MasInfo'
import TarjetaInfoEmpresa from '../Components/PerfilEmpresa/TarjetaInfoEmpresa/TarjetaInfoEmpresa'
import EmpresasRelacionadas from '../Components/PerfilEmpresa/EmpresasRelacionadas/EmpresasRelacionadas'
import Footer from '../Components/Footer/Footer';
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";

const PerfilEmpresa = () => {
    return (
        <div>
            <Navbar />
            <ProtoBanner imageUrl="images/bannerPEmpresas.png" 
            headingText="Perfil de empresa" />
            <NombreEmpresa />
            <MasInfo />
            <TarjetaInfoEmpresa />
            <EmpresasRelacionadas />
            <Footer />
        </div>
    )
}

export default PerfilEmpresa