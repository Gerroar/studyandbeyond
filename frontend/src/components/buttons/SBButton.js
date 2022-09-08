import { ReactComponent as SBLogo } from "../../img/sb-logo-white-buttons.svg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SBButton() {
  const list = {
    visible: { 
      left: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 70
      }
    },
    hidden: { left: 350},
  }

  return (
    <motion.div 
      className="leftButton"
      initial="hidden"
      animate="visible"
      variants={list}>
      <div id="thrd-face-rev">
        <SBLogo/>
      </div>
      <div id="thrd-top-rev"></div>
      <div id="thrd-side-rev"></div>
    </motion.div>
  );
}
