import Navbar from "../Components/Navbar/Navbar";
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";
import FormEnrolEmpresa from "../Components/EnrolamientoEmpresa/FormEnrolEmpresa/FormEnrolEmpresa";
import Footer from "../Components/Footer/Footer";


const EnrolamientoEmpresa = () => {
    return (
        <>
            <Navbar />
            <ProtoBanner imageUrl="images/bannerEmpresa111.png"
                headingText="¡Enrólate como empresa!" />
            <div className="container-fluid">
                <FormEnrolEmpresa />
            </div>
            <Footer />
        </>
    );
};

export default EnrolamientoEmpresa;