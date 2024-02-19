import './BannerEmpresa.css'
const BannerEmpresa = () => {
    return (
        <>
        <div className="banner-container-empresa">
            <img className="banner-image-empresa d-flex" src="images/bannerPEmpresas.png" alt="Banner Photo" />
            <div className="banner-text-container-empresa">
                <h1 className="banner-title-main-empresa">Perfil de Empresa</h1>
            </div>
        </div>
        </>
    );
};

export default BannerEmpresa;