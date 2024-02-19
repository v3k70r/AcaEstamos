import Navbar from '../Components/Navbar/Navbar'
import BannerUnBuenCurriculum from '../Components/UnbuenCurriculum/BannerUnBuenCurriculum/BannerUnBuenCurriculum';
import TextoIntroductorioUnBuenCurriculum from '../Components/UnbuenCurriculum/TextoIntroductorioUnBuenCurriculum/TextoIntroductorioUnBuenCurriculum';
import Cards1UnBuenCurriculum from '../Components/UnbuenCurriculum/Cards1UnBuenCurriculum/Cards1UnBuenCurriculum';
import Cards2UnBuenCurriculum from '../Components/UnbuenCurriculum/Cards2UnBuenCurriculum/Cards2UnBuenCuriculum';
import Cards3UnBuenCurriculum from '../Components/UnbuenCurriculum/Cards3UnBuenCurriculum/Cards3UnBuenCurriculum';
import Footer from '../Components/Footer/Footer';

const UnbuenCurriculum = () => {
    return (
        <>
            <Navbar />
            <BannerUnBuenCurriculum />
            <TextoIntroductorioUnBuenCurriculum />
            <Cards1UnBuenCurriculum />
            <Cards2UnBuenCurriculum />
            <Cards3UnBuenCurriculum />
            <Footer />
        </>
    )
}

export default UnbuenCurriculum