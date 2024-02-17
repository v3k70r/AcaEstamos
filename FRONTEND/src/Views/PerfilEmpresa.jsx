import Navbar from '../Components/Navbar/Navbar'
import BannerEmpresa from '../Components/PerfilEmpresa/BannerEmpresa/BannerEmpresa'
import NombreEmpresa from '../Components/PerfilEmpresa/NombreEmpresa/NombreEmpresa'
import LogoEmpresa from '../Components/PerfilEmpresa/LogoEmpresa/LogoEmpresa'
import MasInfo from '../Components/PerfilEmpresa/MasInfo/MasInfo'
import Direccion from '../Components/PerfilEmpresa/Direccion/Direccion'
import Footer from '../Components/Footer/Footer';

const AcercaDe = () => {
    return (
        <div>
            <Navbar />
            <BannerEmpresa />
            <div className="container-fluid mt-5">
                <div className="row flex-sm-row">
            <NombreEmpresa />
            <LogoEmpresa />
            <MasInfo />
            <Direccion />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default AcercaDe