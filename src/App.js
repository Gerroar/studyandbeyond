import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import HomeContent from "./components/contentPages/Home";
import SB from "./components/contentPages/SB";
import DK from "./components/contentPages/DK";
import CarrerasDK from "./components/contentPages/CarrerasDK";
import Modal from "./components/utils/Modal";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatch from "./components/contentPages/NoMatch";
import { WavyContainer } from "react-wavy-transitions";

export default function App() {
  sessionStorage.setItem("isFirstTime", true);
  sessionStorage.setItem("cardValue", 380);
  sessionStorage.setItem("infoValue", 380);
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  document.title="Study and Beyond";
  return (
    
    <main>
      <BrowserRouter>
        <HeaderMobile />
        <WavyContainer />
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalOption={modalOption}
        />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="study-and-beyond" element={<SB />} />
          <Route path="dinamarca" element={<DK />} />
          <Route path="carreras-dinamarca" element={<CarrerasDK/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer
          setShowModal={setShowModal}
          setModalOption={setModalOption}
        />
      </BrowserRouter>
    </main>
  );
}
