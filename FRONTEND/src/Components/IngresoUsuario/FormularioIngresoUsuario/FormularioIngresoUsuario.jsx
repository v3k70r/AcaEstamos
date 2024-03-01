import './FormularioIngreso.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function FormularioIngresoUsuario() {
    // Obtén la función de navegación proporcionada por react-router-dom  
    const navigate = useNavigate();
    // Estado local para el nombre, apellido, correo electrónico, contraseña para indicar si el usuario fue creado
    const [name, setName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userCreate, setUserCreate] = useState(false);
  
    // Funciones para manejar cambios en los campos de entrada
    const handleName = (e) => { // El evento que escucha corresponde a la escritura en el input
      // e = evento // target = input // value = el valor del input del nombre
      setName(e.target.value); // Se actualiza el estado name (setName) con el valor del nombre
    };
  
    const handleLastname = (e) => { // Misma lógica
      // e = evento // target = input // value = el valor del input del apellido
      setLastName(e.target.value);
    };
  
    const handleEmail = (e) => {
      // e = evento // target = input // value = el valor del input del email
      setEmail(e.target.value);
    };
  
    const handlePassword = (e) => {
      // e = evento // target = input // value = el valor del input de la contraseña
      setPassword(e.target.value);
    };
  
    // Función para manejar el envío del formulario
    const handleSubmit = () => {
      if (!email || !password) { // Si nombre o apellido o email o password estan vacios, es decir, false (con la negación se vuelve true y entra al if) entonces exige que todos los campos son requeridos.
          alert("Todos los campos son obligatorios");
          return;
          }
        // Construir un objeto de usuario con la información ingresada
        const user = {
            "name": name,
            "lastName": lastName,
            "email": email,
            "password": password
        }
        // Limpiar los campos de entrada

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
  
        // Hacer una solicitud POST a la API para crear un nuevo usuario
        // Es necesario instalar cors en nuestro backend que nos permite dar funcionalidad a nuestro proyecto en node para poder gestionar el tema de los permisos
        fetch('http://localhost:8080/api/v1/crear', { // Misma ruta definida en backend 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Cabecera que indica que el contenido es de tipo JSON
            },
            body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.user = JSON.stringify(user);
            setName("");
            setLastName("");
            setEmail("");
            setPassword("");
          // Si la creación del usuario fue exitosa, establecer userCreate en true 
          if (data.status === 201){
            setUserCreate(true);
          }
          
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  
    // Efecto secundario que se ejecuta cuando userCreate cambia
    useEffect(() => {
        if(userCreate){

          if(document.getElementById("empresa").checked)
            navigate('/enrolamientoEmpresa')
          else if(document.getElementById("talento").checked)
            navigate('/enrolamientoTalent')
        }
    },[navigate, userCreate])
  
  return (

    <main className="container m-5" style={{ borderRadius: '20px' }}>
      <form id="LoginFormIngreso" style={{ borderRadius: '20px' }}>
        <div className="container col-9 shadow" style={{ borderRadius: '20px' }}>
          <div className="row justify-content-center">
            <h4 className="text-center mb-4" style={{ backgroundColor: '#E5ECF6', margin: '0', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              Ingresa tus datos para registrar usuario
            </h4>
            <div className="col-9">
              
              {/* Email input */}
              <div id="containerEmail" className="form-floating">
                <input className="form-control" type="email" id="email" placeholder="a" name="email" onChange={handleEmail}/>
                <label className="form-label" htmlFor="email" >
                  <p>Correo electrónico</p>
                </label>
              </div>
              {/* Password input */}
              <div id="containerContraseña" className="form-floating">
                <input className="form-control" type="password" id="password" 
                placeholder="a" name="contraseña" onChange={handlePassword}/>
                <label className="form-label" htmlFor="password">
                  <p>Contraseña</p>
                </label>
              </div>
              {/* Repeat Password input */}
              <div id="containerRepetir" className="form-floating">
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
                    <input type="radio" name="typeUsuario" value="Empresa" id="empresa"/> Empresa
                  </label>
                </div>
                <div className="col-xs-2 m-2">
                  <label className="radio-inline">
                    <input type="radio" name="typeUsuario" value="Talento" id = "talento"/> Talento
                  </label>
                </div>
              </div>

              {/* 2 column grid layout for inline styling */}
              <div className="row mb-6">
                <div className="col d-flex justify-content-center">
                  {/* Submit button */}
                  <button data-mdb-ripple-init type="button" className="btn btn-primary btn-lg mb-1 mt-3"
                    style={{ backgroundColor: '#F6990E', width: '60%', marginLeft: 'auto', marginRight: 'auto' }}
                    onClick={handleSubmit}>Registrar</button>
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
