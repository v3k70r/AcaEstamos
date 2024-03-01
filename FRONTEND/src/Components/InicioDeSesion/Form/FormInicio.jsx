import React, { useState, useEffect } from 'react';
import './FormInicio.css';
import { jwtDecode } from "jwt-decode"

function FormInicio() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userLogueado, setUserLogueado] = useState({});
    const [userLocal, setUserLocal] = useState({});
         // Funciones para manejar cambios en los campos de entrada
    const handleEmail = (e) => { // El evento que escucha corresponde a la escritura en el input
        // e = evento // target = input // value = el valor del input del email
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {// Misma lógica
        // e = evento // target = input // value = el valor del input de la contraseña
        setPassword(e.target.value);
    };

    // Elimina la información del usuario almacenada en el almacenamiento local y recarga la página para simular un cierre de sesión.
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
        }
    
    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        if (!email || !password) {
        alert("Todos los campos son obligatorios");
        return;
        }
        // Construir un objeto de usuario con la información ingresada
        const user = {
        email: email,
        password: password,
        };
        // Limpiar los campos de entrada
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    
    // Realiza una solicitud POST al servidor con la información de inicio de sesión proporcionada por el usuario.
    // Es necesario instalar cors en nuestro backend que nos permite dar funcionalidad a nuestro proyecto en node para poder gestionar el tema de los permisos  
        fetch("http://localhost:8080/api/v1/login", {  // Misma ruta definida en backend 
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Cabecera que indica que el contenido es de tipo JSON
        },
        body: JSON.stringify(user), //convertir objeto en JS en una cadena de texto en formato json
        })
        .then((response) => response.json()) // Después de realizar la solicitud HTTP, el método .json() se utiliza para extraer y parsear la respuesta como JSON.
        .then((data) => {  
            // Si la solicitud es exitosa, actualiza el estado userLogueado con la respuesta del servidor y almacena el token JWT en el almacenamiento local.
            setEmail(""); // Se limpian los estados despues de enviar el formulario
            setPassword("");
            setUserLogueado(data); // actualiza el estado userLogueado
            const token = jwtDecode(JSON.stringify(data.token)); // Decodifica el token recibido del servidor
            console.log(token);
            localStorage.setItem("token", JSON.stringify(data.token)); // Almacena el token JWT en el almacenamiento local del navegador. Esto es común en la autenticación para mantener el estado de sesión del usuario incluso después de recargar la página.
            window.location.reload();
        });
    };

    // Recuerda: JSON.parse es una función en JavaScript que se utiliza para convertir una cadena JSON en un objeto JavaScript
    // Recuerda: JSON.stringify es un método en JavaScript que se utiliza para convertir un objeto JavaScript en una cadena JSON
    
    //Almacena la información del usuario en el almacenamiento local si el estado userLogueado tiene un status de 200.
    useEffect(() => {
        if (userLogueado.status === 200) { // Es necesario convertir a una cadena de texto JSON con stringify para ser almacenado en el local
        localStorage.setItem("user", JSON.stringify(userLogueado.data));
        }
    }, [userLogueado]);
    
    // Actualiza el estado userLocal con la información del usuario almacenada en el almacenamiento local.
    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
        setUserLocal(JSON.parse(localStorage.getItem("user"))); //obtiene el valor almacenado en el almacenamiento local. Este valor generalmente es una cadena de texto, ya que el almacenamiento local solo puede almacenar cadenas. Luego, JSON.parse se utiliza para convertir esa cadena JSON en un objeto de JavaScript.
        }
    }, [userLogueado]);

    useEffect(() => {
        // Validar el campo de correo electrónico
        if (email && !/\S+@\S+\.\S+/.test(email)) {
            console.log("Correo electrónico no válido");
        }
        // Validar el campo de contraseña (por ejemplo, requerir una longitud mínima)
        if (password && password.length < 6) {
            console.log("Contraseña debe tener al menos 6 caracteres");
        }
    }, [email, password]);

    const validarFormulario = () => {
        if (email && password) {
            // Aquí podrías enviar los datos del formulario o realizar alguna otra acción
            alert("Inicio de sesión exitoso");
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return (
        <main className="container m-5">
            <form id="LoginForm">
                <div className="container col-8 shadow" style={{ borderRadius: '20px' }}>
                    <div className="row justify-content-center">
                        <h4 className="text-center mb-4" style={{ backgroundColor: '#E5ECF6', margin: '0', padding: '20px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                            Ingresa tus datos para iniciar sesión
                        </h4>
                        <div className="col-9">
                            {/* Email input */}
                            <div id="ContenedorEmail" className="form-floating" htmlFor="email">
                                <input className="form-control" type="email" id="email" placeholder="a" style={{ backgroundColor: 'white', border: '1px solid grey' }} 
                                value={email} onChange={handleEmail} />
                                <label className="form-label" htmlFor="email"><p>Correo electrónico</p></label>
                            </div>

                            {/* Password input */}
                            <div id="ContenedorContraseña" className="form-floating">                                
                                <input htmlFor="password" className="form-control" type="password" id="password" placeholder="a" style={{ backgroundColor: 'white', border: '1px solid grey' }} 
                                value={password} onChange={handlePassword}/>
                                <label className="form-label" htmlFor="password"><p>Contraseña</p></label>
                            </div>

                            {/* Resto del formulario (checkbox, link, etc.) */}

                            {/* Submit button */}
                            <button type="button" className="btn btn-block mb-4 just text-white" style={{ backgroundColor: '#F6990E', width: '60%', marginLeft: 'auto', marginRight: 'auto' }} onClick={handleSubmit}>Ingresa</button>

                            {/* Register buttons */}
                            <div className="text-center">
                                <p className="mb-8">¿No tienes cuenta?<a href="#!"> Únete acá</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default FormInicio;