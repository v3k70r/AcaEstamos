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
              <div data-mdb-input-init className="form-outline mb-4 mt-4">
                <input type="email" id="form2Example1" className="form-control"
                  style={{ backgroundColor: 'white', border: '1px solid grey' }} />
                <label className="form-label" htmlFor="form2Example1">Correo electrónico</label>
              </div>

              {/* Password input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control"
                  style={{ backgroundColor: 'white', border: '1px solid grey' }} />
                <label className="form-label" htmlFor="form2Example2">Contraseña</label>
              </div>

              {/* Repeat Password input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="form2Example3" className="form-control"
                  style={{ backgroundColor: 'white', border: '1px solid grey' }} />
                <label className="form-label" htmlFor="form2Example3">Confirmar contraseña</label>
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
