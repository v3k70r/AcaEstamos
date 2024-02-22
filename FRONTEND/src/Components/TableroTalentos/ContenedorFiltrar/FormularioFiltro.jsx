import React from 'react';
import './FormularioFiltro.css';


const FormularioFiltro = (props) => {

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {interes1, interes2, interes3, interes4, interes5} = props
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {profesion1, profesion2, profesion3, profesion4, profesion5,} = props
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const {oficio1, oficio2 ,oficio3 ,oficio4 ,oficio5,} = props
  return (
    <form className="row g-3 needs-validation justify-content-center" noValidate>
      <div className="col-md-3 position-relative">
        <label htmlFor="validationTooltip04" className="form-label filtroInteres">Interés</label>
        <select className="form-select" id="validationTooltip04" required>
          <option selected disabled value="">Seleccione...</option>
          <option>{interes1}</option>
          <option>{interes2}</option>
          <option>{interes3}</option>
          <option>{interes4}</option>
          <option>{interes5}</option>
        </select>
        <div className="invalid-tooltip">
          Por favor seleccione una opción válida.
        </div>
      </div>
      <div className="col-md-3 position-relative">
        <label htmlFor="validationTooltip05" className="form-label filtroInteres">Profesión</label>
        <select className="form-select" id="validationTooltip05" required>
          <option selected disabled value="">Seleccione...</option>
          <option>{profesion1}</option>
          <option>{profesion2}</option>
          <option>{profesion3}</option>
          <option>{profesion4}</option>
          <option>{profesion5}</option>
        </select>
        <div className="invalid-tooltip">
          Por favor seleccione una opción válida.
        </div>
      </div>
      <div className="col-md-3 position-relative">
        <label htmlFor="validationTooltip06" className="form-label filtroInteres">Oficio</label>
        <select className="form-select" id="validationTooltip06" required>
          <option selected disabled value="">Seleccione...</option>
          <option>{oficio1}</option>
          <option>{oficio2}</option>
          <option>{oficio3}</option>
          <option>{oficio4}</option>
          <option>{oficio5}</option>
        </select>
        <div className="invalid-tooltip">
          Por favor seleccione una opción válida.
        </div>
      </div>
      <div className="botonFiltro text-center">
        <button className="btn EstiloBotonFiltro" type="submit">Aplicar filtros</button>
      </div>
    </form>
  );
};

export default FormularioFiltro;
