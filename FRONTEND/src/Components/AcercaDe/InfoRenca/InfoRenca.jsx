import './InfoRenca.css'

const InfoRenca = () => {
    return (
        <div id="cartasInfo" className="container-fluid" style={{ marginTop: '45px', marginBottom: '45px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-5 text-center" style={{ backgroundColor: '#0492d0', borderRadius: '20px' }}>
                    <h3>Información sobre empleabilidad en Renca</h3>
                </div>
                <div className="col-lg-5 text-center" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti magni in aut repellendus debitis
                        dignissimos reprehenderit obcaecati nesciunt, modi vitae sequi, doloremque ipsam fugiat minima ratione
                        provident ab ipsum quos.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-5 text-center" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti magni in aut repellendus debitis
                        dignissimos reprehenderit obcaecati nesciunt, modi vitae sequi, doloremque ipsam fugiat minima ratione
                        provident ab ipsum quos.
                    </p>
                </div>
                <div className="col-lg-5 text-center" style={{ backgroundColor: '#0492d0', borderRadius: '20px' }}>
                    <h3>Información sobre empleabilidad en Renca</h3>
                </div>
            </div>
            <hr className="hr hr-blurry" />
        </div>
        
    );
};

export default InfoRenca;