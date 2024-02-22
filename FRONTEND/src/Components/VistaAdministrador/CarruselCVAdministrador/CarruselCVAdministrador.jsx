import { useEffect, useRef } from 'react';
import Flickity from 'flickity';

function CarruselCVAdministrador() {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity('.kathcarrusel', {
      wrapAround: true,
      autoPlay: true,
      imagesLoaded: true
    });

    return () => {
      flickityRef.current.destroy();
    };
  }, []);

  return (
    <>
        <h4 className="h3-carrusel text-center m-4" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Curriculums</h4>
        <div className="ContenedorCarrusel">
          <h1 className="w3-center"></h1>
          <div className="carousel kathcarrusel">
            <div className="carousel-cell">
              <li className="card carruselcard">
                <div className="img imgcarrusel"><img src="images/cv-admin.png" alt="img" draggable="false" width="60%" /></div>
                <h2>Nombre Talento</h2>
                <span>Curriculum</span>
                <button className="boton-tarjeta" style={{ backgroundColor: '#769E33' }}>Aprobar</button>
                <button className="boton-tarjeta m-3" style={{ backgroundColor: '#e33131' }}>Denegar</button>
              </li>
            </div>
            {/* Los otros elementos del carrusel */}
            <div className="carousel-cell">
        <li className="card carruselcard">
          <div className="img imgcarrusel"><img src="images/cv-admin.png" alt="img" draggable="false" width="60%" /></div>
          <h2>Nombre Talento</h2>
          <span>Curriculum</span>
          <button className="boton-tarjeta" style={{ backgroundColor: '#769E33'}}>Aprobar</button>
          <button className="boton-tarjeta m-3" style={{ backgroundColor: '#e33131'}}>Denegar</button>
        </li>
      </div>
      <div className="carousel-cell">
        <li className="card carruselcard">
          <div className="img imgcarrusel"><img src="images/cv-admin.png" alt="img" draggable="false"width="60%" /></div>
          <h2>Nombre Talento</h2>
          <span>Curriculum</span>
          <button className="boton-tarjeta" style={{ backgroundColor: '#769E33'}}>Aprobar</button>
          <button className="boton-tarjeta m-3" style={{ backgroundColor: '#e33131'}}>Denegar</button>
        </li>
      </div>
      <div className="carousel-cell">
        <li className="card carruselcard">
          <div className="img imgcarrusel"><img src="images/cv-admin.png" alt="img" draggable="false"width="60%" /></div>
          <h2>Nombre Talento</h2>
          <span>Curriculum</span>
          <button className="boton-tarjeta" style={{ backgroundColor: '#769E33'}}>Aprobar</button>
          <button className="boton-tarjeta m-3" style={{ backgroundColor: '#e33131'}}>Eliminar</button>
        </li>
      </div>
      <div className="carousel-cell">
        <li className="card carruselcard">
          <div className="img imgcarrusel"><img src="images/cv-admin.png" alt="img" draggable="false"width="60%" /></div>
          <h2>Nombre Talento</h2>
          <span>Curriculum</span>
          <button className="boton-tarjeta" style={{ backgroundColor: '#769E33'}}>Aprobar</button>
          <button className="boton-tarjeta m-3" style={{ backgroundColor: '#e33131'}}>Eliminar</button>
        </li>
      </div>
      <div className="carousel-cell">
        <li className="card carruselcard">
          <div className="img imgcarrusel"><img src="images/cv-admin.png" alt="img" draggable="false"width="60%" /></div>
          <h2>Nombre Talento</h2>
          <span>Curriculum</span>
          <button className="boton-tarjeta" style={{ backgroundColor: '#769E33'}}>Aprobar</button>
          <button className="boton-tarjeta m-3" style={{ backgroundColor: '#e33131'}}>Eliminar</button>
        </li>
      </div>
    </div>
    </div>
    </>
  );
}

export default CarruselCVAdministrador;

