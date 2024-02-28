import './InfoBuenCurriculum.css'; 

function InfoBuenCurriculum() {
  return (
    <div className="container justify-content-center">
<div className="card">
      <div className="card-body text-center">
        <h5 className="card-title" style={{ backgroundColor: "#E5ECF6", borderRadius: "20px" }}>Tips para un buen curriculum</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="d-flex justify-content-center">
      <a href="http://localhost:5173/unbuencurriculum"><img src="images/iniciobuencv.jpg" style={{ width: '700px', height: '500px' }} className="card-img-bottom" alt="..."></img></a>
      </div>
      </div>
    </div>
  );
}

export default InfoBuenCurriculum;
