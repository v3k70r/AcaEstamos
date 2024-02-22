import PropTypes from 'prop-types';
const RelatedCompanyCard = ({ logoSrc, companyName, sector }) => {
    return (
        <div className="card mb-2" style={{ width: '15rem', marginRight: '10px' }}>
            <img src={logoSrc} className="card-img-top" alt={`${companyName} Logo`} />
            <div className="card-body">
                <h5 className="card-title">{companyName}</h5>
                <p className="card-text">Sector: {sector}</p>
            </div>
        </div>
    );
};
RelatedCompanyCard.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
};

const RelatedCompaniesSection = () => {
    return (
        <div className="row justify-content-center">
        <div className="col-lg-11 shadow-sm mb-3" style={{ padding: '0', margin: '10px', borderRadius: '20px' }}>
            <h5 className="p-3 mb-0" style={{ backgroundColor: '#E5ECF6', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>Empresas relacionadas</h5>
            <div className="d-flex flex-wrap justify-content-center p-4">
                {/* Empresa1 */}
                <RelatedCompanyCard logoSrc="images/examplelogo.png" companyName="Empresa 1" sector="Sector 1" />
                {/* Empresa2 */}
                <RelatedCompanyCard logoSrc="images/examplelogo.png" companyName="Empresa 2" sector="Sector 2" />
                {/* Empresa3 */}
                <RelatedCompanyCard logoSrc="images/examplelogo.png" companyName="Empresa 3" sector="Sector 3" />
                {/* Empresa4 */}
                <RelatedCompanyCard logoSrc="images/examplelogo.png" companyName="Empresa 4" sector="Sector 4" />
            </div>
        </div>
    </div>
);
};


export default RelatedCompaniesSection;