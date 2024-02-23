import React from 'react';

const Servicios = () => {
  return (
    <>
      {/* servicios */}
      <div className="row text-center m-5" style={{ backgroundColor: 'white' }}>
        <div className="col-lg-4">
          <h4>Completa tu perfil</h4>
          <p>Optimiza tu experiencia con nosotros completando tu perfil. Cuanta más información nos brindes, más precisamente podremos conectarte con oportunidades exclusivas diseñadas para ti.</p>
        </div>
        <div className="col-lg-4">
          <h4>Busca talentos</h4>
          <p>Explora nuestra extensa base de datos de talentos inscritos en la plataforma. Aprovecha nuestros filtros personalizables para afinar tu búsqueda según tus criterios específicos.</p>
        </div>
        <div className="col-lg-4">
          <h4>Consejos de empleabilidad</h4>
          <p>Descubre una amplia gama de consejos y recursos que te ofrecemos. Desde optimizar tu currículum hasta recibir orientación sobre cómo destacar en entrevistas.</p>
        </div>
      </div>
      {/* servicios */}
    </>
  );
};

export default Servicios;