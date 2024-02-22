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
                    <input className="form-control" type="text" id="nombre" placeholder="a" name="nombre"/>
                    <label className="form-label" htmlFor="nombre">
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
                    <input className="form-control" type="text" id="rubro" placeholder="a" name="rubro"/>
                    <label className="form-label" htmlFor="rubro">
                        <p>Giro o rubro</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="cantidadEmpleados" placeholder="4" name="cantidadEmpleados" min="1"
                        max="900.000"/>
                    <label className="form-label" htmlFor="cantidadEmpleados">
                        <p>Cantidad de empleados</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="nombreCalle" placeholder="a" name="nombreCalle"/>
                    <label className="form-label" htmlFor="nombreCalle">
                        <p>Nombre de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="number" id="numeroCalle" placeholder="4" name="numeroCalle" min="1" max="9.999"/>
                    <label className="form-label" htmlFor="numeroCalle">
                        <p>Número de calle</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="comuna" placeholder="a" name="comuna"/>
                    <label className="form-label" htmlFor="comuna">
                        <p>Comuna</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="region" placeholder="a" name="region"/>
                    <label className="form-label" htmlFor="region">
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
                    <input className="form-control" type="url" id="URLweb" placeholder="a" name="URLweb"/>
                    <label className="form-label" htmlFor="URLweb">
                        <p>URL de página web</p>
                    </label>
                </div>
            </div>
            <div className="col-6 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="file" id="logo" placeholder="a" name="logo"/>
                    <label className="form-label" htmlFor="logo">
                        <p>INSERTAR LOGO</p>
                    </label>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="form-floating">
                    <input className="form-control" type="text" id="mensaje" placeholder="o" name="mensaje"/>
                    <label className="form-label" htmlFor="mensaje">
                        <p>Mensaje para los talentos</p>
                    </label>
                </div>
            </div>
            <div className="col-12 mb-3">
                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" id="acercaDe" rows="6" name='acercaDe'></textarea>
                        <label className="form-label" htmlFor="acercaDe">
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