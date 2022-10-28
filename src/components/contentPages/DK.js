import BackBubble from "../utils/formas/BackBubble";
import Alojamiento from "../utils/formas/dk/Alojamiento";
import PaisVikingo from "../utils/formas/dk/PaisVikingo";
import SistemaEducativo from "../utils/formas/dk/SistemaEducativo";
import FormaTitulo from "../utils/formas/FormaTitulo";

export default function Denmark() {
    if(window.scrollY){
        window.scroll(0,0);
      }
    return(
        <div className="contenido">
            <div className="background-dk-1"></div>
            <BackBubble color={"b-red"} waveColor={"#fb3640"}/>
            <PaisVikingo/>
            <FormaTitulo texto={"SISTEMA EDUCATIVO"} idTitulo={"tituloCuatro"}/>
            <div className="background-dk-2"></div>
            <SistemaEducativo/>
            <FormaTitulo texto={"ALOJAMIENTO"} idTitulo={"tituloCinco"}/>
            <div className="background-dk-3"></div>
            <Alojamiento/>
        </div>
    )
}