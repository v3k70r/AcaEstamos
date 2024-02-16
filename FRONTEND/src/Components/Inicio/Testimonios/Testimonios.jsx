import React from 'react';

function Testimonios() {
  return (
    <section className="vh-50 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body py-5">

                {/* Carousel wrapper */}
                <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                  {/* Indicators */}
                  <div className="carousel-indicators mb-0">
                    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
                    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1"
                      aria-label="Slide 1"></button>
                    <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2"
                      aria-label="Slide 1"></button>
                  </div>

                  {/* Inner */}
                  <div className="carousel-inner pt-2 pb-5">
                    {/* Single item */}
                    <div className="carousel-item active">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-lg-9 col-xl-8">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                                height="90" />
                            </div>
                            <div className="flex-grow-1 ms-4 ps-3">
                              <figure>
                                <blockquote className="blockquote mb-4">
                                  <p>
                                    <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                    <span className="font-italic">Acá estamos me conectó con el empleo de mis sueños. Además de permitirme conectar con una comunidad de decenas de empresas asociadas en Renca.</span>
                                  </p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                  Rosalia Ortega - <cite title="Source Title">Vecina de Renca</cite>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Single item */}
                    <div className="carousel-item">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-lg-9 col-xl-8">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                                height="90" />
                            </div>
                            <div className="flex-grow-1 ms-4 ps-3">
                              <figure>
                                <blockquote className="blockquote mb-4">
                                  <p>
                                    <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                    <span className="font-italic">En Acá estamos he encontrado una comunidad muy completa de talentos proactivos y dispuestos, algo muy importante para mi equipo de trabajo, es justamente lo que hemos estado buscando para mejorar nuestra vinculación con el medio.</span>
                                  </p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                   Carol Yi - <cite title="Source Title">Coca-Cola Andina</cite>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Single item */}
                    <div className="carousel-item">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-lg-9 col-xl-8">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                                height="90" />
                            </div>
                            <div className="flex-grow-1 ms-4 ps-3">
                              <figure>
                                <blockquote className="blockquote mb-4">
                                  <p>
                                    <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                    <span className="font-italic">Nos parece una excelente iniciativa, desde nuestros inicios siempre hemos tenido como objetivo fundamental conectar con nuestros vecinos e impulsar sus talentos.</span>
                                  </p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                  Raul Alejando - <cite title="Source Title">Generadora Metropolitana</cite>
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Inner */}

                  {/* Controls */}
                  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant"
                    data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* Carousel wrapper */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;