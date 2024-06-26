import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import TituloH1 from '../Components/VistaDeEmpresas/TituloH1/TituloH1';
import CardEmpresa from '../Components/VistaDeEmpresas/CardEmpresa/CardEmpresa';
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";

function VistaDeEmpresas() {
  return (
    <div>
      <Navbar />
      <ProtoBanner imageUrl="images/bannerPEmpresas.png" 
            headingText="Empresas asociadas" />
      <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="container contenedorEmpresas"  style={{ backgroundColor: '#E5ECF6' }}>
        <TituloH1 />   
        <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
        <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
        <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
         <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
         <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
        <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
        <CardEmpresa 
        imagenEmpresa='public/images/empresasActivas/empresa1.png'
        nombreEmpresa='Coca cola'
        descripcionEmpresa='Coca cola es una compañia, blah, blah, blah....'
        />
      </div>
      </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}


export default VistaDeEmpresas;