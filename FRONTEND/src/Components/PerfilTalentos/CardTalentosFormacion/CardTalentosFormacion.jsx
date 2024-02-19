import './CardTalentoFormacion.css';

function CardTalentoFormacion(props) {
    return (
        <div className="card cardF2">
            <div className="card-body cardbodyF2 d-flex ">
                <div className="mx-auto text-center"> 
                    <i className="fas fa-graduation-cap fa-3x" style={{ marginRight: '25px', marginBottom: '20px' }} ></i> 
                    <h6 className="card-title">{props.institucion}</h6>
                    <hr />
                </div>
                <div className="contiene" style={{ width: '100%' }}>
                    <p className="card-text">{props.academicas}</p>
                    <p>{props.fecha}</p>
                </div>
            </div>
        </div>
    );
}

export default CardTalentoFormacion;
