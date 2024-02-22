import Navbar from '../Components/Navbar/Navbar'
import Mision from '../Components/AcercaDe/Mision/Mision'
import InfoRenca from '../Components/AcercaDe/InfoRenca/InfoRenca'
import CardsAcerca from '../Components/AcercaDe/CardsAcerca/CardsAcerca'
import Footer from '../Components/Footer/Footer';
import ProtoBanner from "../Components/ProtoBanner/ProtoBanner";


const AcercaDe = () => {
    return (
        <div>
            <Navbar />
            <ProtoBanner imageUrl="images/bannerAcerca.png" 
            headingText="Acerca de" />
            <Mision />
            <InfoRenca />
            <CardsAcerca />
            <Footer />
        </div>
    )
}

export default AcercaDe
