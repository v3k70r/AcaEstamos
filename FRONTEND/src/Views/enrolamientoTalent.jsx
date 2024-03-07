import Navbar from "../Components/Navbar/Navbar";
import Avatar from "../Components/enrolamientoTalent/Avatar/Avatar";
import Form from "../Components/enrolamientoTalent/Form/Form";
import Footer from "../Components/Footer/Footer";
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";


const EnrolamientoTalent = () => {
    return (
        <>
            <Navbar />
            <ProtoBanner imageUrl="images/bannerTalent111.png"
                headingText="¡Enrólate como talento!" />
            <div className="container-fluid">
                <Avatar />
                <Form />
            </div>
            <Footer />
        </>

    );
};

export default EnrolamientoTalent;