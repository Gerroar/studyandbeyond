import SBCard from "../buttons/SBCard";
import DKCard from "../buttons/DKCard";
import { useEffect } from "react";

export default function Home() {
  /**Aqui se muestran los botones principales con información de SB y
   * porque estudiar en Dinamarca
   *
   */
   if(window.scrollY){
    window.scroll(0,0);
  }
  useEffect(() => {
    let firsTime = sessionStorage.getItem("isFirstTime");
    if (firsTime) {
      sessionStorage.setItem("isFirstTime", false);
    } else {
      sessionStorage.setItem("cardValue", 0);
      sessionStorage.setItem("infoValue", 0);
    }
  }, []);

  return (
    <>
      <div className="contenido" id="home-contenido">
        <SBCard />
        <DKCard />
      </div>
    </>
  );
}
