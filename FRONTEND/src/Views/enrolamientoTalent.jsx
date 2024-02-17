import Navbar from "../Components/Navbar/Navbar";
import Avatar from "../Components/enrolamientoTalent/Avatar/Avatar";
import Footer from "../components/Footer/Footer"
import Banner from "../Components/enrolamientoTalent/Banner/Banner";
import Form from "../Components/enrolamientoTalent/Form/Form";
import Cards from "../Components/enrolamientoTalent/Cards/Cards";


const EnrolamientoTalent = () => {
    return (
        <>
            <Navbar />
            <Banner imageUrl="images/bannerTalent111.png" headingText="¡Enrólate como talento!" />
            <Avatar />
            <Form />
            <Cards />
            <Footer />
        </>
    );
};

export default EnrolamientoTalent;