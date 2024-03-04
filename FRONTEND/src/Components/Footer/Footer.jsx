function Footer() {
  return (

    <footer>
    <div className="row" style={{ width: '100%', marginLeft: 0 }}>
      <div className="col-2" style={{ height: '8px', backgroundColor: '#d75e24' }}></div>
      <div className="col-2" style={{ height: '8px', backgroundColor: '#e68e0c' }}></div>
      <div className="col-2" style={{ height: '8px', backgroundColor: '#769e33' }}></div>
      <div className="col-2" style={{ height: '8px', backgroundColor: '#009a88' }}></div>
      <div className="col-2" style={{ height: '8px', backgroundColor: '#5fb9d3' }}></div>
      <div className="col-2" style={{ height: '8px', backgroundColor: '#0192d0' }}></div>
    </div>
    <div className="container-fluid" style={{ backgroundColor: '#333333', margin: '0px', paddingTop: '10px', paddingLeft: '50px', paddingRight: '50px' }}>
      <div className="row">
        {/* Logo isignia */}
        <div className="col-lg-4 mt-4" style={{ display: 'flex', flexDirection: 'row' }}>
          <a className="footer-brand"><img src="public/images/isignia-renca.png" height="250" alt="MDB Logo" loading="lazy" /></a>
          {/* Links de interés */}
          <div style={{ width: '100%', marginLeft: '15%' }}>
            <h5 style={{ color: 'white', marginBottom: '8%' }}>Links de interés</h5>
            <p style={{ color: 'white', width: '100%', textDecoration: 'underline' }}>
              <a href="https://www.instagram.com/muni_renca/" style={{ color: 'white' }}>Certificados de interés</a>
            </p>
            <p style={{ color: 'white', width: '100%', textDecoration: 'underline' }}>
              <a href="https://www.instagram.com/muni_renca/" style={{ color: 'white' }}>Capacitaciones</a>
            </p>
            <p style={{ color: 'white', width: '100%', textDecoration: 'underline' }}>
              <a href="https://www.instagram.com/muni_renca/" style={{ color: 'white' }}>Renca.cl</a>
            </p>
            <p style={{ color: 'white', textDecoration: 'underline' }}>
              <a href="https://www.instagram.com/muni_renca/" style={{ color: 'white' }}>Políticas de privacidad</a>
            </p>
          </div>
        </div>
        {/* Logo aca estamos */}
        <div className="col-lg-4 mt-4" style={{ alignItems: 'center' }}>
          <a className="logoacaestamos"><img src="public/images/logo-oscuro-footer.jpeg" height="250px" loading="lazy" style={{ marginTop: '0px' }} /></a>
        </div>
        {/* Links de contacto */}
        <div className="col-lg-4 mt-4" style={{ textAlign: 'right' }}>
          <h5 style={{ color: 'white', marginBottom: '5%' }}>Contacto</h5>
          <div className="contenedor-iconos-footer" style={{ display: 'flex', justifyContent: 'right' }}>

          <p style={{ color: 'white', paddingRight: '5%' }}>
</p>

            <p style={{ color: 'white', paddingRight: '5%' }}><a href="https://www.instagram.com/muni_renca/" style={{ color: 'inherit', fontSize: '2em' }}><i className="fab fa-instagram"></i></a></p>
            <p style={{ color: 'white', paddingRight: '5%' }}><a href="https://www.instagram.com/muni_renca/" style={{ color: 'inherit', fontSize: '2em' }}><i className="fab fa-facebook"></i></a></p>
            <p style={{ color: 'white', paddingRight: '5%' }}><a href="https://twitter.com/Muni_Renca" style={{ color: 'inherit', fontSize: '2em' }}><i className="fa-brands fa-twitter"></i></a></p>
            <p style={{ color: 'white', paddingRight: '5%' }}><a href="https://www.flickr.com/photos/153772620@N02" style={{ color: 'inherit', fontSize: '2em' }}><i className="fa-brands fa-flickr"></i></a></p>
            <p style={{ color: 'white' }}><a href="https://www.youtube.com/channel/UCosdtBKfRSxhhi4x9247Nbw" style={{ color: 'inherit', fontSize: '2em' }}><i className="fa-brands fa-youtube"></i></a></p>
          </div>
          <p style={{ color: 'white' }}>contacto@renca.cl <i className="fa-solid fa-envelope"></i></p>
          <p style={{ color: 'white' }}>+56 9 5383 4639 (chatbot) <i className="fa-solid fa-phone"></i></p>
        </div>
      </div>
      <div className="row">
        <p className="text-center mt-3" style={{ color: 'white' }}>Derechos de autor (c) 2024 Acá Estamos. Todos los derechos reservados.</p>
      </div>
    </div>
    
  </footer>
  
);
}

export default Footer;