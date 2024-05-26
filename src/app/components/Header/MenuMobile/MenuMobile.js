'use client';
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
        menuNav.style.backgroundColor = "#333"
        menuNav.style.opacity = "0.8"
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
    }
    return (
        <div className={Styles.container}>

            <nav className={Styles.nav} id="nav">
                <div className={Styles.icones}>
                    <div className={Styles.icone1} id="svgopen" onClick={abrirMenu}>
                        <img src="menu/open.svg" />
                    </div>
                    <div className={Styles.icone2} id="svgclose" onClick={fecharMenu}>
                        <img src="menu/close.svg" />
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