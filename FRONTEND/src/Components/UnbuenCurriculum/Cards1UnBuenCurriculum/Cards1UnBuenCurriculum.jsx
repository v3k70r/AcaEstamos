import React from 'react'

function Cards1UnBuenCurriculum() {
  return (
    <>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/nofoto-unBuenCurriculum.jpg" id="img-curriculum" className="card-img-top img-fluid" style={{ maxWidth: '100%', height: 'auto' }} alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#F6990E', borderRadius: '5px' }}>No usar una foto</h5>
            <p className="card-text">No es necesario ni recomendable que coloques una foto de ti mismo en tu curriculum, debido a que poner una imagen puede llevar a situaciones de discriminación.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/actualizar-buenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Mantenlo actualizado</h5>
            <p className="card-text">Procura actualizarlo cada que tengas cambios nuevos, como una nuevo direccion de e-mail, estudios finalizados, experiencia laboral. Es recomendable manterlo actualizado.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/honesto-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#F6990E', borderRadius: '5px' }}>Sé honesto en tu CV</h5>
            <p className="card-text">Con el curriculum buscamos concretar una entrevista de trabajo, si estas exagerando en la información de tu CV podrías quedar al descubierto en la entrevista. Sé honesto, la honestidad es apreciada.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img id="img-curriculum" src="images/ordenCronologico-unBuenCurriculumm.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Usa el de orden cronológico inverso</h5>
            <p className="card-text">¿Qué significa esto?: Que tu información en tu CV sea a partir de tus trabajos más recientes o lo más actual al más antiguo.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards1UnBuenCurriculum
