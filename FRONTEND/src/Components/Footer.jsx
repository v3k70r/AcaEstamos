import React from 'react'

function Footer() {
  return (
    //Footer
    <footer>
      <div class="container-fluid"
        style="background-color: #E5ECF6; margin: 0px; padding-top: 50px; padding-left: 50px; padding-right: 50px;">
        <div class="row">
          <div class="col-lg-4 mt-4" style="align-items: center;">
            <a class="footer-brand" href="https://renca.cl/"><img src="images/logonegro.png" height="70" alt="MDB Logo"
                loading="lazy" style="margin-top: 30px;" /></a>
          </div>
          {/*logo aca estamos*/}
          <div class="col-lg-4 mt-4" style="align-items: center;">
            <a class="logoacaestamos" href="index.html"><img src="images/logo-normal.png" height="70" loading="lazy"
                style="margin-top: 30px;" /></a>
          </div>
          {/*Links de contacto*/}
          <div class="col-lg-4 mt-4" style="text-align: right;">
            <h5>Contacto</h5>
            <p>RR.SS. <a href="https://www.instagram.com/muni_renca/" style="color: inherit;"><i
                  class="fa-brands fa-instagram"></i></a></p>
            <p>contacto@renca.cl <i class="fa-solid fa-envelope"></i></p>
            <p>+56 9 5383 4639 (chatbot) <i class="fa-solid fa-phone"></i></p>
          </div>
        </div>
        <div class="row">
          <p class="text-center mt-3">Derechos de autor
            (c) 2024 Acá Estamos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    
    )
}

export default Footer