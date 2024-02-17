import './NombreEmpresa.css'
const NombreEmpresa = () => {
    return (
        <div className="col-lg-9 mb-3 shadow" style={{ backgroundColor: '#E5ECF6', borderRadius: '20px' }}>
            <h3 className="text-center mt-5" id="empresaName">Nombre de la empresa</h3>
            <p className="text-center"> Mensaje de la empresa hacia los talentos </p>
        </div>
    );
};

export default NombreEmpresa;