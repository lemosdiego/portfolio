'use client';
import { useEffect } from 'react';
import Styles from "./menumobile.module.css"

export default function MenuMobile() {
    const abrirMenu = () => {
        let menuOpen = document.getElementById("navegacao")
        let svgmenu = document.getElementById("svgopen")
        let close = document.getElementById("svgclose")
        let menuNav = document.getElementById("nav")
        menuOpen.style.display = "flex"
        svgmenu.style.display = "none"
        close.style.display = "block"
        menuNav.style.backgroundColor = "#b71c1c9f"
        menuNav.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"
        document.addEventListener('click', clickIndentificador);

    }
    const fecharMenu = () => {
        let menuClose = document.getElementById("navegacao")
        let svgmenuclose = document.getElementById("svgclose")
        let open = document.getElementById("svgopen")
        let menuNav = document.getElementById("nav")
        menuClose.style.display = "none"
        svgmenuclose.style.display = "none"
        open.style.display = "block"
        menuNav.style.background = "none"
        document.removeEventListener('click', clickIndentificador)
    }
    const clickIndentificador = (event) => {
        const nav = document.getElementById("nav")
        if (nav && !nav.contains(event.target)) {
            fecharMenu()
        }
    }
    useEffect(() => {
        const links = document.querySelectorAll('#navegacao a')
        links.forEach(link => {
            link.addEventListener('click', fecharMenu)
        })
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', fecharMenu)
            })
            document.removeEventListener('click', clickIndentificador)
        }
    }, [])
    return (
        <div className={Styles.container}>

            <nav className={Styles.nav} id="nav">
                <div className={Styles.icones}>
                    <div className={Styles.icone1} id="svgopen" onClick={abrirMenu}>
                        <img src="menu/openwhite.svg" alt='open' />
                    </div>
                    <div className={Styles.icone2} id="svgclose" onClick={fecharMenu}>
                        <img src="menu/close.svg" alt='close' />
                    </div>
                </div>
                <ul id="navegacao">
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