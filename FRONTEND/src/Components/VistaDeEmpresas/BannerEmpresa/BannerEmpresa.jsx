import React from "react";
import './BannerEmpresa.css';


function BannerEmpresa() {
  return (
    <>
      {/* Abre la etiqueta header */}
      <header>
        {/* Banner de color */}
        <div className="BannerDeColorEmpresa d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <h1 className="text-center textoEmpresa">Empresas asociadas</h1>
            </div>
          </div>
        </div>
      {/* Cierra la etiqueta header */}
      </header>
    </>
  );
}

export default BannerEmpresa;