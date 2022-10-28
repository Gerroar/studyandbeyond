import { ReactComponent as SBLogoColor } from "../../img/sb-logo.svg";
import TrianButton from "../utils/TrianButton";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { WavyLink } from "react-wavy-transitions";

export default function SBCard() {
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
      left: 0,
    });
    hiddenInfo.start({
      left: 0,
    });
  }
  /*Controlador*/

  useEffect(() => {
    let firsTime = sessionStorage.getItem("isFirsTime");
    setCardValue(sessionStorage.getItem("cardValue"));
    setInfoValue(sessionStorage.getItem("infoValue"));

    if (!firsTime) {
      controladorAnimacion();
    }
  }, []);

  return (
    <>
      <motion.div
        className="card-button-container"
        id="sb-button"
        initial={{ left: cardValue }}
        animate={container}
        onTap={tap}
      >
        <div className="visual-card-sb">
          <SBLogoColor />
        </div>
        <p className="p-title">Study and Beyond</p>
        <TrianButton trian={"trian-sb"} isActive={isActive} />
      </motion.div>
      <motion.div
        className="hidden-card-info"
        id="sb-hidden-info"
        initial={{ left: infoValue }}
        animate={hiddenInfo}
      >
        <p>
          Todo lo que necesitas saber sobre Study and Beyond, nuestros
          servicios, alojamiento, honorarios y proceso.
        </p>

        <WavyLink
          to="/study-and-beyond"
          color="#386aac"       
        >
          <div className="go-sb">
            <span>Ir</span>
          </div>
        </WavyLink>
      </motion.div>
    </>
  );
}
