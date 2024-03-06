import './Cards.css'
import { useState } from 'react';

function Cards() {
    const [redireccionarA, setRedireccionarA] = useState('');
    const handleEnrolButtonClick = () => {
        setRedireccionarA('/PerfilTalentos');
    };
    if (redireccionarA) {
        window.location.href = redireccionarA;
    }
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
            {/* CHECKBOX */}
            <div className="div-check">
            <div className="checkbox">
                <input id="form-checkbox-1" name="checkbox" type="checkbox" />
                <label htmlFor="form-checkbox-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200">
                        <mask fill="white" id="checkbox-mask"><rect height="200" width="200"></rect></mask>
                        <rect mask="url(#checkbox-mask)" strokeWidth="40" height="200" width="200"></rect>
                        <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64"></path>
                    </svg>
                    <span> Autorizo el uso de mis datos </span>
                </label>
            </div>
            </div>
            {/* BOTÓN */}
            <div className="row col-6 text-center">
                <button className="button" onClick={handleEnrolButtonClick}>
                    Enrólate
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                        <path
                            clipRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>

        </>
    );
}

export default Cards;