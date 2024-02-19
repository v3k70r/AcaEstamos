import './TarjetaInfoEmpresa.css'
const TarjetaInfoEmpresa = () => {
    return (
        <div className="col-lg-11 mb-3 mx-auto">
        <div className="card h-100" style={{ borderRadius: '20px' }}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Rut:</strong> 98764537-k</li>
                            <li className="list-group-item"><strong>Giro o rubro:</strong> Alimentación</li>
                            <li className="list-group-item"><strong>Cantidad de empleados:</strong> 1919</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Teléfono:</strong> 223641798</li>
                            <li className="list-group-item"><strong>Correo:</strong> ejemplo@gmail.com</li>
                            <li className="list-group-item"><strong>Sitio web:</strong> <a href="#"
                                target="_blank">www.example.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TarjetaInfoEmpresa;