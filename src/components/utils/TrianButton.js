import { motion } from "framer-motion";

export default function TrianButton({ trian, isActive }) {
  /**Cada vez que se da click en el div el triangulo gira indicando
   * que la informacion desplegada se puede recoger
   */

  const variants = {
    pointDown: {
      rotate: 180,
    },
    pointUp: {
      rotate: 0,
    },
  };


  return (
    <>
      <motion.div id="trian-container">
        <motion.div
          className="trian"
          id={trian}
          key={trian}
          animate={isActive ? 'pointUp' : 'pointDown'}
          variants={variants}
        ></motion.div>
      </motion.div>
    </>
  );
}
