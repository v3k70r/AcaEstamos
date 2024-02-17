import Navbar from '../Components/Navbar/Navbar'
import BannerEmpresa from '../Components/PerfilEmpresa/BannerEmpresa/BannerEmpresa'
import NombreEmpresa from '../Components/PerfilEmpresa/NombreEmpresa/NombreEmpresa'
import LogoEmpresa from '../Components/PerfilEmpresa/LogoEmpresa/LogoEmpresa'
import MasInfo from '../Components/PerfilEmpresa/MasInfo/MasInfo'
import Direccion from '../Components/PerfilEmpresa/Direccion/Direccion'
import TarjetaInfoEmpresa from '../Components/PerfilEmpresa/TarjetaInfoEmpresa/TarjetaInfoEmpresa'
import EmpresasRelacionadas from '../Components/PerfilEmpresa/EmpresasRelacionadas/EmpresasRelacionadas'
import Footer from '../Components/Footer/Footer';

const PerfilEmpresa = () => {
    return (
        <div>
            <Navbar />
            <BannerEmpresa />
            <div className="container-fluid mt-5">
                <div className="row flex-sm-row">
                    <NombreEmpresa />
                    <LogoEmpresa />
                </div>
                <div className="row flex-sm-row">
                    <MasInfo />
                    <Direccion />
                </div>
            <TarjetaInfoEmpresa />
            <EmpresasRelacionadas />
            </div>
            <Footer />
        </div>
    )
}

export default PerfilEmpresa