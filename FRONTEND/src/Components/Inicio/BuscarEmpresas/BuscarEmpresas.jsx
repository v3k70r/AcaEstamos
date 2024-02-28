import './BuscarEmpresas.css'; 

function BuscarEmpresas() {
  return (
    <>
      {/* barra de busqueda */}
     
      <div className="text-center m-5" style={{ backgroundColor: "#E5ECF6", borderRadius: "20px" }}>
        <h4>Búsqueda de empresas asociadas</h4>
        {/* barra de busqueda */}
        <nav className="navbar bg-body-tertiary">
          <div className="container justify-content-center">
            <form className="d-flex card-busquedahome" role="search">
              <input className="form-control me-2 card-busquedahome" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" style={{ borderRadius: "20px" }} type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
        </nav>
      </div>  
    </>
  );
}

export default BuscarEmpresas