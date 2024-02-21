

function Footer() {
  return (
    <footer>
      <div className="container-fluid" style={{ backgroundColor: "#E5ECF6", margin: 0, paddingTop: 50, paddingLeft: 50, paddingRight: 50 }}>
        <div className="row">
          <div className="col-lg-4 mt-4" style={{ alignItems: "center" }}>
            <a className="footer-brand" href="https://renca.cl/"><img src="images/logonegro.png" height="70" alt="MDB Logo" loading="lazy" style={{ marginTop: 30 }} /></a>
          </div>
          {/*logo aca estamos*/}
          <div className="col-lg-4 mt-4" style={{ alignItems: "center" }}>
            <a className="logoacaestamos" href="index.html"><img src="images/logo-normal.png" height="70" loading="lazy" style={{ marginTop: 30 }} /></a>
          </div>
          {/*Links de contacto*/}
          <div className="col-lg-4 mt-4" style={{ textAlign: "right" }}>
            <h5>Contacto</h5>
            <p>RR.SS. <a href="https://www.instagram.com/muni_renca/" style={{ color: "inherit" }}><i className="fa-brands fa-instagram"></i></a></p>
            <p>contacto@renca.cl <i className="fa-solid fa-envelope"></i></p>
            <p>+56 9 5383 4639 (chatbot) <i className="fa-solid fa-phone"></i></p>
          </div>
        </div>
        <div className="row">
          <p className="text-center mt-3">Derechos de autor (c) 2024 Acá Estamos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;