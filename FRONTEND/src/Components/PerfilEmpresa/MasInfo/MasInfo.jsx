import './MasInfo.css'
const MasInfo = () => {
    return (
        <div className="container mt-3 mb-3">
        <div className="row flex-sm-row">
            <div className="col-sm-9 shadow mb-3" style={{ padding: '0', margin: '0px 0 0 0', borderRadius: '20px' }}>
                <h5 className="" style={{
                    backgroundColor: '#E5ECF6', margin: '0', padding: '20px',
                    borderTopLeftRadius: '20px', borderTopRightRadius: '20px'
                }}>Acerca de...</h5>
                <p style={{ margin: '0', padding: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam
                    optio quos, in quasi assumenda obcaecati necessitatibus! Harum facere asperiores reprehenderit dignissimos
                    ea! Alias suscipit fuga labore sequi velit totam?</p>
            </div>
            <div className="col-lg-3 mb-3 mx-auto">
                <div className="card h-100" style={{ borderRadius: '20px' }}>
                    <div className="card-body">
                        <h6 className="card-title">Dirección</h6>
                        <p className="card-text">Avenida Miraflores 9153, Renca, Santiago.</p>
                        {/* Agrega tu mapa aquí, puedes incrustar un mapa de Google u otro proveedor de mapas */}
                        <div id="map" style={{ height: '150px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default MasInfo;