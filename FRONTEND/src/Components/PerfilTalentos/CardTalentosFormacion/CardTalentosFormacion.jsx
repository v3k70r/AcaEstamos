import './CardTalentosFormacion.css';

function CardTalentoFormacion(props) {
    // eslint-disable-next-line react/prop-types
    const  {institucion, academicas, fecha} = props  
    return (
        <div className="card cardF2">
            <div className="card-body cardbodyF2 d-flex ">
                <div className="mx-auto text-center"> 
                    <i className="fas fa-graduation-cap fa-3x" style={{ marginRight: '25px', marginBottom: '20px' }} ></i> 
                    <h6 className="card-title">{institucion}</h6>
                    <hr />
                </div>
                <div className="contiene" style={{ width: '100%' }}>
                    <p className="card-text">{academicas}</p>
                    <p>{fecha}</p>
                </div>
            </div>
        </div>
    );
}

export default CardTalentoFormacion;
