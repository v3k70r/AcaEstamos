import Navbar from '../Components/Navbar/Navbar'
import BannerEmpresa from '../Components/PerfilEmpresa/BannerEmpresa/BannerEmpresa'
import NombreEmpresa from '../Components/PerfilEmpresa/NombreEmpresa/NombreEmpresa'
import MasInfo from '../Components/PerfilEmpresa/MasInfo/MasInfo'
import TarjetaInfoEmpresa from '../Components/PerfilEmpresa/TarjetaInfoEmpresa/TarjetaInfoEmpresa'
import EmpresasRelacionadas from '../Components/PerfilEmpresa/EmpresasRelacionadas/EmpresasRelacionadas'
import Footer from '../Components/Footer/Footer';

const PerfilEmpresa = () => {
    return (
        <div>
            <Navbar />
            <BannerEmpresa />
            <NombreEmpresa />
            <MasInfo />
            <TarjetaInfoEmpresa />
            <EmpresasRelacionadas />
            <Footer />
        </div>
    )
}

export default PerfilEmpresa