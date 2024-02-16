import React from 'react'

    function Navbar() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          {/* Container wrapper */}
          <div className="container">
            {/* Navbar brand */}
            <a className="navbar-brand me-2" href="#"><img src="images/logo-normal.png" height="48" alt="MDB Logo" loading="lazy"
              style={{ marginTop: '-1px' }} /></a>
    
            {/* Toggle button */}
            <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
    
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Empresas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Talentos</a>
                </li>
              </ul>
              {/* Left links */}
    
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-link px-3 me-2">Iniciar sesión <i
                  className="fa-solid fa-right-to-bracket"></i></button>
                <button type="button" className="btn btn-success me-3">Unirse <i className="fa-solid fa-pen-to-square"></i></button>
                <a className="navbar-brand me-2" href="https://www.renca.cl"><img src="images/logo-renca.png" height="48"
                  alt="MDB Logo" loading="lazy" style={{ marginTop: '-1px' }} /></a>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
      );
    }
export default Navbar