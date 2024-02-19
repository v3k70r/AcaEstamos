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
            <p className="card-text">En la mayoría de empresas, al momento de ver CVs, lo mejor que puedes hacer es tenerlo en formato PDF. Si lo tienes en otro formato como Word, lo recomendable es que lo conviertas a PDF.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/enfoca-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Enfoca tu curriculum</h5>
            <p className="card-text">Recuerda enfocar tu CV al área en la que estás postulando. No agregues información innecesaria. Por ejemplo, si postulas a un puesto de informático pero también tienes experiencia en pastelería, no es necesario agregarla.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/ortografia-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#F6990E', borderRadius: '5px' }}>Cuida la ortografía</h5>
            <p className="card-text">Es súper importante estar siempre al pendiente de la ortografía de tu CV. Tener mala ortografía podría causar una mala primera impresión al reclutador.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/destacar-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Destaca tus puntos fuertes</h5>
            <p className="card-text">Si no tienes experiencia, no dudes en incluir secciones en las que puedas demostrar que dominas aspectos como algún idioma, cursos formativos o similares que tengan relación con el puesto.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards2UnBuenCurriculum
