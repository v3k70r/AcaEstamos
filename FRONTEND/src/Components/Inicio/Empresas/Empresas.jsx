

const Empresas = () => {
  return (
    <>
      {/* Empresas */}
      <div className="text-center m-5" >
        <h2 style={{ backgroundColor: "#E5ECF6", borderRadius: "20px", padding:"5px" }}>Empresas activas</h2>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img src="images/empresasActivas/empresa1.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa2.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa3.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa4.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src="images/empresasActivas/empresa5.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa6.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa7.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa8.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src="images/empresasActivas/empresa9.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa10.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa11.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
              <div className="col">
                <img src="images/empresasActivas/empresa12.png" className="d-block w-100 img-fluid" alt="Wild Landscape" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Empresas */}
    </>
  );
};

export default Empresas;