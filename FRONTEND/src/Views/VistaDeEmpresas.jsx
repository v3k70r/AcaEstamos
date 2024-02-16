import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BannerEmpresa from '../Components/VistaDeEmpresas/BannerEmpresa/BannerEmpresa';
import TituloH1 from '../Components/VistaDeEmpresas/TituloH1/TituloH1';
import CardEmpresa from '../Components/VistaDeEmpresas/CardEmpresa/CardEmpresa';

function VistaDeEmpresas() {
  return (
    <div>
      <Navbar />
      <BannerEmpresa />
      <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="container contenedorEmpresas"  style={{ backgroundColor: '#E5ECF6' }}>
        <TituloH1 />   
        <CardEmpresa />
        <CardEmpresa />
        <CardEmpresa />
        <CardEmpresa />
        <CardEmpresa />
        <CardEmpresa />
      </div>
      </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}


export default VistaDeEmpresas;