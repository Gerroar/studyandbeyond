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
                <div>
                    <p>CVR</p>
                    <p>43172794</p>
                </div>
                <a href="mailto:info@studyandbeyond.es" className="fIcont">
                    <EmailLogo className="email-icon"/>
                    <span>info@studyandbeyond.es</span>
                </a>
                <a href="tel:+4531146038" className="fIcont">
                    <PhoneLogo className="phone-icon"/>
                    <span>+4531146038</span>
                </a>
            </div>
            <div id="FotPol">              
                <a id="pLegal">Legal</a>
                <a id="pPriv">Política de privacidad</a>
                <a id="pCookies">Política de Cookies</a>
                <a id="pCan">Cancelación</a>
            </div>
        </footer>
    );
}