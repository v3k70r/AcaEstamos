import './BannerEnrolEmpresa.css'

function BannerEnrolEmpresa({ imageUrl, headingText }) {
    return (
    <div className='container-fluid'>
            <div className="banner-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="banner-content">
                    <h1>{headingText}</h1>
                </div>
            </div>
        </div>
    );
};

export default BannerEnrolEmpresa;