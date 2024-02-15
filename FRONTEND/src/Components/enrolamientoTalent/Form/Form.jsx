import './Form.css'

function Form() {
    return (
        <>
            <div className="container-fluid">
                <div className="row shadow" id="formulario">
                    <div className="col-12">
                        <h3 className="text-center" id="infoPersonal">Información personal</h3>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres"/>
                                <label className="form-label" htmlFor="nombres">
                                    <p>Nombres</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="apellidos" placeholder="a" name="apellidos"/>
                                <label className="form-label" htmlFor="apellidos">
                                    <p>Apellidos</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" pattern="\d{1,2}\.\d{3}\.\d{3}-[\dkK]" id="rut"
                                placeholder="a" name="rut"/>
                                <label className="form-label" htmlFor="rut">
                                    <p>Rut</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
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
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="date" id="fechaNacimiento" placeholder="a" name="fechaNacimiento"/>
                                <label className="form-label" htmlFor="fechaNacimiento">
                                    <p>Fecha de nacimiento</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="number" id="edad" placeholder="4" name="edad" min="1" max="100"/>
                                <label className="form-label" htmlFor="edad">
                                    <p>Edad</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="tel" id="numeroContacto" placeholder="4" name="numeroContacto"/>
                                <label className="form-label" htmlFor="numeroContacto">
                                    <p>Número de contacto</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="email" id="email" placeholder="a" name="email"/>
                                <label className="form-label" htmlFor="email">
                                    <p>Correo electrónico</p>
                                </label>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="form-floating">
                            <input className="form-control" type="text" id="profesion" placeholder="o" name="profesion"/>
                                <label className="form-label" htmlFor="profesion">
                                    <p>Ingresa tu profesión u oficio</p>
                                </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center" id="textInteres">Elige tu área de interés</h3>
                        </div>
                        <div className="col-12">
                            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                <option selected>Elige tu área de interés principal</option>
                                <option value="1">Educación</option>
                                <option value="2">Salud</option>
                                <option value="3">Deporte</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                <option selected>Elige tu área de interés opcional</option>
                                <option value="1">Educación</option>
                                <option value="2">Salud</option>
                                <option value="3">Deporte</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                <option selected>Elige tu área de interés opcional</option>
                                <option value="1">Educación</option>
                                <option value="2">Salud</option>
                                <option value="3">Deporte</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;