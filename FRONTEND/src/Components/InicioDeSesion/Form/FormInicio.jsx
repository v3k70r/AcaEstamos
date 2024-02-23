import { useState, useEffect } from 'react';
import './FormInicio.css';

function FormInicio() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                            <div id="ContenedorEmail" className="form-floating">
                                <input className="form-control" type="email" id="email" placeholder="a" style={{ backgroundColor: 'white', border: '1px solid grey' }} 
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label className="form-label" htmlFor="email"><p>Correo electrónico</p></label>
                            </div>

                            {/* Password input */}
                            <div id="ContenedorContraseña" className="form-floating">                                
                                <input className="form-control" type="password" id="contraseña" placeholder="a" style={{ backgroundColor: 'white', border: '1px solid grey' }} 
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <label className="form-label" htmlFor="contraseña"><p>Contraseña</p></label>
                            </div>

                            {/* Resto del formulario (checkbox, link, etc.) */}

                            {/* Submit button */}
                            <button type="button" className="btn btn-block mb-4 just text-white" style={{ backgroundColor: '#F6990E', width: '60%', marginLeft: 'auto', marginRight: 'auto' }} onClick={validarFormulario}>Ingresa</button>

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