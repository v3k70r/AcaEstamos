import React from 'react'

function FormularioIngresoUsuario() {
  return (

    <main className="container m-5" style={{ borderRadius: '20px' }}>
      <form id="LoginForm" style={{ borderRadius: '20px' }}>
        <div className="container col-9 shadow" style={{ borderRadius: '20px' }}>
          <div className="row justify-content-center">
            <h4 className="text-center mb-4" style={{ backgroundColor: '#E5ECF6', margin: '0', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              Ingresa tus datos para registrar usuario
            </h4>
            <div className="col-9">
              
              {/* Email input */}
              <div className="form-floating">
                <input className="form-control" type="email" id="email" placeholder="a" name="email"/>
                <label className="form-label" htmlFor="email">
                  <p>Correo electrónico</p>
                </label>
              </div>
              {/* Password input */}
              <div className="form-floating">
                <input className="form-control" type="password" id="contraseña" 
                placeholder="a" name="contraseña"/>
                <label className="form-label" htmlFor="contraseña">
                  <p>Contraseña</p>
                </label>
              </div>
              {/* Repeat Password input */}
              <div className="form-floating">
                <input className="form-control" type="password" id="confirmarContraseña" 
                placeholder="a" name="confirmarContraseña"/>
                <label className="form-label" htmlFor="confirmarContraseña">
                  <p>Confirmar contraseña</p>
                </label>
              </div>

              <div className="form-group">
                <label className="control-label col-xs-3 m-1">Te registras como:</label>
                <div className="col-xs-2 m-2">
                  <label className="radio-inline">
                    <input type="radio" name="typeUsuario" value="Empresa" /> Empresa
                  </label>
                </div>
                <div className="col-xs-2 m-2">
                  <label className="radio-inline">
                    <input type="radio" name="typeUsuario" value="Talento" /> Talento
                  </label>
                </div>
              </div>

              {/* 2 column grid layout for inline styling */}
              <div className="row mb-6">
                <div className="col d-flex justify-content-center">
                  {/* Submit button */}
                  <button data-mdb-ripple-init type="button" className="btn btn-primary btn-lg mb-1 mt-3"
                    style={{ backgroundColor: '#F6990E', width: '60%', marginLeft: 'auto', marginRight: 'auto' }}
                    onClick="">Registrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}


export default FormularioIngresoUsuario
