import PropTypes from 'prop-types';
import './Banner.css'

function Banner({ imageUrl, headingText }) {
    return (
    <div className='container-fluid'>
            <div className="banner-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="banner-content">
                    <h1>{headingText}</h1>
                </div>
            </div>
        </div>
    );
}
Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    headingText: PropTypes.string.isRequired,
};

export default Banner;