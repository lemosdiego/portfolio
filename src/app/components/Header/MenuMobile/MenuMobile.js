import Styles from "./menumobile.module.css"

export default function MenuMobile() {
    return (
        <nav className={Styles.nav_mobile}>
            <ul>
                <li><a href="#">inicio</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#ferramentas">Habilidades</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
        </nav>
    )
}