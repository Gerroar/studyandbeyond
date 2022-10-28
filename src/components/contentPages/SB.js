import FormaTitulo from "../utils/formas/FormaTitulo";
import BackBubble from "../utils/formas/BackBubble";
import SobreNostros from "../utils/formas/sb/SobreNostros";
import NuestrosServicios from "../utils/formas/sb/NuestrosServicios";
import NuestrosHonorarios from "../utils/formas/sb/NuestrosHonorarios";
import Proceso from "../utils/formas/sb/Proceso";

export default function StudyAndBeyond() {
  if(window.scrollY){
    window.scroll(0,0);
  }
  
  return (
    <>
      <div className="contenido" id="sb-contenido">
        <div className="background-sb-1"></div>
        <BackBubble color={"b-blue"} waveColor={"#386aac"} />
        <SobreNostros/>
        <FormaTitulo texto={"NUESTROS SERVICIOS"} idTitulo={"tituloUno"} />
        <div className="background-sb-2"></div>
        <NuestrosServicios/>
        <FormaTitulo texto={"NUESTROS HONORARIOS"} idTitulo={"tituloDos"} />
        <div className="background-sb-3"></div>
        <NuestrosHonorarios/>
        <FormaTitulo texto={"EL PROCESO"} idTitulo={"tituloTres"} />
        <div className="background-sb-4"></div>
        <Proceso/>
      </div>
      
    </>
  );
}
