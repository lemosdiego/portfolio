'use client';
import React, { useEffect } from "react";
import Styles from "./menu.module.css"
import Image from "next/image";

export default function Menu() {
    useEffect(() => {
        return () => {
            document.removeEventListener("scroll", fecharMenuDesk);
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    function abrirMenuDesk() {
        const abrir = document.getElementById("ul");
        const iconOpen = document.getElementById("open");
        const iconClose = document.getElementById("close");
        const container = document.getElementById("container");

        if (abrir && iconOpen && iconClose && container) {
            abrir.style.display = "flex";
            iconOpen.style.display = "none";
            iconClose.style.display = "block";
            container.style.background = "#B71C1C";

            document.addEventListener("scroll", fecharMenuDesk);
            document.addEventListener("click", handleClickOutside, true);
        }
    }

    function fecharMenuDesk() {
        const iconOpen = document.getElementById("open");
        const iconClose = document.getElementById("close");
        const fechar = document.getElementById("ul");
        const container = document.getElementById("container");

        if (iconOpen && iconClose && fechar && container) {
            iconOpen.style.display = "block";
            iconClose.style.display = "none";
            fechar.style.display = "none";
            container.style.background = "none";

            document.removeEventListener("scroll", fecharMenuDesk);
            document.removeEventListener("click", handleClickOutside, true);
        }
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
                    <Image src="/menu/openwhite.svg" id="open" onClick={abrirMenuDesk} className={Styles.open} alt="open" width={40} height={40} />
                    <Image id="close" onClick={fecharMenuDesk} className={Styles.close} alt="close" width={40} height={40} style={{ display: "none" }} />
                </div>
            </div>
            <nav className={Styles.nav} id="nav">
                <ul className={Styles.ul} id="ul" style={{ display: "none" }}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#ferramentas">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </nav>
        </div>
    )
}
