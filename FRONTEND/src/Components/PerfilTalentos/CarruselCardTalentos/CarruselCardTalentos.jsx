import './CarruselCardTalentos.css';


function CarruselCardTalentos(props) {
    // eslint-disable-next-line react/prop-types
    const {nombreCarrusel, interesCarrusel, imagenCarrusel} = props
  return (
    <div className="carousel-cell">
      <div className="card carruselcard">
      <div className="img imgcarrusel"><img src={imagenCarrusel} alt="img" draggable="false" width="60%" /></div>
        <h2>{nombreCarrusel}</h2>
        <span>{interesCarrusel}</span>
        <button className="boton-tarjeta">Ver Talento</button>
      </div>
    </div>
  );
}

export default  CarruselCardTalentos;
