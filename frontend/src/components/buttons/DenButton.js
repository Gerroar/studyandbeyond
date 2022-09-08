import { motion } from "framer-motion";

export default function DenButton() {
  const list = {
    visible: {
      right: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 70
      }
    },
    hidden: { right: 350},
  }
  return (
    <motion.div 
      className="rightButton"
      initial="hidden"
      animate="visible"
      variants={list}
      >
      <div id="thrd-face-rev">
        <p id="denmark">Dinamarca</p>
      </div>
      <div id="thrd-top-rev"></div>
      <div id="thrd-side-rev"></div>
    </motion.div>
  );
}
