import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import HomeContent from "./components/contentPages/Home";
import SBPage from "./components/contentPages/SB";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <HeaderMobile />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />}/>
          <Route path="sb" element={<SBPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}
