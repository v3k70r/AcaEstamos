import './FormularioIngreso.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormularioIngresoUsuario() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleButtonClick = (role) => {
    setSelectedRole(role);

    if (role === 'talento') {
      navigate('/enrolamientoTalent');
    } else if (role === 'empresa') {
      navigate('/enrolamientoEmpresa');
    }
  };

  return (
    <main className="container" style={{ borderRadius: '20px' }}>
      <form id="LoginFormIngreso" style={{ borderRadius: '20px' }}>
        <div className="container col-md-9 shadow" style={{ borderRadius: '20px' }}>
          <div className="row justify-content-center">
            <h4 className="text-center mb-4" style={{ backgroundColor: '#E5ECF6', margin: '0', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              Selecciona tu tipo de usuario
            </h4>
            <div className="text-center">
            <p>¿Te registras como Talento o como Empresa?</p>
            </div>
            <div className="col-md-6 d-flex justify-content-around">
              {/* Botón Talento */}
              <button
                type="button"
                className={`botonTalento btn ${selectedRole === 'talento' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('talento')}
              >
                <i className="fa-solid fa-user-tie"></i>
                <h6 className="textoBotonTalento">Talento</h6>
              </button>

              {/* Botón Empresa */}
              <button
                type="button"
                className={`botonEmpresa btn ${selectedRole === 'empresa' ? 'selected' : ''}`}
                onClick={() => handleButtonClick('empresa')}
              >
                <i className="fa-solid fa-building"></i>
                <h6 className="textoBotonTalento">Empresa</h6>
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default FormularioIngresoUsuario;
