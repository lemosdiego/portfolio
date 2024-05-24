import Styles from "./menu.module.css"

export default function Menu() {
    return (
        <nav className={Styles.nav}>
            <ul>
                <li><a href="#">inicio</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#ferramentas">Ferramentas</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
        </nav>
    )
}