import { motion } from "framer-motion";
import { useState } from "react";

export default function Hamburger(){

    const [isTapped, setIsTapped] = useState(false);

    return(
        <motion.div className="hamMenu" onTap={() => setIsTapped(!isTapped)}>
            <div id="hm-top"></div>
            <div id="hm-mid"></div>
            <div id="hm-bot"></div>
        </motion.div>
    );
}