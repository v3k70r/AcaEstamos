import React from 'react'
const url = 'http://localhost:8080/api/v1/listar'
import './MenuAdministrador.css';


function MenuAdministrador() {
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
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Perfiles</th>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Nombre</th>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Apellido paterno</th>
                    <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><button className="boton-tarjeta boton-admin" style={{ backgroundColor: '#769E33' }}>Activo</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thor</td>
                    <td><button className="boton-tarjeta boton-admin" style={{ backgroundColor: '#769E33' }}>Activo</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td><button className="boton-tarjeta boton-admin" style={{ backgroundColor: '#e33131' }}>Inactivo</button></td>
                  </tr>
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

