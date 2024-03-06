import React from 'react';
import { useState } from 'react';
import './FormEnrolEmpresa.css'


function FormEnrolEmpresa() {
    const [autorizado, setAutorizado] = useState(false);
  
    const handleCheckboxChange = (e) => {
      setAutorizado(e.target.checked);
    };
  
    const handleEnrolButtonClick = () => {
      if (autorizado) {
        window.location.href = '/PerfilEmpresa';
      } else {
        alert('Debes autorizar el uso de los datos para enrolarte.');
      }
    };
    return (
        <>

<div className="container-fluid formularioEnrol">

        <div className="row shadow" id="formulario">
            <div className="col-md-12">
                <h3 className="text-center" id="infoEmpresa">Información de la empresa</h3>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombre" placeholder="a" name="nombre"/>
                    <label className="form-label" htmlFor="nombre">
                        <p>Nombre de la empresa</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" pattern="\d{1,2}\.\d{3}\.\d{3}-[\dkK]" id="rut"
                        placeholder="a" name="rut"/>
                    <label className="form-label" htmlFor="rut">
                        <p>Rut de la empresa</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="rubro" placeholder="a" name="rubro"/>
                    <label className="form-label" htmlFor="rubro">
                        <p>Giro o rubro</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="cantidadEmpleados" placeholder="4" name="cantidadEmpleados" min="1"
                        max="900.000"/>
                    <label className="form-label" htmlFor="cantidadEmpleados">
                        <p>Cantidad de empleados</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombreCalle" placeholder="a" name="nombreCalle"/>
                    <label className="form-label" htmlFor="nombreCalle">
                        <p>Nombre de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="numeroCalle" placeholder="4" name="numeroCalle" min="1" max="9.999"/>
                    <label className="form-label" htmlFor="numeroCalle">
                        <p>Número de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="comuna" placeholder="a" name="comuna"/>
                    <label className="form-label" htmlFor="comuna">
                        <p>Comuna</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="region" placeholder="a" name="region"/>
                    <label className="form-label" htmlFor="region">
                        <p>Región</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="tel" id="numeroContacto" placeholder="4" name="numeroContacto"/>
                    <label className="form-label" htmlFor="numeroContacto">
                        <p>Número de contacto</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="email" id="email" placeholder="a" name="email"/>
                    <label className="form-label" htmlFor="email">
                        <p>Acerca de</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="url" id="URLweb" placeholder="a" name="URLweb"/>
                    <label className="form-label" htmlFor="URLweb">
                        <p>URL de página web</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="file" id="logo" placeholder="a" name="logo"/>
                    <label className="form-label" htmlFor="logo">
                        <p>Insertar logo</p>
                    </label>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="mensaje" placeholder="o" name="mensaje"/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Mensaje para los talentos</p>
                    </label>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="mensaje" placeholder="o" name="mensaje"/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Correo electrócnico</p>
                    </label>
                </div>
            </div>
            <div className="col-md-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="password" id="mensaje" placeholder="o" name="mensaje"/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Contraseña</p>
                    </label>
                </div>
            </div>
        </div>
        <div className="div-check">
    <div className="checkbox">
  <input id="form-checkbox-1" name="checkbox" type="checkbox" onChange={handleCheckboxChange} />
  <label htmlFor="form-checkbox-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200">
                <mask fill="white" id="checkbox-mask"><rect height="200" width="200"></rect></mask>
                <rect mask="url(#checkbox-mask)" strokeWidth="40" height="200" width="200"></rect>
                <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64"></path>
            </svg>
            <span> Autorizo el uso de los datos de la empresa</span>
        </label>
    </div>
    </div>
    <div className="row col-6 text-center">
                <button className="button" onClick={handleEnrolButtonClick}>
                    Enrólate
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                        <path
                            clipRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
    </div>
    

    </>
    );
}

export default FormEnrolEmpresa;