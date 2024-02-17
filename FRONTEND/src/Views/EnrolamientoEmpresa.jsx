import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"
import Banner from "../Components/EnrolamientoEmpresa/Banner/Banner";
import Form from "../Components/EnrolamientoEmpresa/Form/Form";


const EnrolamientoEmpresa = () => {
    return (
        <>
            <Navbar />
            <Banner imageUrl="images/bannerEmpresa111.png" headingText="¡Enrólate como empresa!" />
            <Form />
            <Footer />
        </>
    );
};

export default EnrolamientoEmpresa;