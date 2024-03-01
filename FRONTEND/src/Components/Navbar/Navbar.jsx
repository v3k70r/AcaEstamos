import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogueado, setUserLogueado] = useState({});
  const [userLocal, setUserLocal] = useState({});
  const user = {
    email: email,
    password: password,
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    }
  fetch({  // Misma ruta definida en backend 
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Cabecera que indica que el contenido es de tipo JSON
      },
      body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
    })
      .then((response) => response.json()) // Después de realizar la solicitud HTTP, el método .json() se utiliza para extraer y parsear la respuesta como JSON.
      .then((data) => {  
        // Si la solicitud es exitosa, actualiza el estado userLogueado con la respuesta del servidor y almacena el token JWT en el almacenamiento local.
        setEmail(""); // Se limpian los estados despues de enviar el formulario
        setPassword("");
        setUserLogueado(data); // actualiza el estado userLogueado
        const token = jwtDecode(JSON.stringify(data.token)); // Decodifica el token recibido del servidor
        console.log(token);
        localStorage.setItem("token", JSON.stringify(data.token)); // Almacena el token JWT en el almacenamiento local del navegador. Esto es común en la autenticación para mantener el estado de sesión del usuario incluso después de recargar la página.
      });

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUserLocal(JSON.parse(localStorage.getItem("user"))); //obtiene el valor almacenado en el almacenamiento local. Este valor generalmente es una cadena de texto, ya que el almacenamiento local solo puede almacenar cadenas. Luego, JSON.parse se utiliza para convertir esa cadena JSON en un objeto de JavaScript.
    }
  }, [userLogueado]);
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
          {localStorage.getItem("user") !== null ? 
              <><div>
                <p>Bienvenidx {userLocal.name} {userLocal.lastName}</p>
              </div>
              <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link">
                      <button type="button" className="btn custom-btn" style={{ backgroundColor: '#F6990E', color: 'white' }}  onClick={handleLogout}>
                        Cerrar Sesión
                      </button>
                    </Link>
                  </li>
                </ul></>
            
          :<>
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
            </>}
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