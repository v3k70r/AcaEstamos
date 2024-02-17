import './Direccion.css'
const Direccion = () => {
    return (
        <div className="col-lg-3 mb-3">
            <div className="card h-100" style={{ borderRadius: '20px' }}>
                <div className="card-body">
                    <h6 className="card-title">Dirección</h6>
                    <p className="card-text">Avenida Miraflores 9153, Renca, Santiago.</p>
                    {/* Agrega tu mapa aquí, puedes incrustar un mapa de Google u otro proveedor de mapas */}
                    <div id="map" style={{ height: '150px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Direccion;