import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import HowWorks from "../components/HowWorks";
import SponsorWinterKit from "../components/WinterKit";
import WinterKit from "../components/WinterKit";
import Donor from "../components/Donor";


const HomeLayout = () => {
    return (
        <div className="font-lato">
            <header>
            <NavBar></NavBar>
            </header>
            <section>
            <ImageSlider></ImageSlider>
            </section>
            <section>
            <About></About>
            </section>
            <section>
            <HowWorks></HowWorks>
            </section>
            <section>
            <WinterKit></WinterKit>
            </section>
            <section>
                <Donor></Donor>
            </section>
            <Footer></Footer>
            
            
        </div>
    );
};

export default HomeLayout;