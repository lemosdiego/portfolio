import styles from "./menu.module.css"



export default function MenuBar() {
    return (
        <nav className={styles.container}>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#ferramentas">Habilidades</a></li>
                <li><a href="#contatos">Contatos</a></li>
            </ul>
        </nav>
    )
}