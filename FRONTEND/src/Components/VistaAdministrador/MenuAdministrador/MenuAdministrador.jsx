import React from 'react'
import { useEffect, useState } from 'react'
import './MenuAdministrador.css';

const MenuAdministrador = () => {
  const [listar, setListar] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/listar')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        //debugger
        setListar(data.data)})
  }, [listar])

  return (
    <div>
      <div className="col-md-12">
        <div className="container contenedorTalentos shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
          <select className="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>Menu de opciones</option>
            <option value="1">Perfiles activos</option>
            <option value="2">Perfiles inactivos</option>
            <option value="3">Todos</option>
          </select>

          <div className="col-md-12">
            <div className="container contenedorTalentos shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Enumeración</th>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Email</th>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Rol</th>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {listar.map((usuario) => (
                    <tr key={usuario._id}>
                      <th scope="row">{usuario._id}</th>
                      <td>{usuario.email}</td>
                      <td>{usuario.status}</td>
                      <td>{usuario.rol}</td>
                      <td>
                        <button className={`boton-tarjeta boton-admin ${usuario.status === 'Activo' ? 'boton-activo' : 'boton-inactivo'}`}>
                          {usuario.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuAdministrador;

