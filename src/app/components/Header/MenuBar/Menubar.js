'use client';
import React, { useEffect } from "react";
import Styles from "./menu.module.css"
import Image from "next/image";

export default function Menu() {
    function abrirMenuDesk() {
        let abrir = document.getElementById("ul");
        let iconOpen = document.getElementById("open")
        let iconClose = document.getElementById("close")
        let container = document.getElementById("container")

        abrir.style.display = "flex";
        iconOpen.style.display = "none"
        iconClose.style.display = "block"
        container.style.background = "#B71C1C"

        document.addEventListener("scroll", fecharMenuDesk);
        document.addEventListener("click", handleClickOutside, true);
    }

    function fecharMenuDesk() {
        let iconOpen = document.getElementById("open")
        let iconClose = document.getElementById("close")
        let fechar = document.getElementById("ul")
        let container = document.getElementById("container")

        iconOpen.style.display = "block"
        iconClose.style.display = "none"
        fechar.style.display = "none"
        container.style.background = "none"

        document.removeEventListener("scroll", fecharMenuDesk);
        document.removeEventListener("click", handleClickOutside, true);
    }

    function handleClickOutside(event) {
        const menu = document.getElementById("nav");
        if (menu && !menu.contains(event.target)) {
            fecharMenuDesk();
        }
    }

    return (
        <div className={Styles.container} id="container">
            <div className={Styles.container_icones}>
                <div className={Styles.menu}>
                    <p>Menu</p>
                </div>
                <div className={Styles.icones}>
                    <Image src="menu/openwhite.svg" id="open" onClick={abrirMenuDesk} className={Styles.open} alt="open" width={100} height={100} layout='responsive' />
                    <Image src="menu/close.svg" id="close" onClick={fecharMenuDesk} className={Styles.close} alt="close" width={100} height={100} layout='responsive' />
                </div>
            </div>
            <nav className={Styles.nav} id="nav">
                <ul className={Styles.ul} id="ul">
                    <li><a href="#">inicio</a></li>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#ferramentas">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </nav>
        </div>
    )
}
