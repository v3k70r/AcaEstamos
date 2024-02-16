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
                        <div className="col-9">
                            {/* Email input */}
                            <div className="form-outline mb-4 mt-4">
                                <input type="email" id="form2Example1" className="form-control" style={{ backgroundColor: 'white', border: '1px solid grey' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label className="form-label" htmlFor="form2Example1">Correo electrónico</label>
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input type="password" id="form2Example2" className="form-control" style={{ backgroundColor: 'white', border: '1px solid grey' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" htmlFor="form2Example2">Contraseña</label>
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