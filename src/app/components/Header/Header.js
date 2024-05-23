import MenuBar from "./MenuBar/Menubar"
import Styles from "./header.module.css"


export default function Header() {
    return (
        <div className={Styles.container} id="inicio">
            <div className={Styles.menu}>
                <MenuBar />
            </div>
            <div className={Styles.apresentacao}>
                <div className={Styles.container_box}>
                    <div className={Styles.img}>
                        <img src="/img/avatar.png" />
                    </div>
                    <div className={Styles.title}>
                        <h1>Washington Lemos</h1>
                    </div>
                    <div className={Styles.descricao}>
                        <h2>Front end Web developer</h2>
                        <p>Seja bem vindo ao meu Portfólio</p>
                    </div>
                    <div className={Styles.redes}>
                        <a href="https://www.linkedin.com/in/washington-lemos-033177186/" target="blank">
                            <button>
                                Linkedin
                            </button>
                        </a>
                        <a href="https://github.com/lemosdiego" target="blank">
                            <button>
                                Github
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}