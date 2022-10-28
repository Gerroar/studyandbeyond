import image from "../../img/denmark.jpg";
import TrianButton from "../utils/TrianButton";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { WavyLink } from "react-wavy-transitions";

export default function DKCard() {
  const [isActive, setIsActive] = useState(false);
  const [cardValue, setCardValue] = useState("");
  const [infoValue, setInfoValue] = useState("");

  /*Controles*/
  const container = useAnimationControls();
  const hiddenInfo = useAnimationControls();
  /*Controles*/

  /**Tap*/

  async function tap() {
    /*First click */

    container.start({
      scale: [1, 0.95, 1.05, 0.98, 1],
      transition: {
        times: [0, 0.2, 0.4, 0.6, 0.7],
      },
    }); //end of container

    hiddenInfo.start({
      scale: [1, 0.95, 1.05, 0.98, 1],
      transition: {
        times: [0, 0.2, 0.4, 0.6, 0.7],
      },
    }); //end of container

    /*First click */

    if (isActive) {
      setIsActive(false);

      /* Hide again */

      hiddenInfo.start({
        top: 0,
        transition: {
          type: "spring",
          duration: 1,
        },
      }); //end of hiddenInfo

      /* Hide again */

      /* Little push to the the top */

      hiddenInfo.start({
        top: -20,
        transition: {
          delay: 0.8,
          times: [0, 1, 1.1],
        },
      });

      container.start({
        bottom: [0, 20, 0],
        transition: {
          delay: 0.8,
          times: [0, 0.5, 0.6],
        },
      });

      /* Little push to the the top */
    } else {
      setIsActive(true);

      /*Show hidden info */

      hiddenInfo.start({
        top: 178,
        transition: {
          ease: "easeOut",
          delay: 0.4,
          duration: 0.3,
        },
      }); //end of hiddenInfo

      /*Show hidden info */
    }
  }

  /**Tap*/

  /*Controlador*/
  async function controladorAnimacion() {
    container.start({
      right: 0,
    });
    hiddenInfo.start({
      right: 0,
    });
  }
  /*Controlador*/

  useEffect(() => {
    let firstTime = sessionStorage.getItem("isFirstTime");
    setCardValue(sessionStorage.getItem("cardValue"));
    setInfoValue(sessionStorage.getItem("infoValue"));

    if (!firstTime) {
      controladorAnimacion();
    }
  }, []);
  return (
    <>
      <motion.div
        className="card-button-container"
        id="denmark-button"
        initial={{ right: cardValue }}
        animate={container}
        onTap={tap}
      >
        <div className="visual-card-dk">
          <div id="barra-1"></div>
          <div id="barra-2"></div>
        </div>
        <p className="p-title">Dinamarca</p>
        <TrianButton trian={"trian-denmark"} isActive={isActive} />
      </motion.div>
      <motion.div
        className="hidden-card-info"
        id="denmark-hidden-info"
        initial={{ right: infoValue }}
        animate={hiddenInfo}
      >
        <p>Dinamarca el pais vikingo.</p>
          <WavyLink to="/dinamarca" color="#fb3640">
            <div className="go-dk"><span>Información</span></div>
          </WavyLink>
          <WavyLink to="/carreras-dinamarca" color="#fb3640">
            <div className="go-carreras-dk"><span>Carreras</span></div>
          </WavyLink>
      </motion.div>
    </>
  );
}
