import Styles from "./inicio.module.css"

export default function Inicio() {
    return (
        <section className={Styles.container}>
            <div className={Styles.inicio}>
                <div className={Styles.apresentacao}>
                    <div className={Styles.titulo}>
                        <h1>Washington Lemos</h1>
                    </div>
                    <div className={Styles.subtitle}>
                        <h2>Front end web developer</h2>
                    </div>
                    <div className={Styles.descricao}>
                        <h3>Bem vindo ao meu Portfólio</h3>
                        <p>Sou programador front-end, natural de Recife, mas atualmente resido entre Recife e São Paulo. Tenho experiência com HTML, CSS, JavaScript e frameworks como React e Angular. Estou em busca de novas oportunidades para aplicar minhas habilidades e contribuir para projetos inovadores.</p>
                    </div>
                    <div className={Styles.redes}>
                        <a href="https://www.linkedin.com/in/washington-lemos-033177186/" target="blank"><button>Linkedin</button></a>
                        <a href="https://github.com/lemosdiego" target="blank"><button>Github</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}