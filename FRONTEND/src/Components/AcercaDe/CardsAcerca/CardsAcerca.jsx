import './CardsAcerca.css'
import PropTypes from 'prop-types';

const Card = ({ imgSrc, title, text }) => {
    return (
        <div className="card mb-2" style={{ width: '15rem', marginRight: '10px' }}>
            <img src={imgSrc} className="card-img-top" alt="Company Logo" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const CardsAcerca = () => {
    return (
        <div className="row">
            <div className="col-lg-12 mb-3" style={{ padding: '0', margin: '0' }}>
                <div className="d-flex flex-wrap flex-lg-row align-items-center justify-content-center overflow-auto" style={{ margin: '10px' }}>
                    {/* tarjeta1 */}
                    <Card imgSrc="images/lupaVector.png" title="Función de la app" text="Info" />
                    {/* tarjeta2 */}
                    <Card imgSrc="images/altavoz.png" title="Función de la app" text="Info" />
                    {/* tarjeta3 */}
                    <Card imgSrc="images/cvVectorHombre.png" title="Función de la app" text="Info" />
                    {/* tarjeta4 */}
                    <Card imgSrc="images/vinoculares.png" title="Función de la app" text="Info" />
                </div>
            </div>
        </div>
    );
};

export default CardsAcerca;