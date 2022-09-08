import {motion} from "framer-motion";
import {ReactComponent as SBLogo} from "../img/sb-logo-white.svg";
import {ReactComponent as ULogo} from "../img/user.svg";
import Hamburger from "./buttons/HamburgerMenu";

export default function Header() {
    /**Header para la version smallScreen */

   return(
          <header>
               <Hamburger/>
               <SBLogo/>
               <ULogo/>
          </header>
   );
}