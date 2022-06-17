import {ReactComponent as PhoneLogo} from "../img/phone-icon.svg";
import {ReactComponent as EmailLogo} from "../img/email-icon.svg";
import {motion} from "framer-motion";

export default function Footer() {
    /**En este componente generamos el footer, que siempre
     * será el mismo independientemente del tamaño
     */
    return(
        <footer>
            <div id="FotCon">
                <motion.a href="mailto:info@studyandbeyond.es" className="fIcont"
                 whileTap={{scale: 0.7}}>
                    <EmailLogo className="email-icon"/>
                        info@studyandbeyond.es
                </motion.a>
                <motion.a href="tel:+4531146038" className="fIcont"
                 whileTap={{scale: 0.7}}>
                    Let's <PhoneLogo className="phone-icon"/> +4531146038
                </motion.a>
            </div>
            <div id="FotPol">
                <span>CVR : 43172794</span>
                <div id="pLinks">
                    <a id="pAvisoL">Legal</a>
                    <a id="pPriv">Privacy Policy</a>
                    <a id="pCookies">Cookies Policy</a>
                    <a id="pCan">Cancellation</a>
                </div>
            </div>
        </footer>
    );
}