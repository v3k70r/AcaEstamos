import './BannerAcerca.css'
const BannerAcerca = () => {
  return (
    <header>
      <div className="banner-container-acerca">
        <img className="banner-image-acerca d-flex" src="images/bannerAcerca.png" alt="Banner Photo" loading="lazy" />
        <div className="banner-text-container-acerca">
          <h1 className="banner-title-main-acerca">Acerca de</h1>
          <h1 className="banner-title-sub-acerca">Acá estamos</h1>
        </div>
      </div>
    </header>
  );
};

export default BannerAcerca;