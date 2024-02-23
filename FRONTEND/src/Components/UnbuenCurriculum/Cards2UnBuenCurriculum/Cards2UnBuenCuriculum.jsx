import React from 'react'

function Cards2UnBuenCurriculum() {
  return (
    <>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/escogerpfd-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#F6990E', borderRadius: '5px' }}>Guárdalo en formato PDF</h5>
            <p className="card-text">En la mayoría de las empresas, al revisar currículos, lo óptimo es tenerlo en formato PDF. En caso de que lo tengas en otro formato, como Word, se recomienda convertirlo a PDF.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/enfoca-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Enfoca tu currículum</h5>
            <p className="card-text">Recuerda adaptar tu CV al área a la que estás postulando. Evita agregar información innecesaria; por ejemplo, si estás aplicando para un puesto de informático y también tienes experiencia en pastelería, no es necesario incluirla.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/ortografia-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#F6990E', borderRadius: '5px' }}>Cuida la ortografía</h5>
            <p className="card-text">Es crucial estar siempre atento a la ortografía de tu currículum. Un mal uso del lenguaje podría generar una impresión negativa en el reclutador desde el principio.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/destacar-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Destaca tus puntos fuertes</h5>
            <p className="card-text">Si careces de experiencia laboral, no dudes en incluir secciones donde puedas demostrar tu dominio en aspectos como algún idioma, cursos formativos u otros elementos relacionados con el puesto.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards2UnBuenCurriculum
