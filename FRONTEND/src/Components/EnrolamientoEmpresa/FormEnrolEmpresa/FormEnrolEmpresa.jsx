import './FormEnrolEmpresa.css'

function FormEnrolEmpresa() {
    return (
        <>
<div className="container-fluid">
        <div className="row shadow" id="formulario">
            <div className="col-12">
                <h3 className="text-center" id="infoEmpresa">Información de la empresa</h3>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>Nombre de la empresa</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" pattern="\d{1,2}\.\d{3}\.\d{3}-[\dkK]" id="rut"
                        placeholder="a" name="rut"/>
                    <label className="form-label" htmlFor="rut">
                        <p>Rut de la empresa</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>Giro o rubro</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="edad" placeholder="4" name="edad" min="1"
                        max="900.000"/>
                    <label className="form-label" htmlFor="edad">
                        <p>Cantidad de empleados</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>Nombre de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="edad" placeholder="4" name="edad" min="1" max="9.999"/>
                    <label className="form-label" htmlFor="edad">
                        <p>Número de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>Comuna</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>Región</p>
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
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="url" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>URL de página web</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="file" id="nombres" placeholder="a" name="nombres"/>
                    <label className="form-label" htmlFor="nombres">
                        <p>INSERTAR LOGO</p>
                    </label>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="profesion" placeholder="o" name="profesion"/>
                    <label className="form-label" htmlFor="profesion">
                        <p>Mensaje para los talentos</p>
                    </label>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                        <label className="form-label" htmlFor="exampleFormControlTextarea1">
                            <p>Acerca de</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default FormEnrolEmpresa;