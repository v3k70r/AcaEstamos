import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BannerTalentos from '../Components/PerfilTalentos/BannerTalentos/BannerTalentos';
import CardTalentosCertificados from '../Components/PerfilTalentos/CardTalentosCertificados/CardTalentosCertificados';
import '../Components/PerfilTalentosEstilos/PerfilTalentos.css';
import CardTalentoInteres from '../Components/PerfilTalentos/CardTalentoInteres/CardTalentoInteres';
import CardTalentoFormacion from '../Components/PerfilTalentos/CardTalentosFormacion/CardTalentosFormacion';
import CardTalentosInfo from '../Components/PerfilTalentos/CardTalentosInfo/CardTalentosInfo';
import CarruselCardTalentos from '../Components/PerfilTalentos/CarruselCardTalentos/CarruselCardTalentos';
import ModalCV from '../Components/PerfilTalentos/ModalCV/ModalCV';
 


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
      link={ModalCV}
      />
      <CardTalentosCertificados 
      h6='Curriculum Vitae'
      parrafo='Bienvenido a "Ver CV": Detalles sobre habilidades y experiencia de nuestros talentosos miembros para empresas.'
      />
      <CardTalentosCertificados 
      h6='Certificados'
      parrafo='Certificados de Antecedentes al Instante: Una fuente confiable para evaluar la calidad de nuestros miembros de manera rápida.'
      />
      </div>
      </div>
      <div className="col-md-4 colmunaF1">
      <div className="contenedorF1 text-center ">
      <h4 className="titulosFilasTalentos">Me interesa: </h4>
      <CardTalentoInteres 
      interes1='Salud'
      interes2='Construcción'
      interes3='Informática'
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
      </div>
      </div>
      <div className="col-md-4 colmunaF1" >
      <div className="contenedorF1 text-center">
      <h4 className="titulosFilasTalentos">Información personal</h4>
      <CardTalentosInfo 
      icono='fa-user'
      datoInfo='Nombre talento'
      datoTalento='David Martinez'
      />
      <CardTalentosInfo 
      icono='fa-address-card'
      datoInfo='Rut'
      datoTalento='19.678.787-9'
      />
      <CardTalentosInfo 
      icono='fa-calendar'
      datoInfo='Fecha de nac'
      datoTalento='23/07/1995'
      />
      <CardTalentosInfo 
      icono='fa-user-group'
      datoInfo='Estado civil'
      datoTalento='Soltero'
      />
      <CardTalentosInfo 
      icono='fa-calendar'
      datoInfo='Edad'
      datoTalento='28 años'
      />
      <CardTalentosInfo 
      icono='fa-phone'
      datoInfo='Número de contacto'
      datoTalento='+56956754367'
      />
      <CardTalentosInfo 
      icono='fa-envelope'
      datoInfo='Correo electrónico'
      datoTalento='Examples01@gmai.com'
      />
      </div>
  </div>  
{/*DIV FINAL CONTAINER PT Y FILAS PT */}
  </div>
  </div>
  
  <h3 className="h3-carrusel text-center" style={{ color: '#424242' }}>perfiles relacionados</h3>
  <div className="ContenedorCarrusel">
  <h1 className="w3-center" ></h1>
  <div className="carousel kathcarrusel"  data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded":true }'>
<CarruselCardTalentos 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar1.png'
/>
<CarruselCardTalentos 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar2.png'
/>
<CarruselCardTalentos 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar3.png'
/>
<CarruselCardTalentos 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar4.png'
/>
<CarruselCardTalentos 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar5.png'
/>
<CarruselCardTalentos 
nombreCarrusel='Daniel Cansino'
interesCarrusel='Informática'
imagenCarrusel='public/images/Hombre_avatar6.png'
/>
  </div>
  </div>
  <Footer />
    </div>
      
  )
}

export default PerfilTalentos

