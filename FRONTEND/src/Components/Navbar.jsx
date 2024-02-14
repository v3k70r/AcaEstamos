import React from 'react'

function Navbar() {
  return (
    //Navbar 
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div class="container">
      {/* Navbar brand */}
      <a class="navbar-brand me-2" href="#"><img src="images/logo-normal.png" height="48" alt="MDB Logo" loading="lazy"
          style="margin-top: -1px;" /></a>

      {/* Toggle button */}
      <button data-mdb-collapse-init class="navbar-toggler" type="button" data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i> 
      </button>

      {/* Collapsible wrapper */}
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Empresas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Talentos</a>
          </li>
        </ul>
        {/* Left links */}

        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-link px-3 me-2">Iniciar sesión <i
              class="fa-solid fa-right-to-bracket"></i></button>
          <button type="button" class="btn btn-success me-3">Unirse <i class="fa-solid fa-pen-to-square"></i></button>
          <a class="navbar-brand me-2" href="https://www.renca.cl"><img src="images/logo-renca.png" height="48"
              alt="MDB Logo" loading="lazy" style="margin-top: -1px;" /></a>
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
    //Navbar 
  
  )
}

export default Navbar