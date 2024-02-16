import React from 'react'

function BuscarEmpresas() {
  return (
    <>
      {/* barra de busqueda */}
      <div className="text-center m-5" style={{ backgroundColor: 'white' }}>
        <h4>Búsqueda de empresas asociadas</h4>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container justify-content-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>
      {/* barra de busqueda */}
    </>
  );
}

export default BuscarEmpresas