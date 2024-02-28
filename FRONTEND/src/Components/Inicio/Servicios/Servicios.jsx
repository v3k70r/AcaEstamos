

const Servicios = () => {
  return (
    <>
      {/* servicios */}
      <div className="row text-center m-5">
        <div className="col-lg-4">
          <h4 style={{ backgroundColor: "#E5ECF6", borderRadius: "20px", padding:"5px"}}>Completa tu perfil</h4>
          <p>Mientras más información proporcionas a tu perfil, mejor podemos conectarte con las oportunidades especiales
            para ti.</p>
        </div>
        <div className="col-lg-4">
          <h4 style={{ backgroundColor: "#E5ECF6", borderRadius: "20px", padding:"5px" }}>Busca talentos</h4>
          <p>Navega a través de nuestra base de datos de talentos enrolados en la plataforma. Utiliza nuestros filtros para personalizar tu búsqueda.</p>
        </div>
        <div className="col-lg-4">
          <h4 style={{ backgroundColor: "#E5ECF6", borderRadius: "20px", padding:"5px" }}>Consejos de empleabilidad</h4>
          <p>Tendrás amplia gama de consejos, recursos y herramientas. Desde cómo mejorar tu currículum hasta consejos para
            destacar en entrevistas.</p>
        </div>
      </div>
      {/* servicios */}
    </>
  );
};

export default Servicios;