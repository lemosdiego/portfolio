import Styles from "./inicio.module.css"

export default function Inicio() {
    return (
        <section className={Styles.container}>
            <div className={Styles.inicio}>
                <div className={Styles.img}>
                    <img src="/img/avatar.png" />
                </div>
                <div className={Styles.apresentacao}>
                    <div className={Styles.titulo}>
                        <h1>Washington Lemos</h1>
                    </div>
                    <div className={Styles.subtitle}>
                        <h2>Front end web developer</h2>
                        <p>Bem vindo ao meu portfolio</p>
                    </div>
                </div>
                <div className={Styles.redes}>
                    <a href=""><button>Linkedin</button></a>
                    <a href=""><button>Linkedin</button></a>
                </div>
            </div>
        </section>
    )
}