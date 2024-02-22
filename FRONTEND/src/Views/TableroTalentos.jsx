/* eslint-disable no-unused-vars */
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BannerTableroTalentos from '../Components/TableroTalentos/BannerTableroTalentos/BannerTableroTalentos';
import CardTableroTalentos from '../Components/TableroTalentos/CardTableroTalentos/CardTableroTalentos';
import FormularioFiltro from '../Components/TableroTalentos/ContenedorFiltrar/FormularioFiltro';
import '../Components/TableroTalentosEstilos/TableroTalentosEstilos.css';



function TableroTalentos() {
  return (
    <div>
      <Navbar />
      <BannerTableroTalentos />
      <div className="container-fluid filtroTalento shadow" style={{ backgroundColor: '#E5ECF6' }}>
      <div className="row">
        <FormularioFiltro 
        interes1='Salud'
        interes2='Construcción'
        interes3='Informáfica'
        interes4='Educación'
        interes5='Medio ambiente'
        profesion1='Médico'
        profesion2='Ingeniero'
        profesion3='Arquitecto'
        profesion4='Abogado'
        profesion5='Profesor'
        oficio1='Carpintero'
        oficio2='Electricista'
        oficio3='Plomero'
        oficio4='Jardinero'
        oficio5='Fontanero'
        />
      </div>
      </div>
      <div className="col-md-12">
      <div className="row">
      <div className="col-md-12">
      <div className="container contenedorEmpresas shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
      <div style={{ backgroundColor: '#0492D0', marginBottom: '5%', borderRadius: '15px' }}>
      <h3 className="textoTalento2 text-center">Nuestros Talentos</h3>
      </div>
      <CardTableroTalentos 
      imagenTablero='public/images/Mujer_avatar1.png'
      nombreTalento='Susana Diaz'
      intereses='Salud, Medio ambiente'
      profesion='Médico'
      />
      <CardTableroTalentos 
      imagenTablero='public/images/Mujer_avatar2.png'
      nombreTalento='Carolina Suarez'
      intereses='Salud, Medio ambiente'
      profesion='Médico'
      />
      <CardTableroTalentos 
      imagenTablero='public/images/Mujer_avatar3.png'
      nombreTalento='Antonia Vargas'
      intereses='Informática'
      profesion='Ingeniero'
      />
      <CardTableroTalentos 
      imagenTablero='public/images/Hombre_avatar1.png'
      nombreTalento='Cristian Farrias'
      intereses='Informática'
      profesion='Ingeniero'
      />
      <CardTableroTalentos 
      imagenTablero='public/images/Hombre_avatar2.png'
      nombreTalento='Samuel Campos'
      intereses='Construccion'
      profesion='Arquitecto'
      />
      <CardTableroTalentos 
      imagenTablero='public/images/Hombre_avatar3.png'
      nombreTalento='Miguel Torres'
      intereses='Educación'
      profesion='Abogado'
      />
      </div>
      </div>
      </div>
      </div>
      <Footer />
      </div>
  );
}


export default TableroTalentos;