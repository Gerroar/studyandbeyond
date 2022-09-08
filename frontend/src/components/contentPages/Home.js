import SBButton from "../buttons/SBButton";
import DenButton from "../buttons/DenButton";

export default function Home() {
    /**Aqui se muestran los botones principales con información de SB y 
     * porque estudiar en Dinamarca
     */
    return(
        <div className="contenido">
            <SBButton/>
            <DenButton/>
        </div>
    );
}