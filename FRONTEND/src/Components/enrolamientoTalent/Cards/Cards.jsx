import './Cards.css'

function Cards() {
    return (
        <>
            <div className="container-fluid contenedor-cartas">
                <div className="row row-cols-1 row-cols-md-3 g-4" id="cardsPancho">
                    <div className="col">
                        <div className="card h-100 shadow" id="borderCards">
                            <img src="images/imgEstudios.png"
                                className="card-img-top w-50 h-50 mx-auto text-center d-block img-fluid"/>
                                <div className="card-body">
                                    <h4 className="card-title text-center">SUBE AQUÍ</h4>
                                    <p className="card-text text-center">Sube aquí tus certificados de estudios o cursos realizados con
                                        certificación.</p>
                                </div>
                                <div className="card-footer text-center">
                                    <div className="form-floating">
                                        <input className="form-control" type="file" id="certificadoEstudio" name="certificadoEstudio"/>
                                            <label className="form-label" htmlFor="certificadoEstudio">
                                            </label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow" id="borderCards">
                            <img src="images/imgAntecedentes.png"
                                className="card-img-top w-50 h-50 mx-auto text-center d-block img-fluid" alt="antecedentes"/>
                                <div className="card-body">
                                    <h4 className="card-title text-center">SUBE AQUÍ</h4>
                                    <p className="card-text text-center">Sube aquí tu certificado de antecedentes, recuerda que este
                                        debe estar
                                        actualizado.</p>
                                </div>
                                <div className="card-footer text-center">
                                    <div className="form-floating">
                                        <input className="form-control" type="file" id="certificadoAntecedente" name="certificadoAntecedente"/>
                                            <label className="form-label" htmlFor="certificadoAntecedente">
                                            </label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow" id="borderCards">
                            <img src="images/imgCurriculum.png"
                                className="card-img-top w-50 h-50 mx-auto text-center d-block img-fluid"/>
                                <div className="card-body">
                                    <h4 className="card-title text-center">SUBE AQUÍ</h4>
                                    <p className="card-text text-center">Sube aquí tu Curriculum Vitae, este debe estar en formato PDF o
                                        WORD.</p>
                                </div>
                                <div className="card-footer text-center">
                                    <div className="form-floating">
                                        <input className="form-control" type="file" id="curriculum" name="curriculum"/>
                                            <label className="form-label" htmlFor="curriculum">
                                            </label>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;