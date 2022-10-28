import { motion, useAnimationControls } from "framer-motion";

const ExitButton = ({ setShowModal }) => {
  const exitDiv = useAnimationControls();
  const pulgar = useAnimationControls();

  async function tapExit() {
    exitDiv.start({
      scale: [1, 0.95, 1.05, 0.98, 1],
      transition: {
        times: [0, 0.2, 0.4, 0.6, 0.7],
      },
    });
    pulgar.start({
      top: [6.5, -1.5, 6.5],
      transition: {
        times: [0, 0.2, 0.4],
      }
    })
  } //end of tapExit

  return (
    <motion.div className="exit-modal">
      <motion.div
        className="exit-modal-button"
        animate={exitDiv}
        onTap={tapExit}
        onClick={() => {
          setTimeout(() => {
            setShowModal(false);
          }, 600)
        }}
      >
        <span className="exitText">ENTENDIDO</span>
        <motion.span className="pulgar"
          animate={pulgar}
          onTap={tapExit}
        >&#128077;</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ExitButton;
