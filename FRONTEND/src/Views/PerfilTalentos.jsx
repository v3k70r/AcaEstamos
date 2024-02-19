import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
//import Footer from '../Components/Footer/Footer';
import BannerTalentos from '../Components/PerfilTalentos/BannerTalentos/BannerTalentos';
import CardTalentosCertificados from '../Components/PerfilTalentos/CardTalentosCertificados/CardTalentosCertificados';
import '../Components/PerfilTalentosEstilos/PerfilTalentos.css';
import CardTalentoInteres from '../Components/PerfilTalentos/CardTalentoInteres/CardTalentoInteres';
import CardTalentoFormacion from '../Components/PerfilTalentos/CardTalentosFormacion/CardTalentosFormacion.css';

function PerfilTalentos() {
  return (
    <div>
      <Navbar /> 
      <BannerTalentos />
      <div className="container columnasPT" style={{ marginBottom: '25px' }}>
      <div className="row filasPT"> 
      <div className="col-md-4 colmunaF1">
      <div className="contenedorF1 text-center">
      <h4 className="titulosFilasTalentos text-center">Acceso a certificados</h4>
      <CardTalentosCertificados 
      h6='Certificado de Antecedentes'
      parrafo='Certificados de Antecedentes al Instante: Una fuente confiable para evaluar la calidad de nuestros miembros de manera rápida.'
      />
      <CardTalentosCertificados 
      h6='Curriculum Vitae'
      parrafo='Bienvenido a "Ver CV": Detalles sobre habilidades y experiencia de nuestros talentosos miembros para empresas.'
      />
      <CardTalentosCertificados 
      h6='Certificados'
      parrafo='Certificados de Antecedentes al Instante: Una fuente confiable para evaluar la calidad de nuestros miembros de manera rápida.'
      />
      <div className="col-md-4 colmunaF1">
      <div className="contenedorF1 text-center"></div>
      <h4 className="titulosFilasTalentos">Me interesa: </h4>
      <CardTalentoInteres 
      interes1='Salud'
      interes2='Construccion'
      interes3='Informatica'
      />
      <h4 className="titulosFilasTalentos">Formación académica</h4>   
      <CardTalentoFormacion 
      institucion='Inacap'
      academicas='analista programador'
      fecha='dic 2000 - ene 2001'
      />
      <CardTalentoFormacion 
      institucion='Iplacex'
      academicas='Gastronomia'
      fecha='dic 2005 - ene 2007'
      />
      <div className="col-md-4 colmunaF1">
      <div className="contenedorF1 text-center"></div>
      <h4 className="titulosFilasTalentos">Información personal</h4>
      

      
      </div>
      </div>
      </div>
      </div>
        </div>
    </div>
      </div>
      
  )
}

export default PerfilTalentos
