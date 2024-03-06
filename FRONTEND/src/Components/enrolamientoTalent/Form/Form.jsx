import './Form.css'

function Form() {
    return (
        <>
            <div id="ContenedorForma" className="container-fluid row">
                <div className="col-10">
                <div className="row shadow contenedor-formulario-talento">
                    <div className="col-12">
                        <h3 className="text-center" id="infoPersonal">Información personal</h3>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres" />
                            <label className="form-label" htmlFor="nombres">
                                <p>Nombres</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="apellidos" placeholder="a" name="apellidos" />
                            <label className="form-label" htmlFor="apellidos">
                                <p>Apellidos</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" pattern="\d{1,2}\.\d{3}\.\d{3}-[\dkK]" id="rut"
                                placeholder="a" name="rut" />
                            <label className="form-label" htmlFor="rut">
                                <p>Rut</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <select className="form-select" aria-label="Default select example" id="estadoCivil" name="estadoCivil">
                                <option value="soltero/a" selected>Soltero/a</option>
                                <option value="casado/a">Casado/a</option>
                                <option value="viudo/a">Viudo/a</option>
                                <option value="separado/a">Separado/a</option>
                                <option value="divorciado/a">Divorciado/a</option>
                            </select>
                            <label className="form-label" htmlFor="estadoCivil">
                                <p>Estado civil</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="date" id="fechaNacimiento" placeholder="a" name="fechaNacimiento" />
                            <label className="form-label" htmlFor="fechaNacimiento">
                                <p>Fecha de nacimiento</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="number" id="edad" placeholder="4" name="edad" min="1" max="100" />
                            <label className="form-label" htmlFor="edad">
                                <p>Edad</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="tel" id="numeroContacto" placeholder="4" name="numeroContacto" />
                            <label className="form-label" htmlFor="numeroContacto">
                                <p>Número de contacto</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="email" id="email" placeholder="a" name="email" />
                            <label className="form-label" htmlFor="email">
                                <p>Correo electrónico</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="profesion" placeholder="o" name="profesion" />
                            <label className="form-label" htmlFor="profesion">
                                <p>Ingresa tu profesión u oficio</p>
                            </label>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="correoTalento" placeholder="o" name="mensaje"/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Correo electrócnico</p>
                    </label>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="password" id="contraseñaTalento" placeholder="o" name="mensaje"/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Contraseña</p>
                    </label>
                </div>
            </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center" id="textInteres">Elige tu área de interés</h3>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <select className="form-select form-select-lg mb-3" aria-label="Large select example" id="areaPrincipal" name="areaPrincipal">
                                    <option value="Educación" selected>Educación</option>
                                    <option value="Salud">Salud</option>
                                    <option value="Deporte">Deporte</option>
                                </select>
                                <label className="form-label" htmlFor="areaPrincipal">
                                    <p>Área de interés principal</p>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <select className="form-select form-select-lg mb-3" aria-label="Large select example" id="areaSecundaria" name="areaSecundaria">
                                    <option value="sinSeleccion" selected>Sin seleccionar</option>
                                    <option value="Educación">Educación</option>
                                    <option value="Salud">Salud</option>
                                    <option value="Deporte">Deporte</option>
                                </select>
                                <label className="form-label" htmlFor="areaSecundaria">
                                    <p>Área de interés opcional</p>
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <select className="form-select form-select-lg mb-3" aria-label="Large select example" id="areaTerciaria" name="areaTerciaria">
                                    <option value="sinSeleccion" selected>Sin seleccionar</option>
                                    <option value="Educación">Educación</option>
                                    <option value="Salud">Salud</option>
                                    <option value="Deporte">Deporte</option>
                                </select>
                                <label className="form-label" htmlFor="areaTerciaria">
                                    <p>Área de interés opcional</p>
                                </label>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Form;