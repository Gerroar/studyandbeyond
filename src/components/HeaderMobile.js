import { motion } from "framer-motion";
import { ReactComponent as SBLogo } from "../img/sb-logo-white.svg";
import { Link } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";

export default function Header() {
  /**Header para la version smallScreen */
  

  return (
    <header>     
      <WavyLink to="/" color='#386aac' id="header-link"><SBLogo /></WavyLink>
    </header>
  );
}
