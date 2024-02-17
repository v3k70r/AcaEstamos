import Navbar from '../Components/Navbar/Navbar'
import BannerAcerca from '../Components/AcercaDe/BannerAcerca/BannerAcerca'
import Mision from '../Components/AcercaDe/Mision/Mision'
import InfoRenca from '../Components/AcercaDe/InfoRenca/InfoRenca'
import CardsAcerca from '../Components/AcercaDe/CardsAcerca/CardsAcerca'
import Footer from '../Components/Footer/Footer';


const AcercaDe = () => {
    return (
        <div>
            <Navbar />
            <BannerAcerca />
            <Mision />
            <InfoRenca />
            <CardsAcerca />
            <Footer />
        </div>
    )
}

export default AcercaDe
