import { ReactComponent as SBLogo } from "../../img/sb-logo-white-buttons.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  /**Aqui se muestran los botones principales con información de SB y
   * porque estudiar en Dinamarca
   */

  const sbDiv = { 
    visible: {
      marginLeft: "25%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 70
      }
    },
    hidden: { marginLeft: "-55%" }
  }

  const dkDiv =  {
    visible: {
      marginLeft: "25%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 70
      }
    },
    hidden: { marginLeft: "110%"}
  }
  return (
    <div className="contenido">
      <motion.div 
        className="transition-div" id="sb-div"
        initial="hidden"
        animate="visible"
        variants={sbDiv}
        >
        <Link to="/sb" className="text-link">
          <SBLogo />
        </Link>
      </motion.div>
      <motion.div 
        className="transition-div" id="dk-div"
        initial="hidden"
        animate="visible"
        variants={dkDiv}
        >
        <Link to="/denmark" className="text-link">
          <p>Dinamarca</p>
        </Link>
      </motion.div>
    </div>
  );
}