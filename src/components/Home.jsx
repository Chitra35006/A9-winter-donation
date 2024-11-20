import React from 'react';
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import HowWorks from "../components/HowWorks";
import SponsorWinterKit from "../components/WinterKit";
import WinterKit from "../components/WinterKit";
import Donor from "../components/Donor";
const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;