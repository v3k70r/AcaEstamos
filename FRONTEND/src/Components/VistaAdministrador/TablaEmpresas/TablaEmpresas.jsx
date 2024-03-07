import React, { useEffect, useState } from 'react';
import './TablaEmpresas.css';

const TablaEmpresas = () => {
    const [listar, setListar] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Número de usuarios por página

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/listar')
            .then(response => response.json())
            .then(data => setListar(data.data));
    }, []);

    // Calcula el índice del último y primer usuario en la página actual
    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;

    // Crea una nueva lista de usuarios basada en la página actual
    const currentUsers = listar.slice(indexOfFirstUser, indexOfLastUser);

    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="col-md-12">
            <div className="container-info">
      <h5 className="textoInfoAdd">
      Tabla empresas
      </h5> 
        <div className="container contenedorTalentos shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Menu de opciones</option>
                <option value="1">Empresas activas</option>
                <option value="2">Empresas inactivas</option>
                <option value="3">Todos</option>
            </select>

                    <div className="col-md-12">
                        <div className="container contenedorTalentos shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>ID</th>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Email</th>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Rol</th>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((usuario) => (
                                        <tr key={usuario._id}>
                                            <th scope="row">{usuario._id}</th>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.rol}</td>
                                            <td>
                                                <button className={`btn ${usuario.status === 'Activo' ? 'btn-danger' : 'btn-success'}`}>
                                                    {usuario.status}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan="5">
                                            <div className="d-flex justify-content-between">
                                                <button onClick={() => paginate(currentPage - 1)}
                                                    disabled={currentPage === 1} style={{ backgroundColor: '#F6990E', color: 'white'  }}
                                                    className="btn">
                                                    Anterior
                                                </button>
                                                <span>Página {currentPage}</span>
                                                <button onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === Math.ceil(listar.length / itemsPerPage)}
    style={{ backgroundColor: '#F6990E', color: 'white' }} className="btn">
    Siguiente
</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TablaEmpresas;