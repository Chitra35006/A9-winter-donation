import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



const HomeLayout = () => {
    return (
        <div className="font-lato">
            <header>
            <NavBar></NavBar>
            </header>
            {/* <section>
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
            </section> */}
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
            
        </div>
    );
};

export default HomeLayout;