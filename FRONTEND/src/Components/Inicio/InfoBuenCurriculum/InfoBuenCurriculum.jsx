import './InfoBuenCurriculum.css'; 

function InfoBuenCurriculum() {
  return (
    <div className="container justify-content-center">
      <div className="card">
        <div className="card-body text-center ">
          <h4 className="card-title" style={{ backgroundColor: "#E5ECF6", borderRadius: "20px", padding:"8px" }}>Tips para un buen curriculum</h4>
          <p className="card-text">¡Pincha aqui para ir la sección de tips de cómo escribir un buen curriculum!</p>
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
