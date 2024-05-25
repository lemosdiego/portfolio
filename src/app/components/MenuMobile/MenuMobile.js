'use client';
import Styles from "./menumobile.module.css"

export default function MenuMobile() {
    const abrirMenu = () => {
        let abrir = document.getElementById("abrir")
        let iconAbrir = document.getElementById("menuabrir")
        let iconFechar = document.getElementById("menufechar")

        iconAbrir.style.display = "none"
        iconFechar.style.display = "block"
        abrir.style.display = "flex"
    }
    const fecharMenu = () => {
        let fechar = document.getElementById("abrir")
        let iconAbrir = document.getElementById("menuabrir")
        let iconFechar = document.getElementById("menufechar")

        iconAbrir.style.display = "block"
        iconFechar.style.display = "none"
        fechar.style.display = "none"
    }
    return (
        <div className={Styles.container_menu}>
            <nav className={Styles.nav_mobile}>
                <ul id="abrir">
                    <li><a href="#">inicio</a></li>
                    <li><a href="#sobre">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#ferramentas">Habilidades</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
                <div className={Styles.container_icon}>
                    <div className={Styles.icons}>
                        <a href="#"> <img src="/menu/inicio.svg" /></a>
                    </div>
                    <div className={Styles.icons}>
                        <a href="#sobre"><img src="/menu/perfil.svg" /></a>
                    </div>
                    <div className={Styles.icons}>
                        <a href="#projetos"> <img src="/menu/projetos.svg" /></a>
                    </div>
                    <div className={Styles.icons}>
                        <a href="#ferramentas"><img src="/menu/habilidades.svg" /></a>
                    </div>
                    <div className={Styles.icons}>
                        <a href="#contatos"> <img src="/menu/contatos.svg" /></a>
                    </div>
                    <div className={Styles.menu_hamburguer} >
                        <img src="/menu/menu.svg" id="menuabrir" onClick={abrirMenu} />
                        <img src="/menu/close.svg" id="menufechar" onClick={fecharMenu} />
                    </div>
                </div>
            </nav>
        </div>
    )
}