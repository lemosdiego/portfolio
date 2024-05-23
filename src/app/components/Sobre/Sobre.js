import Styles from "./sobre.module.css"

export default function Sobre() {
    return (
        <section className={Styles.container} id="sobre">
            <div className={Styles.container_sobre}>
                <div className={Styles.img}>
                    <img src="/img/eu.png" />
                </div>
                <div className={Styles.descricao}>
                    <div className={Styles.title}>
                        <h2>Sobre mim</h2>
                    </div>
                    <div className={Styles.sobremim}>
                        <p>Sou um profissional apaixonado por tecnologia e inovação, com uma sólida formação em Análise e Desenvolvimento de Sistemas. Atualmente, estou focado em aprimorar minhas habilidades em Engenharia de Software e no desenvolvimento Full Stack. Resido entre Recife e São Paulo, duas cidades vibrantes que me proporcionam uma perspectiva diversificada do mercado de tecnologia. Curto muito games, futebol, viajar e estar sempre em contato com a natureza. Estou atualmente em busca de oportunidades de estágio ou posição júnior na área de desenvolvimento de software, onde posso aplicar minhas habilidades técnicas, aprender e crescer profissionalmente. Estou pronto para enfrentar novos desafios e contribuir para projetos inovadores que impactem positivamente a vida das pessoas. Se você está em busca de um profissional dedicado, apaixonado pela tecnologia e comprometido com o crescimento pessoal e profissional, estou pronto para fazer parte da sua equipe.</p>
                    </div>
                    <div className={Styles.redes}>
                        <div className={Styles.curriculo}>
                            <a href="" download><button>Curriculo</button></a>
                            <a href="https://drive.google.com/drive/folders/1zDTjqRBDQOFBmYn4MCzDyF1tl_CG-VV8?usp=drive_link" target="blank"><button>Certificados</button></a>
                        </div>
                        <div className={Styles.contatos}>
                            <div className={Styles.icon}>
                                <a href="https://WA.me/5581982383803" target="_blank">
                                    <img src="/img/whats.svg" />
                                </a>
                            </div>
                            <div className={Styles.icon}>
                                <a href="https://ig.me/m/washington.lemos_" target="blank">
                                    <img src="/img/messenger.svg" />
                                </a>
                            </div>
                            <div className={Styles.icon}>
                                <img src="/img/tele.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}