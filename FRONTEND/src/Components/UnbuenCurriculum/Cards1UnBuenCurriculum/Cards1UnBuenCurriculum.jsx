import React from 'react'

function Cards1UnBuenCurriculum() {
  return (
    <>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/nofoto-unBuenCurriculum.jpg" id="img-curriculum" className="card-img-top img-fluid" style={{ maxWidth: '100%', height: 'auto' }} alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#F6990E', borderRadius: '5px' }}>No uses foto</h5>
            <p className="card-text">No es necesario ni recomendable que incluyas una foto tuya en tu currículum, ya que agregar una imagen podría dar lugar a situaciones de discriminación.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img src="images/actualizar-buenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Manténlo actualizado</h5>
            <p className="card-text">Procura actualizarlo cada vez que tengas cambios nuevos, como una nueva dirección de correo electrónico, estudios finalizados o experiencia laboral. Es recomendable mantenerlo actualizado.</p>
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
          <img id="img-curriculum" src="images/OrdenCronologicoInvertido-unBuenCurriculum.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ backgroundColor: '#E5ECF6', borderRadius: '5px' }}>Emplea el orden cronológico inverso</h5>
            <p className="card-text">¿Qué significa esto? Que la información en tu currículum debe organizarse comenzando por tus trabajos más recientes o lo más actual, y luego seguir hacia los más antiguos.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards1UnBuenCurriculum
