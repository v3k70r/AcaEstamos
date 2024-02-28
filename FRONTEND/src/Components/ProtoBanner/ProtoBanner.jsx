import './ProtoBanner.css';

function ProtoBanner({ imageUrl, headingText, subheadingText }) {
    return (
        
            <div className="banner-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="banner-content">
                    <h1 className="large-heading">{headingText}</h1>
                    <div className="subheading-container">
                        <h3>{subheadingText}</h3>
                    </div>
                </div>
            </div>
       
    );
};

export default ProtoBanner;