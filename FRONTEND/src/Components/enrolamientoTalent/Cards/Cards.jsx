import './Cards.css'


function Cards() {
    return (
        <>
            <div className="container contenedor-cartas">
                <div className="row row-cols-1 row-cols-md-3 g-4" id="cardsPancho">
                    <div className="col">
                        <div className="card h-100 shadow" id="borderCards">
                            <img src="images/certificadoEstudios.jpg"
                                className="card-img-top w-50 h-50 mx-auto text-center d-block img-fluid" />
                            <div className="card-body">
                                <h4 className="card-title text-center">SUBE AQUÍ</h4>
                                <p className="card-text text-center">Sube aquí tus certificados de estudios o cursos realizados con
                                    certificación.</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="certificadoEstudio"></label>
                                <input className="form-control" type="file" name="certificadoEstudio" id="certificadoEstudio" multiple />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow" id="borderCards">
                            <img src="images/imgCert.png"
                                className="card-img-top w-50 h-50 mx-auto text-center d-block img-fluid" alt="antecedentes" />
                            <div className="card-body">
                                <h4 className="card-title text-center">SUBE AQUÍ</h4>
                                <p className="card-text text-center">Sube aquí tu certificado de antecedentes, recuerda que este
                                    debe estar
                                    actualizado.</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="certificadoAntecedente" ></label>
                                <input className="form-control" type="file" name="certificadoAntecedente" id="certificadoAntecedente" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow" id="borderCards">
                            <img src="images/imgCVss.png"
                                className="card-img-top w-50 h-50 mx-auto text-center d-block img-fluid" />
                            <div className="card-body">
                                <h4 className="card-title text-center">SUBE AQUÍ</h4>
                                <p className="card-text text-center">Sube aquí tu Curriculum Vitae, este debe estar en formato PDF o
                                    WORD.</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="curriculum"></label>
                                <input className="form-control" type="file" name="curriculum" id="curriculum" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cards;