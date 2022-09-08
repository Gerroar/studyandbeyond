import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import HomeContent from "./components/contentPages/Home";

export default function App() {
    return(
        <main>
            <HeaderMobile/>
            <HomeContent/>
            <Footer/>
        </main>
    );
}