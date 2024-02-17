import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BannerTalentos from '../Components/PerfilTalentos/BannerTalentos/BannerTalentos';
import CardTalentosCertificados from '../Components/PerfilTalentos/CardTalentosCertificados/CardTalentosCertificados';

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


        </div>
    </div>
      </div>
      </div>
      </div>
  )
}

export default PerfilTalentos
