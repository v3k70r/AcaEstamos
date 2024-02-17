import Navbar from "../Components/Navbar/Navbar";
import BannerEnrolEmpresa from "../Components/EnrolamientoEmpresa/BannerEnrolEmpresa/BannerEnrolEmpresa";
import FormEnrolEmpresa from "../Components/EnrolamientoEmpresa/FormEnrolEmpresa/FormEnrolEmpresa";
import Footer from "../Components/Footer/Footer";


const EnrolamientoEmpresa = () => {
    return (
        <>
            <Navbar />
            <BannerEnrolEmpresa imageUrl="images/bannerEmpresa111.png" headingText="¡Enrólate como empresa!" />
            <FormEnrolEmpresa />
            <Footer />
        </>
    );
};

export default EnrolamientoEmpresa;