import Navbar from "../Components/Navbar/Navbar";
import Avatar from "../Components/enrolamientoTalent/Avatar/Avatar";
import Form from "../Components/enrolamientoTalent/Form/Form";
import Cards from "../Components/enrolamientoTalent/Cards/Cards";
import Footer from "../Components/Footer/Footer";
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";


const EnrolamientoTalent = () => {
    return (
        <>
            <Navbar />
            <ProtoBanner imageUrl="images/bannerTalent111.png" 
            headingText="¡Enrólate como talento!" />
            <Avatar />
            <Form />
            <Cards />
            <Footer />
        </>
    );
};

export default EnrolamientoTalent;