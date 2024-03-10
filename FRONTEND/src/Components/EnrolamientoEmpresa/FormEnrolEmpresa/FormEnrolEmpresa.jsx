import React from 'react';
import { useState } from 'react';
import './FormEnrolEmpresa.css'

function FormEnrolEmpresa() {
    const [nombreEmpresa, setNombreEmpresa] = useState(""); 
    const [rut, setRUT] = useState(""); 
    const [giro, setGiro] = useState(""); 
    const [cantidadEmpleados, setCantidadEmpleados] = useState(""); 
    const [calle, setCalle] = useState(""); 
    const [numeracion, setNumeracion] = useState(""); 
    const [comuna, setComuna] = useState(""); 
    const [region, setRegion] = useState(""); 
    const [numeroContacto, setNumeroContacto] = useState(""); 
    const [paginaWeb, setPaginaWeb] = useState(""); 
    const [mensaje, setMensajeTalentos] = useState(""); 
    const [acercaDe, setAcercaDe] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const handleCheckboxChange = (e) => {
        setAutorizado(e.target.checked);
      };
      const handleEmail = (e) => { // El evento que escucha corresponde a la escritura en el input
        // e = evento // target = input // value = el valor del input del nombre
        setEmail(e.target.value); // Se actualiza el estado name (setName) con el valor del nombre
      };
      const handlePassword = (e) => { // El evento que escucha corresponde a la escritura en el input
        // e = evento // target = input // value = el valor del input del nombre
        setPassword(e.target.value); // Se actualiza el estado name (setName) con el valor del nombre
      };
    const handleNombreEmpresa = (e) => { // El evento que escucha corresponde a la escritura en el input
        // e = evento // target = input // value = el valor del input del nombre
        setNombreEmpresa(e.target.value); // Se actualiza el estado name (setName) con el valor del nombre
      };
      const handleRUT = (e) => { 
        setRUT(e.target.value);
      };
      const handleGiro = (e) => { 
        setGiro(e.target.value);
      };
      const handleCantidadEmpleados = (e) => { 
        setCantidadEmpleados(e.target.value);
      };
      const handleCalle = (e) => { 
        setCalle(e.target.value);
      };
      const handleNumeracion = (e) => { 
        setNumeracion(e.target.value);
      };
      const handleComuna = (e) => { 
        setComuna(e.target.value);
      };
      const handleRegion = (e) => { 
        setRegion(e.target.value);
      };
      const handleNumeroContacto = (e) => { 
        setNumeroContacto(e.target.value);
      };
      const handlePaginaWeb = (e) => { 
        setPaginaWeb(e.target.value);
      };
      const handleMensajeTalentos = (e) => { 
        setMensajeTalentos(e.target.value);
      };
      const handleAcercaDe = (e) => { 
        setAcercaDe(e.target.value);
      };
      const handleSubmit = () => {
        if (!nombreEmpresa || !rut || !giro || !cantidadEmpleados || !calle || !numeracion || !comuna || !region || !numeroContacto || !paginaWeb || !mensaje || !email || !password || !acercaDe) { // Si nombre o apellido o email o password estan vacios, es decir, false (con la negación se vuelve true y entra al if) entonces exige que todos los campos son requeridos.
            alert("Todos los campos son obligatorios");
            return;
            }
          const empresa = {
            "email": email,
            "password": password,
            "nombre_empresa": nombreEmpresa,
            "rut": rut,
            "giro": giro,
            "cantidad_empleados": cantidadEmpleados,
            "calle": calle,
            "numeracion": numeracion,
            "comuna": comuna,
            "region": region,
            "numero_contacto": numeroContacto,
            "pagina_web": paginaWeb,
            "mensaje_talentos": mensaje,
            "acerca_de": acercaDe
          }
       // Limpiar los campos de entrada

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("nombreEmpresa").value = "";
        document.getElementById("giro").value = "";
        document.getElementById("rut").value = "";
        document.getElementById("cantidadEmpleados").value = "";
        document.getElementById("calle").value = "";
        document.getElementById("numeracion").value = "";
        document.getElementById("comuna").value = "";
        document.getElementById("region").value = "";
        document.getElementById("numeroContacto").value = "";
        document.getElementById("paginaWeb").value = "";
        document.getElementById("mensaje").value = "";
        document.getElementById("acercaDe").value = "";

        // Hacer una solicitud POST a la API para crear un nuevo usuario
        // Es necesario instalar cors en nuestro backend que nos permite dar funcionalidad a nuestro proyecto en node para poder gestionar el tema de los permisos
        fetch('http://localhost:8080/api/v1/crear-empresa', { // Misma ruta definida en backend 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Cabecera que indica que el contenido es de tipo JSON
            },
            body: JSON.stringify(empresa), //convertir objeto en JS en una cadena de texto en formato json
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            //localStorage.talento = JSON.stringify(talento);
            setNombreEmpresa("");
            setRut("");
            setGiro("");
            setCantidadEmpleados("");
            setCalle("");
            setNumeracion("");
            setComuna("");
            setRegion("");
            setNumeroContacto("");
            setPaginaWeb("");
            setMensaje("");
            setAcercaDe("");
            // Si la creación del usuario fue exitosa, establecer userCreate en true 
          if (data.status === 201){
            setUserCreate(true);
          }
          
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        if (autorizado) {
            window.location.href = '/InicioDeSesion';
n          } else {
            alert('Debes autorizar el uso de los datos para enrolarte.');
          }
    }

    const [autorizado, setAutorizado] = useState(false);

    return (
        <>

<div className="container-fluid formularioEnrol">

        <div className="row shadow" id="formulario">
            <div className="col-md-12">
                <h3 className="text-center" id="infoEmpresa">Información de la empresa</h3>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombreEmpresa" placeholder="a" name="nombre" onChange={handleNombreEmpresa}/>
                    <label className="form-label" htmlFor="nombre">
                        <p>Nombre de la empresa</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" pattern="\d{1,2}\.\d{3}\.\d{3}-[\dkK]" id="rut"
                        placeholder="a" name="rut" onChange={handleRUT}/>
                    <label className="form-label" htmlFor="rut">
                        <p>Rut de la empresa</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="giro" placeholder="a" name="rubro" onChange={handleGiro}/>
                    <label className="form-label" htmlFor="rubro">
                        <p>Giro o rubro</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="cantidadEmpleados" placeholder="4" name="cantidadEmpleados" min="1"
                        max="900.000" onChange={handleCantidadEmpleados}/>
                    <label className="form-label" htmlFor="cantidadEmpleados">
                        <p>Cantidad de empleados</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="calle" placeholder="a" name="nombreCalle" onChange={handleCalle}/>
                    <label className="form-label" htmlFor="nombreCalle">
                        <p>Nombre de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="numeracion" placeholder="4" name="numeracion" min="1" max="9.999" onChange={handleNumeracion}/>
                    <label className="form-label" htmlFor="numeracion">
                        <p>Número de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="comuna" placeholder="a" name="comuna" onChange={handleComuna}/>
                    <label className="form-label" htmlFor="comuna">
                        <p>Comuna</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="region" placeholder="a" name="region" onChange={handleRegion}/>
                    <label className="form-label" htmlFor="region">
                        <p>Región</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="tel" id="numeroContacto" placeholder="4" name="numeroContacto" onChange={handleNumeroContacto}/>
                    <label className="form-label" htmlFor="numeroContacto">
                        <p>Número de contacto</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="acercaDe" placeholder="a" name="acercaDe" onChange={handleAcercaDe}/>
                    <label className="form-label" htmlFor="acercaDe">
                        <p>Acerca de</p>
                    </label>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="url" id="paginaWeb" placeholder="a" name="paginaWeb" onChange={handlePaginaWeb}/>
                    <label className="form-label" htmlFor="paginaWeb">
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
                    <input className="form-control" type="text" id="mensaje" placeholder="o" name="mensaje" onChange={handleMensajeTalentos}/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Mensaje para los talentos</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="email" id="email" placeholder="o" name="email" onChange={handleEmail}/>
                    <label className="form-label" htmlFor="email">
                        <p>Correo electrócnico</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="password" id="password" placeholder="o" name="password" onChange={handlePassword}/>
                    <label className="form-label" htmlFor="password">
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
                <button className="button" onClick={handleSubmit}>
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