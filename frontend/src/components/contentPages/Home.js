import { ReactComponent as SBLogo } from "../../img/sb-logo-white-buttons.svg";
import { Link } from "react-router-dom";

export default function Home() {
  /**Aqui se muestran los botones principales con información de SB y
   * porque estudiar en Dinamarca
   */
  return (
    <div className="contenido">
      <div className="transition-div" id="sb-div">
        <Link to="/sb" className="text-link">
          <SBLogo />
        </Link>
      </div>
      <div className="transition-div" id="dk-div">
        <Link to="/denmark" className="text-link">
          <p>Dinamarca</p>
        </Link>
      </div>
    </div>
  );
}
