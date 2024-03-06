import './InfoBuenCurriculum.css'; 

function InfoBuenCurriculum() {
  return (
    <div className="container justify-content-center">
      <div className="card">
        <div className="card-body-job text-center text-white">
          <h4 className="card-title" style={{ backgroundColor: "#769E33", borderRadius: "20px", padding:"8px" }}>Tips para un buen curriculum</h4>
          <h5 className="card-text">¡Pincha aqui para ir la sección de tips de cómo escribir un buen curriculum!</h5>
        </div>
        <div className="d-flex justify-content-center text-center">
          <a href="http://localhost:5173/unbuencurriculum">
            <img src="images/inicioinfobuencv.jpg" style={{ width: '80%', height: '80%' }} className="card-img-bottom" alt="..." />
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoBuenCurriculum;
