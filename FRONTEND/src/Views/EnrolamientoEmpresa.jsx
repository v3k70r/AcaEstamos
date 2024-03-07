import React, { useState } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";
import FormEnrolEmpresa from "../Components/EnrolamientoEmpresa/FormEnrolEmpresa/FormEnrolEmpresa";
import Footer from "../Components/Footer/Footer";
import Boton from "../Components/EnrolamientoEmpresa/FormEnrolEmpresa/Boton/Boton";
import CheckBox from "../Components/EnrolamientoEmpresa/Check/CheckBox";


const EnrolamientoEmpresa = () => {
    const [autorizado, setAutorizado] = useState(false);

  const handleCheckboxChange = (autorizacion) => {
    setAutorizado(autorizacion);
  };
    return (
        <>
            <Navbar />
            <ProtoBanner imageUrl="images/bannerEmpresa111.png"
                headingText="¡Enrólate como empresa!" />
            <div className="container-fluid">
                <FormEnrolEmpresa onCheckboxChange={handleCheckboxChange} autorizado={autorizado} />
            </div>
            <Footer />
        </>
    );
};

export default EnrolamientoEmpresa;