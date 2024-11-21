import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



const HomeLayout = () => {
    return (
        <div className="font-lato flex flex-col min-h-screen overflow-hidden">
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
            <footer>
            <Footer></Footer>
            </footer>
            
            
        </div>
    );
};

export default HomeLayout;