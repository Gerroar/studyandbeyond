import {ReactComponent as PhoneLogo} from "../img/phone-icon.svg";
import {ReactComponent as EmailLogo} from "../img/email-icon.svg";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer({setShowModal, setModalOption, identificador}) {
    /**En este componente generamos el footer, que siempre
     * será el mismo independientemente del tamaño
     */

    useEffect(() => {

        let legal = document.getElementById("pLegal");
        let priv = document.getElementById("pPriv");
        let cookies = document.getElementById("pCookies");
        let cancel = document.getElementById("pCan");

        legal.addEventListener('click', (e) => {
            setShowModal(true);
            setModalOption("legal");
        });
        priv.addEventListener('click', (e) => {
            setShowModal(true);
            setModalOption("priv");
        });
        cookies.addEventListener('click', (e) => {
            setShowModal(true);
            setModalOption("cookies");
        });
        cancel.addEventListener('click', (e) => {
            setShowModal(true);
            setModalOption("cancel");
        });
    }, []);
    return(
        <footer id={identificador}>
            <div id="FotCon">
                <div>
                    <p>CVR</p>
                    <p>43172794</p>
                </div>
                <a href="mailto:info@studyandbeyond.es" className="fIcont">
                    <span>info@studyandbeyond.es</span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+34635369915" className="fIcont">
                    <span>635369915</span>
                    
                </a>
            </div>
            <div id="FotPol">              
                <a id="pLegal">Aviso Legal</a>
                <a id="pPriv">Política de privacidad</a>
                <a id="pCookies">Política de Cookies</a>
                <a id="pCan">Cancelación</a>
            </div>
        </footer>
    );
}