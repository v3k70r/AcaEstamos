import './NombreEmpresa.css'
const NombreEmpresa = () => {
    return (
            <div className="container mt-3 mx-auto">
                <div className="row flex-sm-row">
                    <div className="col-lg-9 shadow mt-3" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
                        <h3 className="text-center mt-5" id="empresaName">Nombre de la empresa</h3>
                        <p className="text-center">Mensaje de la empresa hacia los talentos</p>
                    </div>
                    {/* Tarjeta de logo */}
                    <div className="col-lg-3 mt-3">
                        <div className="card">
                            <img src="images/logouniversal.png" className="card-img-top" alt="Logo de Empresa" style={{ borderRadius: '20px' }} />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default NombreEmpresa;