import React, { useEffect, useState } from 'react';
import './TablaEmpresas.css';

const TablaEmpresas = () => {
    const [listar, setListar] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeStatus, setActiveStatus] = useState([]);
    const itemsPerPage = 5; // Número de usuarios por página

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/listar-empresas')
            .then(response => response.json())
            .then(data => {
                setListar(data.data);
                setActiveStatus(new Array(data.data.length).fill(false));
            });
    }, []);

    const toggleActive = (index) => {
        const newActiveStatus = [...activeStatus];
        newActiveStatus[index] = !newActiveStatus[index];
        setActiveStatus(newActiveStatus);
    };

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;

    const currentUsers = listar.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="col-md-12">
                <div className="container contenedorTalentos shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
                    <h5>TABLA DE EMPRESAS</h5>
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
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Nombre de empresa</th>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Giro</th>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Rut</th>
                                        <th scope="col" style={{ backgroundColor: '#E5ECF6' }}>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((empresa, index) => {
                                        const isActive = activeStatus[index];

                                        return (
                                            <tr key={empresa._id}>
                                                <td>{empresa.nombre_empresa}</td>
                                                <td>{empresa.giro}</td>
                                                <td>{empresa.rut}</td>
                                                <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <button onClick={() => toggleActive(index)} className={`btn btn-sm ${isActive ? 'btn-success' : 'btn-danger'}`}>
                                                        {isActive ? 'Activo' : 'Inactivo'}
                                                    </button>
                                                    <button className="btn btn-sm btn-primary">Actualizar</button>
                                                    <button className="btn btn-sm btn-danger">Eliminar</button>
                                                    <button className="btn btn-sm btn-warning">Ver Empresa</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    <tr>
                                        <td colSpan="5">
                                            <div className="d-flex justify-content-between">
                                                <button onClick={() => paginate(currentPage - 1)}
                                                    disabled={currentPage === 1} style={{ backgroundColor: '#F6990E', color: 'white' }}
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
    );
}

export default TablaEmpresas;