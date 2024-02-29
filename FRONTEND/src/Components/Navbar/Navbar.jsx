import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
      {/* Container wrapper */}
      <div className="container">
        {/* Navbar brand */}
        <Link to="/" className="navbar-brand me-2">
          <img src="images/logo-normal.png" height="48" alt="MDB Logo" loading="lazy" style={{ marginTop: '-1px' }} />
        </Link>

        {/* Toggle button */}
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/AcercaDe" className="nav-link">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/VistaDeEmpresas" className="nav-link">
                Empresas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/TableroTalentos" className="nav-link">
                Talentos
              </Link>
            </li>
          </ul>
          {/* Left links */}

          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/inicioDeSesion" className="nav-link">
                  <button type="button" className="btn custom-btn" style={{ backgroundColor: '#F6990E', color: 'white' }}>
                    Iniciar Sesión
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ingresoUsuario" className="nav-link">
                  <button type="button" className="btn custom-btn" style={{ backgroundColor: '#769E33', color: 'white' }}>
                    Unirse
                  </button>
                </Link>
              </li>
            </ul>
            <Link to="https://www.renca.cl" className="navbar-brand me-2">
              <img src="images/logo-renca.png" height="48" alt="MDB Logo" loading="lazy" style={{ marginTop: '-1px' }} />
            </Link>
          </div>
        </div>
        {/* Collapsible wrapper */}
      </div>
      {/* Container wrapper */}
    </nav>
  );
}

export default Navbar;