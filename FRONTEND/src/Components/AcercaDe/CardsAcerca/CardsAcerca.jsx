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
        <div className="container-cardsacerca">
            <div className="row">
                <div className="col-lg-12 mb-3" style={{ padding: '0', margin: '0', }}>
                    <div className="d-flex flex-wrap flex-lg-row align-items-center justify-content-center overflow-auto" style={{ margin: '10px' }}>
                        {/* tarjeta1 */}
                        <Card imgSrc="images/cvVectorHombre.png" title="Registro" text="Puedes completar tu perfil profesional y subir tu CV a nuestra plataforma." />
                        {/* tarjeta2 */}
                        <Card imgSrc="images/lupaVector.png" title="Un buen CV" text="Lee nuestros consejos sobre la creación de CV para mejorar tus oportunidades." />
                        {/* tarjeta3 */}
                        <Card imgSrc="images/altavoz.png" title="Conexión" text="Conectaremos con empresas en Renca que estén buscando a alguien como tú." />
                        {/* tarjeta4 */}
                        <Card imgSrc="images/vinoculares.png" title="Buscar" text="Estaremos buscando nuevas empresas y talentos para impulsar el empleo local." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsAcerca;